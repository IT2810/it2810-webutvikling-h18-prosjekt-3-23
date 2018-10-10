import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Score from './Score.js';


class Homepage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
               <Image style={{height:180, width:220}} source={require('./logo.png')} />
               <Score></Score>
            </View>
        );
    }
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
