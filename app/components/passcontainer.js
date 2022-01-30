import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../config/theme';
export default class PassContainer extends React.PureComponent {

  render = () => (
    <SafeAreaView  {...this.props} style={[styles.container, this.props.style]}>
      {this.props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.black
  },
});
