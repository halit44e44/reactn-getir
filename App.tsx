import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from "./src/navigators/RootNavigator";
import {store} from "./src/redux/store";
import {Provider} from "react-redux";

/* Alttaki uyarı mesajlarını gizliyor. */
LogBox.ignoreAllLogs();


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar style="auto"/>
                <RootNavigator/>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop: "10%"
    },
});
