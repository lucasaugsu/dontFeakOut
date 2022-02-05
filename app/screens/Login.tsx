import React from "react";
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { FAB } from 'react-native-elements';
import { RootStackScreenProps } from '../../types';
import { Container, Checkbox, ScrollView, Button, FormControl, Stack, WarningOutlineIcon, Input } from 'native-base';

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {

	const [textEmail, onChangeTextEmail] = React.useState("");
	const [textPassword, onChangeTextPassword] = React.useState("");

	return (
		<View>
			<View style={styles.paper}>
				<View style={styles.header}>
					<Text style={styles.titleHeader}>Don't Freak Out</Text>
					<Text style={styles.bodyHeader}>"Um app para organizar seus estudos"</Text>
				</View>

				<View style={styles.form}>
					<FormControl isRequired>
						<Stack mx="4">
							<Text style={styles.textInput}>Seu email</Text>
							<Input 
								type="text" 
								value={textEmail}
								placeholder="E-mail" 
								onChangeText={onChangeTextEmail}
							/>
						</Stack>
						<Stack mx="4">
							<Text style={styles.textInput}>Senha</Text>
							<Input 
								type="password" 
								value={textPassword}
								placeholder="Senha" 
								onChangeText={onChangeTextPassword}
							/>
						</Stack>
					</FormControl>
				</View>
			
				<View style={styles.divButtons}>
					<Button
						variant="solid"
						style={styles.button}
						onPress={() => navigation.navigate('SchoolGrade')}
					>
						Entrar
					</Button>
					<View style={styles.divBottom}>
						<Text style={styles.textBottom}>Não possui conta?</Text>
						<Button
							variant="link"
							onPress={() => navigation.navigate('SignUp')}
						>
							<Text style={styles.link}>Cadastre-se</Text>
						</Button>
					</View>
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
		backgroundColor: "#696565",
	},

	//header
	header: {
		marginTop: "7%",
		marginBottom: "3%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#696565",
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
		backgroundColor: "#696565"//"white",
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
		backgroundColor: "#696565",
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
		backgroundColor: "#696565",
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
