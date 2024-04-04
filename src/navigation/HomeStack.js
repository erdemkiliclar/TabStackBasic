import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { View } from "react-native";

const Stack = createStackNavigator();

export const HomeStack = () =>{
    return(
       

        <Stack.Navigator screenOptions={{headerShown:false}}>

            <Stack.Screen  name="HomeStack" component={Home}/>
        </Stack.Navigator>

    )
}