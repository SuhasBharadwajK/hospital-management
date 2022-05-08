import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Svg, Path } from "react-native-svg";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import {
useFonts,
	Montserrat_400Regular
} from "@expo-google-fonts/dev";
import Dashboard from "./components/dashboard";
import Index from "./components/main";

import Navigator from './routes/mainScreenStack';
import Main from "./components/main";

const {width, height} = Dimensions.get('window');

export default function App () {

	let [fontsLoaded] = useFonts({
		'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
	});
	
	if (!fontsLoaded) {
        return null;
    }

	StatusBar.setHidden(true);

	console.log(width);
	console.log(height);

	return (
		<Navigator />
		// <NavigationContainer>
		// 	<Stack.Navigator>
		// 		<Stack.Screen
		// 			name="Main"
		// 			component={Main}
		// 		/>
		// 	</Stack.Navigator>
		// </NavigationContainer>
	);
}

export class App1 extends Component {

	constructor(){
		super();
		this.state = {
			fontLoaded: false
		};
	}
	
	componentDidMount(){
	   Font.loadAsync({
			'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
		}).then( () => this.setState( { fontLoaded: true } ) );
	
		// this.setState({ fontLoaded: true});
	}

	render() {

		// if( !this.state.fontLoaded ) {
		// 	return <AppLoading/>
		// }
	}
}

const imageUrl_Ellipse = "https://randomuser.me/api/portraits/men/5.jpg"
const imageUrl_wipro_primary_logo_color_rbg_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d7cd641803d33bd06ae9120e2cc8ede7"