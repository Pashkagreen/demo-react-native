import 'react-native-gesture-handler'
import * as React from "react";
import {
    StyleSheet,
    FlatList,
    ImageBackground
} from 'react-native';
import Header from "../components/Header";
import {SafeAreaView} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import FilmItem from "../components/FilmItem";

export default function Films() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=578ae1e94516c4bfc0b4aa5bbb8ab157&language=en-US&page=1')
            setFilms(response.data.results)
            console.log(response.data.results)
        }
        fetchFilms()
    }, [])


    return (
        <SafeAreaView style={styles.app}>
            <Header/>
            <ImageBackground
                source={require('../assets/back2.jpg')}
                style={styles.bg}
            >
                <FlatList
                    data={films}
                    renderItem={({item}) => (<FilmItem film={item}/>)}
                    keyExtractor={item => item.id}
                    columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
                    numColumns={3}
                    contentContainerStyle={{paddingBottom: 100}}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundPosition: 'center',
        width: null,
        height: null,
    },
    app: {
        flex: 1
    }
})
