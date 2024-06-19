import { StyleSheet, Text, View } from 'react-native'
import {COLORS,SIZES} from '../../constants/theme'

const styles = StyleSheet.create({
    containerContent:{
        flexDirection: 'column',
        gap: 12,
        padding:40,
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
        backgroundColor: '#F9FCFB'
        
    }
})

export default styles
