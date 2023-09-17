import React from "react"
import {SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native"
import BotaoImagemTexto from "../components/BotaoImagemTexto"

const MotivoDenuncia = ({ navigation }) => {
  const { container, textoMotivo, wrapperMotivo, botaoTexto } = styles
  return (
    <SafeAreaView style={container}>
      <Text style={textoMotivo}>Qual o motivo do seu contato?</Text>
      
      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Barbeiro'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Barbeiro'} fonteImagem={'../../icons/bug.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Casa fechada, Terreno baldio'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Casa fechada, Terreno baldio'} fonteImagem={'../../icons/lixo.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Escorpião'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Escorpião'} fonteImagem={'../../icons/scorpion.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Foco de Aedes Aegipty'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Foco de \nAedes Aegipty'} fonteImagem={'../../icons/mosquito.png'} />
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
  textoMotivo: {
    fontSize: 35,
    textAlign: 'center',
    width: 280
  },
  wrapperMotivo: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    width: 280,
    height: 90,
    padding: 10,
    elevation: 7
  },
  botaoTexto: {
    color: '#3F45B6',
    fontSize: 27,
    lineHeight: 34,
    marginLeft: 15
  }
})
export default MotivoDenuncia