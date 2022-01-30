import React, { useState } from "react";
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import { FAB } from 'react-native-elements';

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.titleHeader}>Boa tarde, Lucas</Text>
				<Text>Faltam 15 dias para as aulas começarem</Text>
			</View>

			<View style={styles.paper}>
				<View style={styles.marginPaper}>
					<Text style={styles.titlePaper}>
						Insira as suas notas
					</Text>
					<Text style={styles.bodyPaper}>
						Aqui você tem como inserir as suas notas bimestrais para ver o seu desempenho
					</Text>
					<View style={styles.divImages}>
						<Image style={styles.formatImage}
							source={{
								uri: "https://media.istockphoto.com/vectors/cute-education-icon-report-card-vector-id1010040132"
							}}
						/>
						<View style={styles.formatImage}>
							<FAB
								size="large"
								color="black"
								style={{padding:22}}
								icon={{ name: 'add', color: 'white' }}
								onPress={() => navigation.navigate('Modal')}
							/>
						</View>
					</View>
				</View>
			</View>

		</View>
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

	//paper
	paper: {
		backgroundColor: "#232323",
		borderRadius: 10,
		margin:"3%",
	},
	marginPaper: {
		backgroundColor: "#232323", 
		marginLeft: "4%", 
		marginRight: "4%",
		margin: "3%",
	},
	titlePaper: {
		fontSize: 23,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	bodyPaper: {
		fontSize: 16,
		marginBottom: 25,
	},

	//images
	divImages: {
		backgroundColor: "#232323", 
		flexDirection: "row",
	},
	formatImage: {
		marginRight:"5%",
		borderRadius: 10,
		width: 100,
		height: 100,
	}
});
