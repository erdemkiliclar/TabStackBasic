import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs';
import 'react-native-gesture-handler';

export default function App() {
  return (
    
    <View style={styles.container}>

    <NavigationContainer >
      <Tabs/>
    </NavigationContainer>
    </View>

  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})
