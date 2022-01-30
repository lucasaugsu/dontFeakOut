import { Entypo, Feather, Fontisto, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProductQrCodeScreen from '../app/components/productqrcodescreen';
import ReservationQrCodeScreen from '../app/components/reservationqrcodescreen';
import AppAgreement from '../scenes/AppAgreement';
import BuyEventDetail from '../scenes/buyevent/buyeventdetail';
import BuyEventModal from '../scenes/buyevent/buyeventmodal';
import InviteFriends from '../scenes/buyevent/invitefriends';
import ShoppingCart from '../scenes/buyevent/shoppingcart';
import ChangePassword from '../scenes/changepassword';
import Chat from '../scenes/chats/chat';
import ChatList from '../scenes/chats/chatlist';
import CloseOrderSheetNavigator from '../scenes/closeordersheet/closeordersheetnavigator';
import ConfirmedFriends from '../scenes/confirmedfriends';
import ConfirmedPeople from '../scenes/confirmedpeople';
import CouponsCreationNavigator from '../scenes/coupons/couponcreationnavigator';
import UserCoupons from '../scenes/coupons/usercoupons';
import EstablishmentCreationNavigator from '../scenes/establishmentcreation/establishmentnavigator';
import EstablishmentDetails from '../scenes/establishmentdetails';
import Establishments from '../scenes/establishments';
import EventCreationNavigator from '../scenes/eventcreation/eventcreationnavigator';
import Faq from '../scenes/faq';
import Followers from '../scenes/followers';
import ForgotPassword from '../scenes/forgotpassword';
import Friends from '../scenes/friends';
import FriendsInvite from '../scenes/friendsinvite';
// Scenes
import Login from '../scenes/login';
import MakeReservation from '../scenes/makereservation/makereservation';
import PayReservation from '../scenes/makereservation/payreservation';
import ValidateReservationQrCode from '../scenes/makereservation/validatereservation';
import MapScreen from '../scenes/mapscreen/map';
import Menu from '../scenes/menu';
import MenuList from '../scenes/menu/menulist';
import MenuCreationNavigator from '../scenes/menu/menunavigator';
import Menus from '../scenes/menu/menus';
import Notifications from '../scenes/mynotifications/Notifications';
import MyTicket from '../scenes/myticket';
import NewProduct from '../scenes/newproduct';
import OrderSheet from '../scenes/ordersheet';
import PaymentMethodCreateNew from '../scenes/paymentmethods/paymentmethodcreatenew';
import PaymentMethodList from '../scenes/paymentmethods/paymentmethodlist';
import PayCart from '../scenes/productpayment/paycart';
import ProductPayment from '../scenes/productpayment/productpayment';
import ValidateCartQrCode from '../scenes/productpayment/validatecartqrcode';
import ProductsShopCart from '../scenes/productsshopcart';
import Profile from '../scenes/profile';
import ProfileEdit from '../scenes/profileedit/profileedit';
import QrCodes from '../scenes/qrcodes';
import ReportScreen from '../scenes/reports/reportscreen';
import ReservationCreationNavigator from '../scenes/reservationcreation/reservationcreationnavigator';
import ShowDetail from '../scenes/showdetail';
import ShowList from '../scenes/showlist';
import SignUp from '../scenes/signup/signup';
import TeamsScreen from '../scenes/teams/teamsscreen';
import TicketCreationNavigator from '../scenes/ticketcreation/ticketcreationnavigator';
import Tickets from '../scenes/tickets';
import UserProducts from '../scenes/userproducts';
import UserProfile from '../scenes/userprofile';
import UserReservations from '../scenes/userreservations';
import ValidateTicket from '../scenes/validateticket';
import ValidateQrCodes from '../scenes/validateqrcodes';
import VerificationCode from '../scenes/verificationcode';
import { colors } from './theme';
import BankAccountsCreationNavigator from '../scenes/bankaccounts/bankaccountsnavigator';




export const PRIVATE_ROUTE_NAMES = [
  'Profile',
  'Tickets',
  'Menu',
  'BuyEventDetail',
  'PaymentMethodList',
  'PaymentMethodCreateNew',
  'Faq',
  'InviteFriends',
  'BuyEventModal',
  'ProfileEdit',
  'PaymentMethodCreateNew',
  'MyTicket',
  'Establishments',
  'EstablishmentDetails',
  'UserProfile'
];

const Tab = createBottomTabNavigator();

const PublicAreaStack = createStackNavigator()
const MapStack = createStackNavigator()
const NotificationsStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const CompanyStack = createStackNavigator()
const ChatStack = createStackNavigator()


const disableBottomTabBar = (navigation) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return { tabBarVisible };
};

