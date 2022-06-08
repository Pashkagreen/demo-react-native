import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {Image} from "react-native";

const FilmItem = ({film}) => {
    return (
       <TouchableOpacity style={styles.filmItem}>
           <Image
               source={{uri: `https://image.tmdb.org/t/p/w500/${film.poster_path}`}}
           />
           <Text style={styles.title}>{film.title}</Text>
       </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    filmItem: {
        width: '30%',
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        margin: 10
    },
    title: {
        color: 'white',

    }
})

export default FilmItem;
