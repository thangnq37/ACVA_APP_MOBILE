import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS,SIZES} from '../../constants/theme'

const styles = StyleSheet.create({
    containerContent:{
        flexDirection: 'column',
        gap: 12,
        padding:20,
        // marginTop:-20
    },
    titleText:{
        fontSize: SIZES.large,
        fontWeight: '600',
    },
    textContainer:{
        flexDirection: 'column',
        gap: 10,
        alignItems:'center',
        justifyContent: 'center',

    },
    textContent:{
        textAlign: 'center',
        width: '100%',
        fontSize: SIZES.xSmall,
        padding: 3
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        resizeMode:'cover',
        height: '100%',
        backgroundColor: '#FFEFEF'
    },
    containerAnswer:{
        padding:5,
        borderWidth:1,
        backgroundColor: '#ECCA9C',
        marginTop:20,
        borderRadius:10
    }
})

export default styles