const MapNavigator = () => <MapStack.Navigator 
  initialRouteName='MapScreen' 
  headerMode='none'>
  <MapStack.Screen name="MapScreen" component={MapScreen} />
  <MapStack.Screen name="ShowList" component={ShowList} />
  <MapStack.Screen name="ShowDetail" component={ShowDetail} />
  <MapStack.Screen name="Profile" component={Profile} />
  <MapStack.Screen name="AppAgreement" component={AppAgreement} />
  <MapStack.Screen name="Menu" component={Menu} />
  <MapStack.Screen name="ShoppingCart" component={ShoppingCart} />
  <MapStack.Screen name="BuyEventDetail" component={BuyEventDetail} />
  <MapStack.Screen name="PaymentMethodList" component={PaymentMethodList} />
  <MapStack.Screen name="PaymentMethodCreateNew" component={PaymentMethodCreateNew} />
  <MapStack.Screen name="Faq" component={Faq} />
  <MapStack.Screen name="InviteFriends" component={InviteFriends} />
  <MapStack.Screen name="BuyEventModal" component={BuyEventModal} />
  <MapStack.Screen name="Establishments" component={Establishments} />
  <MapStack.Screen name="EstablishmentDetails" component={EstablishmentDetails} />
  <MapStack.Screen name="EstablishmentCreation" component={EstablishmentCreationNavigator} />
  <MapStack.Screen name="EventCreation" component={EventCreationNavigator} />
  <MapStack.Screen name="ConfirmedFriends" component={ConfirmedFriends} />
  <MapStack.Screen name="ConfirmedPeople" component={ConfirmedPeople} />
  <MapStack.Screen name="TicketCreationNavigator" component={TicketCreationNavigator} />
  <MapStack.Screen name="ProfileEdit" component={ProfileEdit} />
  <MapStack.Screen name="UserProfile" component={UserProfile} />
  <MapStack.Screen name="MenuList" component={MenuList} />
  <MapStack.Screen name="Menus" component={Menus} />
  <MapStack.Screen name="ProductsShopCart" component={ProductsShopCart} />
  <MapStack.Screen name="OrderSheet" component={OrderSheet} />
  <MapStack.Screen name="MenuCreationNavigator" component={MenuCreationNavigator} />
  <MapStack.Screen name="NewProduct" component={NewProduct} />
  <MapStack.Screen name="ReportScreen" component={ReportScreen} />
  <MapStack.Screen name="ChatList" component={ChatList} />
  <MapStack.Screen name="Chat" component={Chat} />
  <MapStack.Screen name="TeamsScreen" component={TeamsScreen} />
  <MapStack.Screen name="CloseOrderSheetNavigator" component={CloseOrderSheetNavigator} />
  <MapStack.Screen name="QrCodes" component={QrCodes} />
  <MapStack.Screen name="ValidateQrCodes" component={ValidateQrCodes} />
  <MapStack.Screen name="Notifications" component={Notifications} />
  <MapStack.Screen name="FriendsInvite" component={FriendsInvite} />
  <MapStack.Screen name="Friends" component={Friends} />
  <MapStack.Screen name="ProductPayment" component={ProductPayment} />
  <MapStack.Screen name="PayCart" component={PayCart} />
  <MapStack.Screen name="UserProducts" component={UserProducts} />
  <MapStack.Screen name="ProductQrCodeScreen" component={ProductQrCodeScreen} />
  <MapStack.Screen name="ValidateCartQrCode" component={ValidateCartQrCode} />
  <MapStack.Screen name="Tickets" component={Tickets} />
  <MapStack.Screen name="Followers" component={Followers} />
  <MapStack.Screen name="ReservationCreationNavigator" component={ReservationCreationNavigator} />
  <MapStack.Screen name="MakeReservation" component={MakeReservation} />
  <MapStack.Screen name="PayReservation" component={PayReservation} />
  <MapStack.Screen name="UserReservations" component={UserReservations} />
  <MapStack.Screen name="ReservationQrCodeScreen" component={ReservationQrCodeScreen} />
  <MapStack.Screen name="ValidateReservationQrCode" component={ValidateReservationQrCode} />
  <MapStack.Screen name="CouponsCreationNavigator" component={CouponsCreationNavigator} />
  <MapStack.Screen name="UserCoupons" component={UserCoupons} />
  <MapStack.Screen name="ValidateTicket" component={ValidateTicket} />
  <MapStack.Screen name="BankAccountsCreationNavigator" component={BankAccountsCreationNavigator} />

