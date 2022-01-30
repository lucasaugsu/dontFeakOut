import React, { useState } from "react";
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import { FAB } from 'react-native-elements';

export default function Login() {
	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.titleHeader}>Entrou no login</Text>
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
});
