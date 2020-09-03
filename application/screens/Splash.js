import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator
} from 'react-native';

//importing custom resources
import { Colors, Assets } from '../resources';

function Splash({navigation}){

    //After 2 seconds moving to calculate Screen
    useEffect(()=>{
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'calculate' }],
            });
        }, 2000);
    },[]);

    return(
        <View style={Styles._mainContainer}>
            <Image source={Assets.logo} style={Styles._logoStyle}/>
            <Text style={Styles._appName}>Love Calculator</Text>
            <ActivityIndicator 
                size={24}
                color={Colors.primaryColor}
                style={Styles._spinnerStyle}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor
    },
    _logoStyle:{
        width: 100,
        height: 100,
        resizeMode: 'center'
    },
    _appName:{
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.primaryColor,
        marginTop: 20,
    },
    _spinnerStyle:{
        position: 'absolute',
        bottom: 100,
    },
});

export default Splash;