</MapStack.Navigator>

const ProfileNavigator = () => <ProfileStack.Navigator 
  screenOptions={({ navigation }) => ({title: 'perfil'})}
  initialRouteName='Profile'
  headerMode='none'>
  <ProfileStack.Screen name="Profile" component={Profile} />
  <ProfileStack.Screen name="Menu" component={Menu} />
  <ProfileStack.Screen name="ProfileEdit" component={ProfileEdit} />
  <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
  <ProfileStack.Screen name="PaymentMethodList" component={PaymentMethodList} />
  <ProfileStack.Screen name="PaymentMethodCreateNew" component={PaymentMethodCreateNew} />
  <ProfileStack.Screen name="Faq" component={Faq} />
  <ProfileStack.Screen name="Establishments" component={Establishments} />
  <ProfileStack.Screen name="EstablishmentDetails" component={EstablishmentDetails} />
  <ProfileStack.Screen name="EstablishmentCreation" component={EstablishmentCreationNavigator} />
  <ProfileStack.Screen name="EventCreation" component={EventCreationNavigator} />
  <ProfileStack.Screen name="ConfirmedFriends" component={ConfirmedFriends} />
  <ProfileStack.Screen name="ConfirmedPeople" component={ConfirmedPeople} />
  <ProfileStack.Screen name="TicketCreationNavigator" component={TicketCreationNavigator} />
  <ProfileStack.Screen name="UserProfile" component={UserProfile} />
  <ProfileStack.Screen name="MenuList" component={MenuList} />
  <ProfileStack.Screen name="Menus" component={Menus} />
  <ProfileStack.Screen name="ProductsShopCart" component={ProductsShopCart} />
  <ProfileStack.Screen name="OrderSheet" component={OrderSheet} />
  <ProfileStack.Screen name="MenuCreationNavigator" component={MenuCreationNavigator} />
  <ProfileStack.Screen name="NewProduct" component={NewProduct} />
  <ProfileStack.Screen name="ReportScreen" component={ReportScreen} />
  <ProfileStack.Screen name="ChatList" component={ChatList} />
  <ProfileStack.Screen name="TeamsScreen" component={TeamsScreen} />
  <ProfileStack.Screen name="Chat" component={Chat} />
  <ProfileStack.Screen name="ShowList" component={ShowList} />
  <ProfileStack.Screen name="ShowDetail" component={ShowDetail} />
  <ProfileStack.Screen name="AppAgreement" component={AppAgreement} />
  <ProfileStack.Screen name="ShoppingCart" component={ShoppingCart} />
  <ProfileStack.Screen name="BuyEventDetail" component={BuyEventDetail} />
  <ProfileStack.Screen name="InviteFriends" component={InviteFriends} />
  <ProfileStack.Screen name="BuyEventModal" component={BuyEventModal} />
  <ProfileStack.Screen name="CloseOrderSheetNavigator" component={CloseOrderSheetNavigator} />
  <ProfileStack.Screen name="QrCodes" component={QrCodes} />
  <ProfileStack.Screen name="ValidateQrCodes" component={ValidateQrCodes} />
  <ProfileStack.Screen name="Notifications" component={Notifications} />
  <ProfileStack.Screen name="FriendsInvite" component={FriendsInvite} />
  <ProfileStack.Screen name="Friends" component={Friends} />
  <ProfileStack.Screen name="ProductPayment" component={ProductPayment} />
  <ProfileStack.Screen name="PayCart" component={PayCart} />
  <ProfileStack.Screen name="UserProducts" component={UserProducts} />
  <ProfileStack.Screen name="ProductQrCodeScreen" component={ProductQrCodeScreen} />
  <ProfileStack.Screen name="ValidateCartQrCode" component={ValidateCartQrCode} />
  <ProfileStack.Screen name="Tickets" component={Tickets} />
  <ProfileStack.Screen name="Followers" component={Followers} />
  <ProfileStack.Screen name="ReservationCreationNavigator" component={ReservationCreationNavigator} />
  <ProfileStack.Screen name="MakeReservation" component={MakeReservation} />
  <ProfileStack.Screen name="PayReservation" component={PayReservation} />
  <ProfileStack.Screen name="UserReservations" component={UserReservations} />
  <ProfileStack.Screen name="ReservationQrCodeScreen" component={ReservationQrCodeScreen} />
  <ProfileStack.Screen name="ValidateReservationQrCode" component={ValidateReservationQrCode} />
  <ProfileStack.Screen name="CouponsCreationNavigator" component={CouponsCreationNavigator} />
  <ProfileStack.Screen name="UserCoupons" component={UserCoupons} />
  <ProfileStack.Screen name="ValidateTicket" component={ValidateTicket} />
  <ProfileStack.Screen name="BankAccountsCreationNavigator" component={BankAccountsCreationNavigator} />
  

