import React from "react";
import { StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../../types';
import { Text, View } from '../components/Themed';
import { Button, FormControl, Input, Stack } from 'native-base';

export default function SignUp({ navigation }: RootStackScreenProps<'SignUp'>) {

	const [textName, onChangeTextName] = React.useState("");
	const [textEmail, onChangeTextEmail] = React.useState("");
	const [textPassword, onChangeTextPassword] = React.useState("");
	const [textConfirmPassword, onChangeTextConfirmPassword] = React.useState("");

	return (
		<View>
			<View style={styles.paper}>
				<View style={styles.header}>
					<Text style={styles.titleHeader}>Crie sua conta</Text>
				</View>
				<View style={styles.form}>
					<FormControl isRequired>
						<Stack mx="4">
							<Text style={styles.textInput}>Nome</Text>
							<Input 
								type="text" 
								value={textName}
								placeholder="Nome" 
								onChangeText={onChangeTextName}
							/>
						</Stack>
						<Stack mx="4">
							<Text style={styles.textInput}>Email</Text>
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
						<Stack mx="4">
							<Text style={styles.textInput}>Confirmar senha</Text>
							<Input 
								type="password" 
								value={textConfirmPassword}
								placeholder="Confirmar senha"
								onChangeText={onChangeTextConfirmPassword}
							/>
						</Stack>
					</FormControl>
				</View>
				<View style={styles.divButtons}>
					<Button
						variant="solid"
						style={styles.button}
						onPress={() => navigation.navigate('Home')}
					>
						Cadastrar
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
		color: "white",//"#24afc1",
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
		//color: "#24afc1",
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
