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
import Modal from "react-native-modal"
import { GetLatiLongi } from "../hooks/GetLatiLongi"

const DadosDenuncia = ({ route, navigation }) => {
  const { container, wrapperTitle, textoDenuncia, nomeDenuncia, wrapperLista, botaoEnviar, textoEnv, sectionHeader, inputTexto, botaoImagemWrap, botaoImagem, imagePreview, containerMapa, scrollStyle, textoIcone, imageModal, viewModal} = styles

  const { motivo } = route.params
  const [image, setImage] = useState()

  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  
  const [latitude, longitude] = GetLatiLongi()

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
        {image ?
        <TouchableOpacity onPress={() => {
          toggleModal()
        }}> 
          <Image source={{ uri: image }} style={imagePreview}/>
        </TouchableOpacity> 
        : 
        <IconeMotivo motivo={motivo}/>
        }
        
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
                  <Text style={textoIcone}>Tirar{"\n"}Foto</Text>
                  <Feather name="camera" size={40} color="#3F45B6" />
                </TouchableOpacity>
                <TouchableOpacity style={botaoImagem} onPress={async () => {
                  const uriValue = await GetImageLibrary()
                  setImage(uriValue)
                }}>
                  <Text style={textoIcone}>Fazer{"\n"}Upload</Text>
                  <Feather name="folder" size={40} color="#3F45B6" />
                </TouchableOpacity>
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

      <TouchableOpacity style={botaoEnviar} onPress={() => {
        // Enviar informações para o dashboard
        console.log('Informações Enviadas')
        console.log(`Imagem: ${image}`)
        console.log(`Latitude: ${latitude} - Longitude: ${longitude}`)
        navigation.navigate('DenunciaFeita')
      }}>
        <Text style={textoEnv}>Enviar</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress ={() => setModalVisible(false)}
      animationIn = 'fadeIn'
      animationOutTiming = {1}
      >
        <View style={viewModal}>
          <Image source={{ uri: image }} style={imageModal}/> 
        </View>
      </Modal>
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
    flexDirection: 'row',
    borderRadius: 5,
    height: 70,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 7,
    gap: 10
  },
  textoIcone: {
    color: '#3F45B6',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    paddingTop: 5,
    textAlign: 'center',
    width: 72,
    lineHeight: 25
  },
  imagePreview: {
    borderRadius: 5,
    height: 75,
    width: 75,
    borderColor: 'white',
    borderWidth: 1,
    objectFit: 'contain'
  },
  containerMapa: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 5,
    width: 310,
    height: 200
  },
  viewModal: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageModal: {
    width: 350,
    height: 350,
    objectFit: 'contain'
  }
})
export default DadosDenuncia