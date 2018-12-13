import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';

const ValidarProps = props =>
    <Text style={{fontSize:40}}>
        {props.label}
        {props.ano + 2000}
    </Text>;

ValidarProps.defaultProps = {
    label: 'Ano: '
};

ValidarProps.propTypes = {
    ano: propTypes.number.isRequired
};

export default ValidarProps;