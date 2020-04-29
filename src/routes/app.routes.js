import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/New';

const AppBottomTab = createBottomTabNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#fff',
  inactiveTintColor: 'rgba(255,255,255,0.6)',
  style: {
    backgroundColor: '#8d41a8',
  },
};

const dashboardScreenOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ color, size }) => (
    <Icon name="event" size={size} color={color} />
  ),
};

const newScreenOptions = {
  tabBarLabel: 'Agendar',
  tabBarIcon: ({ color, size }) => (
    <Icon name="add-circle-outline" size={size} color={color} />
  ),
  tabBarVisible: false,
  unmountOnBlur: true,
};

const profileScreenOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ color, size }) => (
    <Icon name="person" size={size} color={color} />
  ),
};

export default function AppRoutes() {
  return (
    <AppBottomTab.Navigator unmountOnBlur tabBarOptions={tabBarOptions}>
      <AppBottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={dashboardScreenOptions}
      />
      <AppBottomTab.Screen
        name="New"
        component={New}
        options={newScreenOptions}
      />
      <AppBottomTab.Screen
        name="Profile"
        component={Profile}
        options={profileScreenOptions}
      />
    </AppBottomTab.Navigator>
  );
}
