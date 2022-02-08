import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import Routes from 'react';
import {AppLoading} from 'expo';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton';

import Routes from '.src/router';

export default function App() {
  
  let [fontsLoaded] = useFonts({
      Anton_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <>
      <StatusBar style="light" backgroundcolor="#000" translucete={true} />
      <Routes/>
    </>
  );
}


