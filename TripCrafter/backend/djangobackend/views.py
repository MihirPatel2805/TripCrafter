from rest_framework import generics,serializers, status , permissions
from .models import Tour,Booking 
from django.contrib.auth.models import User
from .serializers import UserRegistrationSerializer,UserLoginSerializer,UserInfoSerializer,TourSerializer,BookingSerializer,ShowBookingSerializer
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
# from django.shortcuts import get_object_or_404

###############################################     login register start here

#--------- view which creates user
class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer


#----------- view which authenticate user and makes token and return user's username
class UserLoginView(generics.CreateAPIView):
    serializer_class = UserLoginSerializer   #Specify the serializer class

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')

        user = authenticate(request, username = username, password = password)

        if user is not None:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'message': 'Login successful','username':username})
        else:
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

#------------user info view which returns user data 
class UserInfoView(generics.RetrieveAPIView):
    serializer_class = UserInfoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

####################################################    Tour logic

class TourListCreateView(generics.ListCreateAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer


#---------------    get a specific tour
@api_view(['GET'])
def get_tour_detail(request, id):
    try:
        tour = Tour.objects.get(pk=id)
    except Tour.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = TourSerializer(tour)
    return Response(serializer.data)

###########################################################     bookings logic

#---------  create booking logic when booking is made

@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def create_booking(request):
    data = request.data.copy()
    data['user'] = request.user.id
    serializer = BookingSerializer(data=data)
    if serializer.is_valid():
        # Create the booking
        serializer.save()

        # Update the tour's max_group_size
        tour_id = data['tour']
        num_of_people = int(data['num_of_people'])
        tour = Tour.objects.get(id=tour_id)

        print(tour.seat)
        print(data['booking_date'])
        for date in tour.seat:
            if date['Date']==data['booking_date'] :
                if date['available_seats']>=num_of_people:
                    date['available_seats'] -= num_of_people
                    if date['available_seats'] < 0:
                        date['available_seats'] = 0
                    tour.save()
                    break
        print(tour.seat)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#-------- fetching all bookings

class BookingList(generics.ListCreateAPIView):
    serializer_class = ShowBookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filter bookings by the current authenticated user
        return Booking.objects.filter(user=self.request.user)
    
    def perform_authentication(self, request):
        if not request.user.is_authenticated:
            return Response({'detail': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        return super().perform_authentication(request)

#-------- delete a specific booking
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_booking(request, id):
    print(request.data)
    print(id)
    try:
        booking = Booking.objects.get(id=id)
        print(booking)
        tour = booking.tour
        print(tour)
        # print(request.data)
        
        # Restore the seats
        # tour.seat += booking.num_of_people
        for i in tour.seat:
            print(i)
            if booking.booking_date == i['Date']:
                i['available_seats']+=booking.num_of_people
        tour.save()

        # Delete the booking
        booking.delete()
        return Response({'message': "Delete successful"}, status=status.HTTP_204_NO_CONTENT)
    except Booking.DoesNotExist:
        return Response({'message': "Booking not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)




from rest_framework import generics
from .models import Train, Station, Route ,Coach
from .serializers import CoachSerializer, StationSerializer ,TrainSerializer
class TrainListView(generics.ListCreateAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer

class StationListView(generics.ListAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class CoachView(generics.ListAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer

class TrainDetailView(generics.RetrieveAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer
    lookup_field = 'id'  # This will look for 'id' in the URL