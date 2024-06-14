import React from "react";
import { createStackNavigator } from "@react-navigation/Stacks";
import Login from "./navegacion/login";
import CrearCuenta from "./navegacion/crearCuenta";
import Productos from "./navegacion/productos"
import { NavigationContainer } from "@react-navigation/native";


const StackNav = createStackNavigator();

function Stacks() {
    return (
      <StackNav.Navigator initialRouteName="login" screenOptions={ {headerShown: false}}>
        <StackNav.Screen name="login" component={Login} />
        <StackNav.Screen name="crearCuenta" component={CrearCuenta} />
        <StackNav.Screen name="productos" component={Productos} />
      </StackNav.Navigator>
    );
  }

  export default function Navegacion() {
    return (
      <NavigationContainer>
        <Stacks/>
      </NavigationContainer>
    );
  }