</ProfileStack.Navigator>

const NotificationsNavigator = () => <NotificationsStack.Navigator 
  screenOptions={({ navigation }) => ({title: 'notificacoes'})}
  initialRouteName='Notifications'
  headerMode='none'>
  <NotificationsStack.Screen name="Tickets" component={Tickets} />
  <NotificationsStack.Screen name="Menu" component={Menu} />
  <NotificationsStack.Screen name="MyTicket" component={MyTicket} />
  <NotificationsStack.Screen name="Faq" component={Faq} />
  <NotificationsStack.Screen name="Establishments" component={Establishments} />
  <NotificationsStack.Screen name="EstablishmentDetails" component={EstablishmentDetails} />
  <NotificationsStack.Screen name="EstablishmentCreation" component={EstablishmentCreationNavigator} />
  <NotificationsStack.Screen name="EventCreation" component={EventCreationNavigator} />
  <NotificationsStack.Screen name="ConfirmedFriends" component={ConfirmedFriends} />
  <NotificationsStack.Screen name="ConfirmedPeople" component={ConfirmedPeople} />
  <NotificationsStack.Screen name="TicketCreationNavigator" component={TicketCreationNavigator} />
  <NotificationsStack.Screen name="ProfileEdit" component={ProfileEdit} />
  <NotificationsStack.Screen name="UserProfile" component={UserProfile} />
  <NotificationsStack.Screen name="MenuList" component={MenuList} />
  <NotificationsStack.Screen name="Menus" component={Menus} />
  <NotificationsStack.Screen name="ProductsShopCart" component={ProductsShopCart} />
  <NotificationsStack.Screen name="OrderSheet" component={OrderSheet} />
  <NotificationsStack.Screen name="MenuCreationNavigator" component={MenuCreationNavigator} />
  <NotificationsStack.Screen name="NewProduct" component={NewProduct} />
  <NotificationsStack.Screen name="ReportScreen" component={ReportScreen} />
  <NotificationsStack.Screen name="ChatList" component={ChatList} />
  <NotificationsStack.Screen name="Chat" component={Chat} />
  <NotificationsStack.Screen name="TeamsScreen" component={TeamsScreen} />
  <NotificationsStack.Screen name="CloseOrderSheetNavigator" component={CloseOrderSheetNavigator} />
  <NotificationsStack.Screen name="QrCodes" component={QrCodes} />
  <NotificationsStack.Screen name="ValidateQrCodes" component={ValidateQrCodes} />
  <NotificationsStack.Screen name="Notifications" component={Notifications} />
  <NotificationsStack.Screen name="FriendsInvite" component={FriendsInvite} />
  <NotificationsStack.Screen name="Friends" component={Friends} />
  <NotificationsStack.Screen name="ProductPayment" component={ProductPayment} />
  <NotificationsStack.Screen name="PayCart" component={PayCart} />
  <NotificationsStack.Screen name="UserProducts" component={UserProducts} />
  <NotificationsStack.Screen name="ProductQrCodeScreen" component={ProductQrCodeScreen} />
  <NotificationsStack.Screen name="ValidateCartQrCode" component={ValidateCartQrCode} />
  <NotificationsStack.Screen name="Followers" component={Followers} />
  <NotificationsStack.Screen name="ReservationCreationNavigator" component={ReservationCreationNavigator} />
  <NotificationsStack.Screen name="MakeReservation" component={MakeReservation} />
  <NotificationsStack.Screen name="PayReservation" component={PayReservation} />
  <NotificationsStack.Screen name="UserReservations" component={UserReservations} />
  <NotificationsStack.Screen name="ReservationQrCodeScreen" component={ReservationQrCodeScreen} />
  <NotificationsStack.Screen name="ValidateReservationQrCode" component={ValidateReservationQrCode} />
  <NotificationsStack.Screen name="CouponsCreationNavigator" component={CouponsCreationNavigator} />
  <NotificationsStack.Screen name="UserCoupons" component={UserCoupons} />
  <NotificationsStack.Screen name="ValidateTicket" component={ValidateTicket} />
  <NotificationsStack.Screen name="BankAccountsCreationNavigator" component={BankAccountsCreationNavigator} />
  <NotificationsStack.Screen name="ShowDetail" component={ShowDetail} />
