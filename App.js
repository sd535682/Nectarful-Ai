import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

export default function App() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide({fade: true, duration: 500});
      }}>
      <TabNavigation />
    </NavigationContainer>
  );
}
