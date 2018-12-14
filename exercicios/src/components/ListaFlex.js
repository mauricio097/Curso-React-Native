import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    {id:1,nome: 'João',nota: 7.9},
    {id:2,nome: 'Guilherme',nota: 10},
    {id:3,nome: 'Roberto',nota: 5.0},
    {id:4,nome: 'Kleber',nota: 7.9},
    {id:5,nome: 'Jorge',nota: 4.5},
    {id:6,nome: 'João',nota: 7.9},
    {id:7,nome: 'Guilherme',nota: 10},
    {id:8,nome: 'Roberto',nota: 5.0},
    {id:9,nome: 'Kleber',nota: 7.9},
    {id:10,nome: 'Jorge',nota: 4.5},

    {id:11,nome: 'João',nota: 7.9},
    {id:12,nome: 'Guilherme',nota: 10},
    {id:13,nome: 'Roberto',nota: 5.0},
    {id:14,nome: 'Kleber',nota: 7.9},
    {id:15,nome: 'Jorge',nota: 4.5},
    {id:16,nome: 'João',nota: 7.9},
    {id:17,nome: 'Guilherme',nota: 10},
    {id:18,nome: 'Roberto',nota: 5.4},
    {id:19,nome: 'Kleber',nota: 7.9},
    {id:20,nome: 'Jorge',nota: 4.5}
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignItems: 'center', //Linha
    flexDirection: 'row',
    justifyContent: 'space-around'

};

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>;

export default props => {
   const renderItem = ({item}) => {
         return <Aluno {...item} />
   };

   return (
       <ScrollView>
           <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_,index) => index.toString()} />
       </ScrollView>
   )
};