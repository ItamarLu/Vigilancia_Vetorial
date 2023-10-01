import React, { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native"
import TextInputText from "../components/TextInputText"
import { Feather } from '@expo/vector-icons'
import { GetImageLibrary } from "../hooks/GetImageLibrary"
import { GetImageCamera } from "../hooks/GetImageCamera"
import VerMapa from "../components/VerMapa"
import IconeMotivo from "../components/IconeMotivo"

const DadosDenuncia = ({ route, navigation }) => {
  const { container, wrapperTitle, textoDenuncia, nomeDenuncia, wrapperLista, botaoEnviar, textoEnv, sectionHeader, inputTexto, botaoImagemWrap, botaoImagem, imagePreview, containerMapa, scrollStyle} = styles
  const { motivo } = route.params
  const [image, setImage] = useState()
  return (
    <SafeAreaView style={container}>
      <View style={wrapperTitle}>
        <IconeMotivo motivo={motivo}/>
        <View>
          <Text style={textoDenuncia}>Denúncia de</Text>
          <Text style={[textoDenuncia, nomeDenuncia]}>{motivo}</Text>
        </View>
      </View>
      
      <View style={wrapperLista}>
        <ScrollView>
          <View style={scrollStyle}>
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

            <TextInputText headerStyle={sectionHeader} text={'Nome'} textInputStyle={inputTexto} />

            <View>
              <Text style={sectionHeader}>Localização</Text>
              <View style={containerMapa}>
                <VerMapa />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={botaoEnviar} onPress={() => navigation.navigate('DenunciaFeita')}>
        <Text style={textoEnv}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    backgroundColor: '#637EFF'
  },
  wrapperTitle: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textoDenuncia: {
    fontSize: 37,
    color: 'white'
  },
  nomeDenuncia: {
    fontWeight: '700'
  },
  wrapperLista: {
    width: 330,
    height: 400
  },
  scrollStyle: {
    gap: 20
  },
  botaoEnviar: {
    backgroundColor: '#3F45B6',
    width: 330,
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7
  },
  textoEnv: {
    color: 'white',
    fontSize: 45,
    fontWeight: '500'
  },
  sectionHeader: {
    fontSize: 28,
    color: 'white'
  },
  inputTexto: {
    borderColor: '#e6e6e6',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 62,
    padding: 10,
    marginTop: 5,
    fontSize: 20
  },
  botaoImagemWrap: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5
  },
  botaoImagem: {
    borderRadius: 5,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F45B6',
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
    width: 330,
    height: 200
  }
})
export default DadosDenuncia