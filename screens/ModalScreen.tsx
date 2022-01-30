import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { CheckBox, Icon } from 'react-native-elements';
import PassContainer from '../components/passcontainer'

export default function ModalScreen() {
	const [listOfMaterials, setListOfMaterials] = useState([
		{id: 1, title: "Lingua Portuguesa", checked: false},
		{id: 2, title: "Inglês", checked: false},
		{id: 3, title: "Espanhol", checked: false},
		{id: 4, title: "História", checked: false},
		{id: 5, title: "Geografia", checked: false},
		/* {id: 6, title: "Filosofia", checked: false},
		{id: 7, title: "Sociologia", checked: false},
		{id: 8, title: "Matemática", checked: false},
		{id: 9, title: "Física", checked: false},
		{id: 10, title: "Química", checked: false},
		{id: 11, title: "Biologia", checked: false},
		{id: 12, title: "Educação física", checked: false} */
	]);

	const [data, setData] = useState([])


	const handleToggle = (materia) => {
		try {
			let findItem = data.find(item => {return (item == materia)?(item == materia):{} } )
			if (findItem) {
				let filtered = data.filter(item => item != materia)
				setData(filtered)
				//console.log("entrou no if")
			}
			else { 
				//console.log("entrou no else")
				let added = data.push(materia)
				setData(added)
			}
			console.log({data})
		} catch {
			//data.push(materia)
			console.log("corno cuscuz")
		}
	};

	return (
		<PassContainer>
			<View style={styles.header}>
				<Text style={styles.titleHeader}>Suas matérias</Text>
				<Text style={styles.bodyHeader}>Selecione as matérias da sua grade escolar</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			</View>

			<View>
				{
					listOfMaterials &&
					listOfMaterials.map((materia, index) => {
						//let findItem = data.find(item => item === materia)
						return (
							<CheckBox
								center
								key={index}
								title={materia.title}
								checked={materia.checked}
								//checked={findItem?findItem:false}
								onPress={() => {handleToggle(materia)}}
							/>
						)
					})
				}
				<Text style={styles.title}>Grade escolar</Text>

				{/* Use a light status bar on iOS to account for the black space above the modal */}
				<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			</View>
		</PassContainer>
	);
}

const styles = StyleSheet.create({
	//header
	header: {
		marginTop: "7%",
		marginBottom: "3%",
		justifyContent:"center",
		alignItems:"center",
	},
	titleHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom:"2%",
	},
	bodyHeader: {
		fontSize: 16,
		margin: "2%",
	},
	separator: {
		marginVertical: 30,
		height: 2,
		width: '80%',
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