</NotificationsStack.Navigator>

const MenusNavigator = () => <CompanyStack.Navigator 
  screenOptions={({ navigation }) => ({title: 'companias'})}
  initialRouteName='Menu'
  headerMode='none'>
  <CompanyStack.Screen name="MapScreen" component={MapScreen} />
  <CompanyStack.Screen name="ShowList" component={ShowList} />
  <CompanyStack.Screen name="ShowDetail" component={ShowDetail} />
  <CompanyStack.Screen name="Profile" component={Profile} />
  <CompanyStack.Screen name="AppAgreement" component={AppAgreement} />
  <CompanyStack.Screen name="Menu" component={Menu} />
  <CompanyStack.Screen name="ShoppingCart" component={ShoppingCart} />
  <CompanyStack.Screen name="BuyEventDetail" component={BuyEventDetail} />
  <CompanyStack.Screen name="PaymentMethodList" component={PaymentMethodList} />
  <CompanyStack.Screen name="PaymentMethodCreateNew" component={PaymentMethodCreateNew} />
  <CompanyStack.Screen name="Faq" component={Faq} />
  <CompanyStack.Screen name="InviteFriends" component={InviteFriends} />
  <CompanyStack.Screen name="BuyEventModal" component={BuyEventModal} />
  <CompanyStack.Screen name="Establishments" component={Establishments} />
  <CompanyStack.Screen name="EstablishmentDetails" component={EstablishmentDetails} />
  <CompanyStack.Screen name="EstablishmentCreation" component={EstablishmentCreationNavigator} />
  <CompanyStack.Screen name="EventCreation" component={EventCreationNavigator} />
  <CompanyStack.Screen name="ConfirmedFriends" component={ConfirmedFriends} />
  <CompanyStack.Screen name="ConfirmedPeople" component={ConfirmedPeople} />
  <CompanyStack.Screen name="TicketCreationNavigator" component={TicketCreationNavigator} />
  <CompanyStack.Screen name="ProfileEdit" component={ProfileEdit} />
  <CompanyStack.Screen name="UserProfile" component={UserProfile} />
  <CompanyStack.Screen name="MenuList" component={MenuList} />
  <CompanyStack.Screen name="Menus" component={Menus} />
  <CompanyStack.Screen name="ProductsShopCart" component={ProductsShopCart} />
  <CompanyStack.Screen name="OrderSheet" component={OrderSheet} />
  <CompanyStack.Screen name="MenuCreationNavigator" component={MenuCreationNavigator} />
  <CompanyStack.Screen name="NewProduct" component={NewProduct} />
  <CompanyStack.Screen name="ReportScreen" component={ReportScreen} />
  <CompanyStack.Screen name="ChatList" component={ChatList} />
  <CompanyStack.Screen name="Chat" component={Chat} />
  <CompanyStack.Screen name="TeamsScreen" component={TeamsScreen} />
  <CompanyStack.Screen name="CloseOrderSheetNavigator" component={CloseOrderSheetNavigator} />
  <CompanyStack.Screen name="QrCodes" component={QrCodes} />
  <CompanyStack.Screen name="ValidateQrCodes" component={ValidateQrCodes} />
  <CompanyStack.Screen name="Notifications" component={Notifications} />
  <CompanyStack.Screen name="FriendsInvite" component={FriendsInvite} />
  <CompanyStack.Screen name="Friends" component={Friends} />
  <CompanyStack.Screen name="ProductPayment" component={ProductPayment} />
  <CompanyStack.Screen name="PayCart" component={PayCart} />
  <CompanyStack.Screen name="UserProducts" component={UserProducts} />
  <CompanyStack.Screen name="ProductQrCodeScreen" component={ProductQrCodeScreen} />
  <CompanyStack.Screen name="ValidateCartQrCode" component={ValidateCartQrCode} />
  <CompanyStack.Screen name="Tickets" component={Tickets} />
  <CompanyStack.Screen name="Followers" component={Followers} />
  <CompanyStack.Screen name="ReservationCreationNavigator" component={ReservationCreationNavigator} />
  <CompanyStack.Screen name="MakeReservation" component={MakeReservation} />
  <CompanyStack.Screen name="PayReservation" component={PayReservation} />
  <CompanyStack.Screen name="UserReservations" component={UserReservations} />
  <CompanyStack.Screen name="ReservationQrCodeScreen" component={ReservationQrCodeScreen} />
  <CompanyStack.Screen name="ValidateReservationQrCode" component={ValidateReservationQrCode} />
  <CompanyStack.Screen name="MyTicket" component={MyTicket} />
  <CompanyStack.Screen name="CouponsCreationNavigator" component={CouponsCreationNavigator} />
  <CompanyStack.Screen name="UserCoupons" component={UserCoupons} />
  <CompanyStack.Screen name="ValidateTicket" component={ValidateTicket} />
  <CompanyStack.Screen name="BankAccountsCreationNavigator" component={BankAccountsCreationNavigator} />

