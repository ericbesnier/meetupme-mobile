import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'Bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: Colors.$redColor,
    pressColor: Colors.$redColor,
    indicatorStyle: { backgroundColor: Colors.$redColor },
    style: {
      backgroundColor: Colors.$whiteColor,
    },
  },
});
