import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import {StyleSheet, Text, View, Image, ActivityIndicator, Button, Alert, FlatList, ScrollView} from 'react-native';



const Hello = (props) => {
    return <Text styles={styles.text}>Hello {props.name}!</Text>
}
const HomeScreen = ({navigation}) => (
    <View style={styles.container}>
        <Hello name='Paul' />
        <Text style = {styles.text}>Слава Украини!</Text>
        <Image style={{ width: 100, height: 100, marginBottom: 20 }}
               source={{
                   uri: 'https://reactnative.dev/img/tiny_logo.png',
               }}
        />
        <ActivityIndicator size="large" color="white" />
        <Button styles={styles.button} title="Press me" onPress={() => {Alert.alert('Button is clicked!')}}/>
        <Button
            title="Go to Details"
            onPress={() =>
                navigation.navigate('Details', {name: 'Paul'})}
        />
    </View>
)
const DetailsScreen = ({navigation, route}) => (
    <View>
        <Text style={{marginBottom: 50}}>Hello, {route.params.name}</Text>
        <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <StatusBar style="auto" />
    </View>
)

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Welcome'}}/>
              <Stack.Screen name='Details' component={DetailsScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    scrollView: {
        marginHorizontal: 10,
    },
  text: {
    fontSize: 26,
      marginBottom: 25,
  },
    button: {
      backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 10,
    }
});
