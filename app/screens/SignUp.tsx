import React from "react";
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { FAB } from 'react-native-elements';
import { RootStackScreenProps } from '../../types';
import { Container, Checkbox, ScrollView, Button, FormControl, Stack, WarningOutlineIcon, Input } from 'native-base';

export default function SignUp({ navigation }: RootStackScreenProps<'SignUp'>) {
	return (
		<View>
			<View style={styles.paper}>
				<View style={styles.header}>
					<Text style={styles.titleHeader}>Cadastrar</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	paper: {
		margin:"3%",
		height:"100%",
		borderRadius: 10,
		backgroundColor: "#232323",
	},

	//header
	header: {
		marginTop: "7%",
		marginBottom: "3%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#232323",
	},
	titleHeader: {
		fontSize: 26,
		marginBottom:"2.5%",
		fontWeight: 'bold',
	},
	bodyHeader: {
		fontSize: 16,
		marginBottom: 25,
		fontStyle: "italic" 
	},

	//form
	form: {
		marginBottom: "3%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#232323"//"white",
	},
	textInput: {
		fontSize: 20,
		marginLeft: 5,
		marginTop: 10,
		marginBottom:2,
		fontWeight: 'bold',
	},

	//Buttons
	divButtons: {
		margin:"5%",
		marginTop: 15,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#232323",
	},
	button: {
		marginTop: 15,
		width: "100%",
		borderRadius: 5,
	},

	//bottom
	divBottom: {
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"center", 
		backgroundColor: "#232323",
	},
	textBottom: {
		fontSize:16, 
		marginTop:10,
	},
	link: {
		fontSize:17, 
		marginTop:10, 
		fontWeight:'bold', 
	}
});
