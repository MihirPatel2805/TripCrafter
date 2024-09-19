from django.urls import path
from . import views
from .views import TrainListView, StationListView, CoachView ,TrainDetailView


urlpatterns = [
    
    path('api/register/', views.UserRegistrationView.as_view(), name='Register'),
    path('api/login/', views.UserLoginView.as_view(), name='login'),
    path('api/get-user-info/', views.UserInfoView.as_view(), name='get-user-info'),
    path('tours/', views.TourListCreateView.as_view(), name='tour-list-create'),
    path('api/tours/<int:id>/', views.get_tour_detail, name='tour-detail'),  ###func called
    path('api/bookings/', views.create_booking, name='booking-create'),    ###func called
    path('api/mybookings/', views.BookingList.as_view(), name='booking-list'),
    path('api/deletebooking/<int:id>', views.delete_booking, name='booking-delete'),
    path('trains/', TrainListView.as_view(), name='train-list'),
    path('stations/', StationListView.as_view(), name='station-list'),
    path('coaches/', CoachView.as_view(), name='train-detail'),
    path('trains/<str:id>/', TrainDetailView.as_view(), name='train-detail'),  # URL for fetching train by ID
]





