import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Simples from './components/Simples';
import ParImpar from './components/Parimpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import { Avo } from './components/ComunicacaoDireta';

export default createDrawerNavigator({
    Avo:{
        screen: () => <Avo nome='Joao' sobrenome='Silva' />
    },
    Evento: {
        screen: () => <Evento />
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Contador:{
        screen: () => <Contador numeroInicial={10} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () =>  <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel' />
    }
},
{ drawerWidth: 300});