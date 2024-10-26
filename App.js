import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen1 from './screens/RegisterScreen1';
import RegisterScreen2 from './screens/RegisterScreen2';
import NewsScreen from './screens/NewsScreen';
import PoliticsScreen from './screens/PoliticsScreen';
import LawsScreen from './screens/LawsScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Notícias') {
            iconName = 'article';
          } else if (route.name === 'Política') {
            iconName = 'gavel';
          } else if (route.name === 'Leis') {
            iconName = 'balance';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{route.name}</Text>
          </View>
        ),
        headerTitleAlign: 'center',
        headerLeft: () => null,
      })}
      tabBarOptions={{
        activeTintColor: '#800000',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Notícias" component={NewsScreen} />
      <Tab.Screen name="Política" component={PoliticsScreen} />
      <Tab.Screen name="Leis" component={LawsScreen} />
    </Tab.Navigator>
  );
}

function DrawerContent({ navigation }) {
  const activeRoute = navigation.getState().routes[navigation.getState().index].name;

  return (
    <View style={styles.drawerContentContainer}>
      <Text style={styles.menuTitle}>Menu</Text>

      <TouchableOpacity 
        style={[styles.drawerItem, activeRoute === 'Notícias' && styles.activeItem]} 
        onPress={() => navigation.navigate('Notícias')}>
        <Text style={styles.drawerItemText}>Notícias</Text>
        {activeRoute === 'Notícias' && <View style={styles.activeBar} />}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.drawerItem, activeRoute === 'Política' && styles.activeItem]} 
        onPress={() => navigation.navigate('Política')}>
        <Text style={styles.drawerItemText}>Política</Text>
        {activeRoute === 'Política' && <View style={styles.activeBar} />}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.drawerItem, activeRoute === 'Leis' && styles.activeItem]} 
        onPress={() => navigation.navigate('Leis')}>
        <Text style={styles.drawerItemText}>Leis</Text>
        {activeRoute === 'Leis' && <View style={styles.activeBar} />}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.drawerItem, activeRoute === 'Conta' && styles.activeItem]} 
        onPress={() => navigation.navigate('Conta')}>
        <Text style={styles.drawerItemText}>Conta</Text>
        {activeRoute === 'Conta' && <View style={styles.activeBar} />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Termos de Uso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem}
        onPress={() => navigation.navigate('Splash')}>
        <Text style={styles.drawerItemText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

function AccountHeader({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuButton}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Conta</Text>
      </View>
    </View>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerPosition="right"
      drawerType='slide'
      drawerStyle={{ width: '35%' }}
      screenOptions={{
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={MainTabs}
        options={{ headerShown: false }}
      />
    <Drawer.Screen 
      name="Conta" 
      component={AccountScreen} 
      options={({ navigation }) => ({
        headerTitle: () => <AccountHeader navigation={navigation} />,
        headerTitleAlign: 'left',
        headerLeft: () => null,
      })} 
    />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 15,
    color: '#800000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800000',
    marginLeft: 8,
  },
  drawerContentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  drawerItem: {
    paddingVertical: 10,
    borderBottomWidth: 0,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#800000',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color: '#800000',
  },
  activeItem: {
    backgroundColor: '#800000',
  },
  activeBar: {
    height: 3,
    backgroundColor: '#800000',
    marginTop: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen1" component={RegisterScreen1} />
        <Stack.Screen name="RegisterScreen2" component={RegisterScreen2} />
        <Stack.Screen name="Main" component={MainDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
