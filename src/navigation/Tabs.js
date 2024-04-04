import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { HomeStack } from "./HomeStack"
import { ProfileStack } from "./ProfileStack"
import { SettingsStack } from "./SettingsStack"
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export const Tabs=()=>{

    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
            
                name="Home" 
                component={HomeStack} 
                options={{tabBarIcon:({color}) => (<Entypo name="home" size={24} color="black" />)}}/>

            <Tab.Screen 
                name="Profile" 
                component={ProfileStack} 
                options={{tabBarIcon: (color) => (<MaterialCommunityIcons name="account" size={24} color="black" />), tabBarActiveTintColor:"green"}}/>

            <Tab.Screen 
                name="Settings" 
                component={SettingsStack}  
                options={ {tabBarIcon: (color)=>(<Ionicons name="settings-sharp" size={24} color="black" />), tabBarActiveTintColor:"red"}}/>

        </Tab.Navigator>
    )
}