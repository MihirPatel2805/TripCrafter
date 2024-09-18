# appname/serializers.py
from rest_framework import serializers
from .models import Tour,Booking 
from django.contrib.auth.models import User


############################################            user registration serializer
class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        # Hashing the password
        password = validated_data.pop('password')
        user.set_password(password)

        user.save()
        return user


############################################            user login serializer
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)



############################################            user info serializer
class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email','id')  # Include fields you want to expose


############################################          Tour serializer
class TourSerializer(serializers.ModelSerializer):
   class Meta:
        model = Tour
        fields = '__all__'


#############################################          booking serializers
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class ShowBookingSerializer(serializers.ModelSerializer):
    tour=serializers.CharField(source='tour.tour')
    class Meta:
        model=Booking
        fields=['id','tour','full_name','age','mobile_number','num_of_people','booking_date','gender','status']
        
    def to_representation(self, instance):
        request=self.context.get('request')
        return {
            'booking_id':instance.id,
            "title":instance.tour.title,
            "full_name":instance.full_name,
            "age":instance.age,
            "mobile_number":instance.mobile_number,
            "num_of_people":instance.num_of_people,
            "booking_date":instance.booking_date,
            "gender":instance.gender,
            "price":instance.tour.price,
            "status":instance.status,

        }