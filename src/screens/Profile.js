import { View,Text,StyleSheet } from "react-native"
import { ImageBackground } from "react-native";

export const Profile=()=>{

    const backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBwP_3Lk0KX0FukmyR8YKOmv7_TZm75BSaiv9tIzqKA&s"
    return(
        <View style={styles.container}>
            <ImageBackground 
            source={{uri:backgroundImage}} 
            resizeMode="cover" 
            style={styles.image}
            blurRadius={35}
            >

            <Text style={styles.text}>Profile Screen</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        color:"white",
        shadowColor:"white",
        shadowRadius:8,
        shadowOpacity:1,
    },
    image:{
        flex:1,
        justifyContent:"center",
    }
  });