</CompanyStack.Navigator>

const ChatNavigator = () => <ChatStack.Navigator 
  screenOptions={({ navigation }) => ({title: 'chats'})}
  initialRouteName='ChatList'
  headerMode='none'>
  <ChatStack.Screen name="ChatList" component={ChatList} />
  <ChatStack.Screen name="Chat" component={Chat} />
  <ChatStack.Screen name="ShowList" component={ShowList} />
  <ChatStack.Screen name="ShowDetail" component={ShowDetail} />
  <ChatStack.Screen name="Profile" component={Profile} />
  <ChatStack.Screen name="AppAgreement" component={AppAgreement} />
  <ChatStack.Screen name="Menu" component={Menu} />
  <ChatStack.Screen name="ShoppingCart" component={ShoppingCart} />
  <ChatStack.Screen name="BuyEventDetail" component={BuyEventDetail} />
  <ChatStack.Screen name="PaymentMethodList" component={PaymentMethodList} />
  <ChatStack.Screen name="PaymentMethodCreateNew" component={PaymentMethodCreateNew} />
  <ChatStack.Screen name="Faq" component={Faq} />
  <ChatStack.Screen name="InviteFriends" component={InviteFriends} />
  <ChatStack.Screen name="BuyEventModal" component={BuyEventModal} />
  <ChatStack.Screen name="Establishments" component={Establishments} />
  <ChatStack.Screen name="EstablishmentDetails" component={EstablishmentDetails} />
  <ChatStack.Screen name="EstablishmentCreation" component={EstablishmentCreationNavigator} />
  <ChatStack.Screen name="EventCreation" component={EventCreationNavigator} />
  <ChatStack.Screen name="ConfirmedFriends" component={ConfirmedFriends} />
  <ChatStack.Screen name="ConfirmedPeople" component={ConfirmedPeople} />
  <ChatStack.Screen name="TicketCreationNavigator" component={TicketCreationNavigator} />
  <ChatStack.Screen name="ProfileEdit" component={ProfileEdit} />
  <ChatStack.Screen name="UserProfile" component={UserProfile} />
  <ChatStack.Screen name="MenuList" component={MenuList} />
  <ChatStack.Screen name="Menus" component={Menus} />
  <ChatStack.Screen name="ProductsShopCart" component={ProductsShopCart} />
  <ChatStack.Screen name="OrderSheet" component={OrderSheet} />
  <ChatStack.Screen name="MenuCreationNavigator" component={MenuCreationNavigator} />
  <ChatStack.Screen name="NewProduct" component={NewProduct} />
  <ChatStack.Screen name="ReportScreen" component={ReportScreen} />
  <ChatStack.Screen name="TeamsScreen" component={TeamsScreen} />
  <ChatStack.Screen name="CloseOrderSheetNavigator" component={CloseOrderSheetNavigator} />
  <ChatStack.Screen name="QrCodes" component={QrCodes} />
  <ChatStack.Screen name="Notifications" component={Notifications} />
  <ChatStack.Screen name="FriendsInvite" component={FriendsInvite} />
  <ChatStack.Screen name="Friends" component={Friends} />
  <ChatStack.Screen name="ProductPayment" component={ProductPayment} />
  <ChatStack.Screen name="PayCart" component={PayCart} />
  <ChatStack.Screen name="UserProducts" component={UserProducts} />
  <ChatStack.Screen name="ProductQrCodeScreen" component={ProductQrCodeScreen} />
  <ChatStack.Screen name="ValidateCartQrCode" component={ValidateCartQrCode} />
  <ChatStack.Screen name="Tickets" component={Tickets} />
  <ChatStack.Screen name="Followers" component={Followers} />
  <ChatStack.Screen name="ReservationCreationNavigator" component={ReservationCreationNavigator} />
  <ChatStack.Screen name="MakeReservation" component={MakeReservation} />
  <ChatStack.Screen name="PayReservation" component={PayReservation} />
  <ChatStack.Screen name="UserReservations" component={UserReservations} />
  <ChatStack.Screen name="ReservationQrCodeScreen" component={ReservationQrCodeScreen} />
  <ChatStack.Screen name="ValidateReservationQrCode" component={ValidateReservationQrCode} />
  <ChatStack.Screen name="CouponsCreationNavigator" component={CouponsCreationNavigator} />
  <ChatStack.Screen name="UserCoupons" component={UserCoupons} />
  <ChatStack.Screen name="ValidateTicket" component={ValidateTicket} />
  <ChatStack.Screen name="BankAccountsCreationNavigator" component={BankAccountsCreationNavigator} />

