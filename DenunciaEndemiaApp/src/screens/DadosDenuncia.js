import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import TextInputText from "../components/TextInputText"
import { Feather } from '@expo/vector-icons'
import { GetImageLibrary } from "../hooks/GetImageLibrary"
import { GetImageCamera } from "../hooks/GetImageCamera"
import VerMapa from "../components/VerMapa"
import IconeMotivo from "../components/IconeMotivo"
import { LinearGradient } from 'expo-linear-gradient'
import {  useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

const DadosDenuncia = ({ route, navigation }) => {
  const { container, wrapperTitle, textoDenuncia, nomeDenuncia, wrapperLista, botaoEnviar, textoEnv, sectionHeader, inputTexto, botaoImagemWrap, botaoImagem, imagePreview, containerMapa, scrollStyle} = styles

  const { motivo } = route.params
  const [image, setImage] = useState()

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <View style={wrapperTitle}>
        <IconeMotivo motivo={motivo}/>
        <View>
          <Text style={textoDenuncia}>Ocorrência de</Text>
          <Text style={[textoDenuncia, nomeDenuncia]}>{motivo}</Text>
        </View>
      </View>
      
      <View style={wrapperLista}>
          <View style={scrollStyle}>
              <TextInputText headerStyle={sectionHeader} text={'Nome'} textInputStyle={inputTexto} />

            <View>
              <Text style={sectionHeader}>{'Imagem'}</Text>
              
              <View style={botaoImagemWrap}>
                <TouchableOpacity style={botaoImagem} onPress={async () => {
                  const uriValue = await GetImageCamera()
                  setImage(uriValue)
                }}>
                  <Feather name="camera" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={botaoImagem} onPress={async () => {
                  const uriValue = await GetImageLibrary()
                  setImage(uriValue)
                }}>
                  <Feather name="folder" size={40} color="white" />
                </TouchableOpacity>
                <Image source={{ uri: image }} style={imagePreview}/>
              </View>
            </View>

            <View>
              <Text style={sectionHeader}>Localização</Text>
              <View style={containerMapa}>
                <VerMapa />
              </View>
            </View>
          </View>
      </View>

      <TouchableOpacity style={botaoEnviar} onPress={() => navigation.navigate('DenunciaFeita')}>
        <Text style={textoEnv}>Enviar</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: '#637EFF'
  },
  wrapperTitle: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70
  },
  textoDenuncia: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 40
  },
  nomeDenuncia: {
    fontFamily: 'Poppins_600SemiBold'
  },
  wrapperLista: {
    width: 310
  },
  scrollStyle: {
    gap: 15
  },
  botaoEnviar: {
    backgroundColor: '#06417B',
    width: 310,
    height: 95,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7
  },
  textoEnv: {
    color: 'white',
    fontSize: 45,
    fontFamily: 'Poppins_500Medium',
    paddingTop: 10
  },
  sectionHeader: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Poppins_400Regular'
  },
  inputTexto: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: 70,
    paddingLeft: 15,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 5,
    color: '#06417B'
  },
  botaoImagemWrap: {
    flexDirection: 'row',
    gap: 10
  },
  botaoImagem: {
    borderRadius: 5,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#06417B',
    elevation: 7
  },
  imagePreview: {
    borderWidth: 3,
    borderRadius: 5,
    height: 70,
    width: 70
  },
  containerMapa: {
    borderColor: '#e6e6e6',
    borderWidth: 2,
    backgroundColor: 'white',
    width: 310,
    height: 200
  }
})
export default DadosDenuncia