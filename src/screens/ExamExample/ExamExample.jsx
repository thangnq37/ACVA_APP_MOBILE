import {View, Text, Image, ScrollView, Button, ImageBackground, Alert} from 'react-native';
import React  from 'react';
import {COLORS, images} from '../../constants';
import ButtonWithLoader from '../../Components/Common/ButtonWithLoader/ButtonWithLoader';
import styles from './ExamExample.style';
import {useTranslation} from 'react-i18next';


const ExamExample = ({navigation}) => {
  const [t, i18n] = useTranslation();
  const moveScreenExamExampleDetail = async ()=>{
    navigation.navigate('ExamExampleDetail',{navigation});
  }

  return (
    <>
        <View style={styles.imageBackground} >
          <ScrollView style={styles.containerContent}>
            <View style={styles.textContainer}>
              <View style={{marginTop: 130}}>
                <Image source={images.acva_image_quiz} />
              </View>
            </View>
            <View style={{marginTop:30}}>
              <ButtonWithLoader
                text={t('start_the_test')}
                onPress={() => moveScreenExamExampleDetail()}
              />
            </View>
          </ScrollView>
        </View>
    </>
  );
};

export default ExamExample;