</ChatStack.Navigator>

const defaultNavigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    let IconComponent;
    if (routeName === 'MapStack') {
      
    } else if (routeName === 'ProfileStack') {
      
    } else if (routeName === 'NotificationsStack') {
      
    }
    else if (routeName === 'ChatsStack') {
      
    }
    else if (routeName === 'CompanyStack') {
      
    }

    return <IconComponent name={iconName} size={25} color={tintColor} />;
  },
})

export const BottomTabNavigator = () => <Tab.Navigator 
  initialRouteName="Map"
  tabBarOptions={{
    activeTintColor: colors.violet,
    inactiveTintColor: colors.charcoalGrey,
    tabStyle: {
      backgroundColor: colors.white,
    },
    safeAreaInsets: { bottom: 0, top: 0 },
  }}>
  <Tab.Screen 
    name="Map" 
    component={MapNavigator} 
    options={{
      title: "Mapa",
      tabBarIcon: ({focused, color}) => <Fontisto 
        size={25} 
        color={color} 
        name='world' 
      />
    }}
  />
  <Tab.Screen 
    name="Profile" 
    component={ProfileNavigator} 
    options={{
      title: "Perfil",
      tabBarIcon: ({focused, color}) => <Feather 
        size={25} 
        color={color} 
        name='user' 
      />
    }}
  />
  <Tab.Screen 
    name="Notifications" 
    component={NotificationsNavigator} 
    options={{
      title: "Notificações",
      tabBarIcon: ({focused, color}) => <Ionicons 
        size={25} 
        color={color} 
        name='notifications' 
      />
    }}
  />
  <Tab.Screen 
    name="Chats" 
    component={ChatNavigator} 
    options={{
      title: "Chats",
      tabBarIcon: ({focused, color}) => <Entypo 
        size={25} 
        color={color} 
        name='chat' 
      />
    }}
  />
  <Tab.Screen 
    name="Menus" 
    component={MenusNavigator} 
    options={{
      title: "Menus",
      tabBarIcon: ({focused, color}) => <Entypo 
        size={25} 
        color={color} 
        name='menu' 
      />
    }}
  />
</Tab.Navigator>

export const PublicAreaNavigator = () => <PublicAreaStack.Navigator initialRouteName='MapScreen' headerMode='none'>
  <PublicAreaStack.Screen name="MapScreen" component={MapScreen} />
  <PublicAreaStack.Screen name="ShowList" component={ShowList} />
  <PublicAreaStack.Screen name="ShowDetail" component={ShowDetail} />
  <PublicAreaStack.Screen name="Login" component={Login} />
  <PublicAreaStack.Screen name="SignUp" component={SignUp} />
  <PublicAreaStack.Screen name="ForgotPassword" component={ForgotPassword} />
  <PublicAreaStack.Screen name="AppAgreement" component={AppAgreement} />
  <PublicAreaStack.Screen name="VerificationCode" component={VerificationCode} />
</PublicAreaStack.Navigator>



