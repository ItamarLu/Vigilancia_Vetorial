import React, { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native"
import TextInputText from "../components/TextInputText"
import { Feather } from '@expo/vector-icons'
import { GetImageLibrary } from "../hooks/GetImageLibrary"
import { GetImageCamera } from "../hooks/GetImageCamera"

const DadosDenuncia = ({ route, navigation }) => {
  const { container, wrapperTitle, textoDenuncia, nomeDenuncia, wrapperLista, botaoEnviar, textoEnv, textoVer, sectionHeader, inputTexto, botaoImagemWrap, botaoImagem, imagePreview } = styles
  const { motivo } = route.params
  const [image, setImage] = useState()
  return (
    <SafeAreaView style={container}>
      <View style={wrapperTitle}>
        <Text style={textoDenuncia}>Denúncia de</Text>
        <Text style={[textoDenuncia, nomeDenuncia]}>{motivo}</Text>
      </View>
      
      <View style={wrapperLista}>
        <ScrollView>
          <View>
            <Text style={sectionHeader}>{'Imagem'}</Text>
            <View style={botaoImagemWrap}>
              <TouchableOpacity style={botaoImagem} onPress={async () => {
                const uriValue = await GetImageCamera()
                setImage(uriValue)
              }}>
                <Feather name="camera" size={40} color="#3F45B6" />
              </TouchableOpacity>
              <TouchableOpacity style={botaoImagem} onPress={async () => {
                const uriValue = await GetImageLibrary()
                setImage(uriValue)
              }}>
                <Feather name="folder" size={40} color="#3F45B6" />
              </TouchableOpacity>
              <Image source={{ uri: image }} style={imagePreview}/>
            </View>
          </View>

          <TextInputText headerStyle={sectionHeader} text={'Nome'} textInputStyle={inputTexto} />

          <TextInputText headerStyle={sectionHeader} text={'Telefone'} textInputStyle={inputTexto} />

          <TextInputText headerStyle={sectionHeader} text={'E-mail'} textInputStyle={inputTexto} />
        </ScrollView>
      </View>

      <TouchableOpacity style={botaoEnviar} onPress={() => navigation.navigate('DenunciaFeita')}>
        <Text style={textoEnv}>Enviar</Text>
        <Text style={textoVer}>Verifique os dados</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  wrapperTitle: {
    width: 280,
    height: 90
  },
  textoDenuncia: {
    fontSize: 28,
    textAlign: 'center'
  }, 
  nomeDenuncia: {
    fontWeight: '700'
  },
  wrapperLista: {
    width: 280,
    height: 308
  },
  botaoEnviar: {
    backgroundColor: '#007419',
    width: 280,
    height: 90,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoEnv: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600'

  },
  textoVer: {
    color: 'white'
  },
  sectionHeader: {
    fontSize: 24
  },
  inputTexto: {
    borderStyle:'solid',
    borderWidth: 3,
    borderColor: '#3F45B6',
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    height: 62,
    padding: 10
  },
  botaoImagemWrap: {
    flexDirection: 'row',
    gap: 10
  },
  botaoImagem: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#3F45B6',
    height: 62,
    width: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
  },
  imagePreview: {
    borderWidth: 3,
    borderRadius: 15,
    height: 62,
    width: 62
  }
})
export default DadosDenuncia