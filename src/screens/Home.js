import { View,Text,StyleSheet } from "react-native"
import { ImageBackground } from "react-native";

export const Home=()=>{

    const backgroundImage = "https://w0.peakpx.com/wallpaper/994/514/HD-wallpaper-colorful-background-color-hipster-low-mix-nice-hop-poly-rainbow-thumbnail.jpg"
    return(
        <View style={styles.container}>
            <ImageBackground 
            source={{uri:backgroundImage}} 
            resizeMode="cover" 
            style={styles.image}
            blurRadius={20}
            >

            <Text style={styles.text}>Home Screen</Text>
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