import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import * as React from "react";
import {StyleSheet, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Todo from '../screens/Todo'
import Films from '../screens/Films'

const Tab = createBottomTabNavigator()

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    tabBarAllowFontScaling: true,
                    tabBarLabelStyle: {
                        fontSize: 20
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                }}>
                    <Tab.Screen name='Заметки' component={Todo}/>
                    <Tab.Screen name='Фильмотека' component={Films}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
})

