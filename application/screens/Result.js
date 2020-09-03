import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import LottieView from 'lottie-react-native';

import { Colors, Assets } from '../resources';

function Result({navigation, route}){

    const {resultObj} = route.params;

    //functionn to calculate again
    function _calculateAgain(){
        navigation.reset({
            index: 0,
            routes: [{ name: 'calculate' }],
        });
    }

    return(
        <View style={Styles._mainContainer}>
            <LottieView 
                source={Assets.loveAnimation} 
                autoPlay loop 
                style={{
                    width: 200,
                    height: 200,
                    marginBottom: 10
                }}
            />
            <View style={Styles._resultView}>
                <View style={{alignItems: 'center'}}>
                    <Image source={Assets.manIcon} style={Styles._iconStyle} />
                    <Text style={Styles._nameStyle}>{resultObj.fname}</Text>
                </View>
                
                <Text style={Styles._percentStyle}>{resultObj.percentage}%</Text>

                <View style={{alignItems: 'center'}}>
                    <Image source={Assets.womanIcon} style={Styles._iconStyle} />
                    <Text style={Styles._nameStyle}>{resultObj.sname}</Text>
                </View>
            </View>
            <Text style={Styles._tenseStyle}>{resultObj.result}</Text>
            <TouchableOpacity
                onPress={_calculateAgain}
                style={Styles._btnStyle}>
                <Text style={Styles._btntext}>Calculate Again</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: Colors.whiteColor
    },
    _resultView:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    _iconStyle:{
        width: 80,
        height: 80,
        resizeMode: 'cover'
    },
    _nameStyle:{
        width: 80,
        fontSize: 16,
        color: Colors.blackColor,
        marginTop: 5,
        textAlign: 'center',
    },
    _percentStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryColor
    },
    _tenseStyle:{
        fontSize: 24,
        color: Colors.primaryColor,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 20
    },
    _btnStyle:{
        width: '100%',
        height: 45,
        borderRadius: 10,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    _btntext:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.whiteColor
    }
});

export default Result;