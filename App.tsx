import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./src/navigators/RootNavigator";

/* Alttaki uyarı mesajlarını gizliyor. */
LogBox.ignoreAllLogs();


export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />

        <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: "10%"
  },
});
