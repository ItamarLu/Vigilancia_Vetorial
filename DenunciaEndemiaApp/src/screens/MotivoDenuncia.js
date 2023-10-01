import React from "react"
import {SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native"
import BotaoImagemTexto from "../components/BotaoImagemTexto"

const MotivoDenuncia = ({ navigation }) => {
  const { container, textoMotivo, wrapperMotivo, botaoTexto } = styles
  return (
    <SafeAreaView style={container}>
      <Text style={textoMotivo}>Qual o motivo do seu contato?</Text>
      
      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Foco de Aedes Aegipty'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Aedes \nAegipty'} fonteImagem={'../../icons/mosquito.png'} />
      </TouchableOpacity>
      
      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Barbeiro'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Barbeiro'} fonteImagem={'../../icons/bug.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Casa fechada, Terreno baldio'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Casa fechada, \nTerreno baldio'} fonteImagem={'../../icons/lixo.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Escorpião'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Escorpião'} fonteImagem={'../../icons/scorpion.png'} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#637EFF'
  },
  textoMotivo: {
    fontSize: 35,
    textAlign: 'center',
    width: 280,
    color: 'white',
    marginBottom: 10
  },
  wrapperMotivo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: 287,
    height: 95,
    padding: 10,
    elevation: 7
  },
  botaoTexto: {
    color: '#3F45B6',
    fontSize: 25,
    lineHeight: 34,
    marginLeft: 15
  }
})
export default MotivoDenuncia