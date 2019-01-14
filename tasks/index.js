import { AppRegistry } from 'react-native';
import Navigator from './src/Navigator';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('tasks', () => Navigator);
