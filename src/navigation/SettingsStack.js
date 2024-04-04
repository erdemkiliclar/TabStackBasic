import { createStackNavigator } from "@react-navigation/stack"
import {  View } from "react-native"
import { Settings } from "../screens/Settings"

const Stack = createStackNavigator()

export const SettingsStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SettingsStack" component={Settings}/>
        </Stack.Navigator>
    )
}