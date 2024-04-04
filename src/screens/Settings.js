import { View,Text,StyleSheet } from "react-native"
import { ImageBackground } from "react-native";

export const Settings=()=>{

    const backgroundImage = "https://i.pinimg.com/736x/dd/ea/1c/ddea1c4748828eaaeabc65a7cf110688.jpg"
    return(
        <View style={styles.container}>
            <ImageBackground 
            source={{uri:backgroundImage}} 
            resizeMode="cover" 
            style={styles.image}
            blurRadius={40}
            >

            <Text style={styles.text}>Settings Screen</Text>
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
        shadowColor:"black",
        shadowRadius:8,
        shadowOpacity:1,
    },
    image:{
        flex:1,
        justifyContent:"center"
    }
  });