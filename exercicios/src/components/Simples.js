import React from 'react';
import { Text } from 'react-native';
import Padrao from './../styles/Padrao';

/*export default function(props) {
    return <Text>{props.texto}</Text>
};*/

export default props => <Text style={Padrao.ex}>Arrow: {props.texto}</Text>;
