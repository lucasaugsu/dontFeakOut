import React from "react";
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { FAB } from 'react-native-elements';
import { Container, Checkbox, ScrollView, Button } from 'native-base';

export default function Login() {
	return (
		<View>
			<View style={styles.paper}>
				<View style={styles.header}>
					<Text style={styles.titleHeader}>Don't Freak Out</Text>
					<Text style={styles.bodyHeader}>"Um app para organizar seus estudos"</Text>
				</View>
			
				<View style={styles.divButtons}>
					<Button
						variant="outline"
						style={styles.button}
					>
						Cadastre-se
					</Button>
					<Button
						variant="solid"
						style={styles.button}
					>
						Entrar
					</Button>
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

	//Buttons
	divButtons: {
		margin:"7%",
		marginTop: 5,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#232323",
	},
	button: {
		margin: "2%",
		width: "100%",
		borderRadius: 20,
	},

	formatImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
		marginBottom: "5%",
	}
});
