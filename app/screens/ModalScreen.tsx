import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import PassContainer from '../components/passcontainer'
import { Container, Checkbox, ScrollView, Button } from 'native-base';


export default function ModalScreen() {
	const [groupValue, setGroupValue] = React.useState(["Lingua Portuguesa", "Espanhol"]);

	const [listOfMaterials, setListOfMaterials] = useState([
		{id: 1, name: "Lingua Portuguesa"},
		{id: 2, name: "Inglês"},
		{id: 3, name: "Espanhol"},
		{id: 4, name: "História"},
		{id: 5, name: "Geografia"},
		{id: 6, name: "Filosofia"},
		{id: 7, name: "Sociologia"},
		{id: 8, name: "Matemática"},
		{id: 9, name: "Física"},
		{id: 10, name: "Química"},
		{id: 11, name: "Biologia"},
		{id: 12, name: "Educação física"}
	]);

	return (
		<PassContainer>
			<View style={styles.header}>
				<Text style={styles.titleHeader}>Suas matérias</Text>
				<Text style={styles.bodyHeader}>Selecione as matérias da sua grade escolar</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			</View>

			<Container style={styles.container}>
				<ScrollView 
					h="80"
					maxW="400" 
					_contentContainerStyle={{
						px: "5px",
						mb: "4",
						minW: "72"
					}}
				>
					<Checkbox.Group 
						mt="2" 
						colorScheme="green" 
						alignItems="flex-start"
						defaultValue={groupValue} 
						accessibilityLabel="choose multiple items" 
						onChange={values => {setGroupValue(values || []);}} 
					>
						{
							listOfMaterials &&
							listOfMaterials.map((materia, index) => {
								return (
									<Checkbox
										my="2"
										size="lg"
										key={index}
										value={materia.name}
									>
										<Text style={styles.textCheckbox}>
											{materia.name}
										</Text>
									</Checkbox>
								)
							})
						}
					</Checkbox.Group>
				</ScrollView>
      		</Container>
			<View style={styles.divButton}>
				<Button
					variant="solid"
					style={{width: "100%"}}
				>
					Continuar
				</Button>
			</View>
		</PassContainer>
	);
}

const styles = StyleSheet.create({
	//header
	header: {
		marginTop: "7%",
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

	//bodyScroll
	container: {
		marginLeft:25, 
		marginRight:20, 
		justifyContent:"center",
		alignItems:"center",
	},
	textCheckbox: {
		marginLeft:10,
		fontSize: 16,
		color:"white",
		fontWeight: 'bold',
	},

	//divButton
	divButton: {
		margin:"4%", 
		marginTop:35,
	}
});
