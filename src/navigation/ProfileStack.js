import { createStackNavigator } from "@react-navigation/stack"
import { View } from "react-native"
import { Profile } from "../screens/Profile"


const Stack = createStackNavigator()

export const ProfileStack =()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ProfileStack" component={Profile}/>
        </Stack.Navigator>
    )
}