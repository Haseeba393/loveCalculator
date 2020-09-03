import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import { Colors, Assets } from '../resources';

//This will be used in Header while requesting to API
const RapidAPIKey = "8b8039d728msh95c5a1d8fe3439bp19defbjsn63ac1b06f315";

function Calculate({navigation}){

    //variables declaration
    const [boyName, setBoyName] = useState('');
    const [girlName, setGirlName] = useState('');
    const [isCalculating, setCalculating] = useState(false);


    /**
     * Function which will request the Love calculator API with both names and return thr result.
     * Then it will redirect to result screen to show this result
     */
    function _calculate(){
        if(boyName.length == 0 || girlName.length == 0){
            alert("Boy and Girl name shouldn't be empty");
        }
        else{
            setCalculating(true);
            fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=" + boyName + "&sname=" + girlName, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                    "x-rapidapi-key": RapidAPIKey
                }
            })
            .then(response => {
                response.json().then((result)=>{
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'result', params:{'resultObj':result} }],
                    });
                    setCalculating(false);
                })
            })
            .catch(err => {
                setCalculating(false);
                console.log(err);
            });
        }
    }

    return(
        <View style={Styles._mainContainer}>
            <Image source={Assets.logo} style={Styles._logoStyle}/>
            <Text style={Styles._appName}>Love Calculator</Text>
            <View style={Styles._inputView}>
                <View style={Styles._singleInput}>
                    <Image source={Assets.manIcon} style={Styles._iconStyle}/>
                    <TextInput
                        placeholder='Enter boy name'
                        value={boyName}
                        onChangeText={text=>setBoyName(text)}
                        style={Styles._textInputStyle}
                    />
                </View>
                <View style={Styles._singleInput}>
                    <Image source={Assets.womanIcon} style={Styles._iconStyle}/>
                    <TextInput
                        placeholder='Enter girl name'
                        value={girlName}
                        onChangeText={text=>setGirlName(text)}
                        style={Styles._textInputStyle}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={_calculate}
                style={Styles._btnStyle}>
                {
                    isCalculating ? (
                        <ActivityIndicator 
                            siz={24}
                            color={Colors.whiteColor}
                        />
                    ):(
                        <Text style={Styles._btntext}>Calculate</Text>
                    )
                }
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        backgroundColor: Colors.whiteColor,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center'
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
    _inputView:{
        width: '100%',
        marginVertical: 50,
    },
    _singleInput:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    _iconStyle:{
        width: 28,
        height: 28,
        resizeMode: 'cover'
    },
    _textInputStyle:{
        marginLeft: 10,
        width: '80%',
        color: Colors.blackColor,
        fontSize: 16,
    },
    _btnStyle:{
        width: '100%',
        height: 45,
        borderRadius: 10,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _btntext:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.whiteColor
    }
});

export default Calculate;