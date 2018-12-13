import { AppRegistry } from 'react-native';
import App from './src/App';
import Menu from './src/Menu';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('exercicios', () => Menu);
