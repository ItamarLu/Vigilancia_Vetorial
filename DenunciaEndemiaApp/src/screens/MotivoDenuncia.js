import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"
import BotaoImagemTexto from "../components/BotaoImagemTexto"
import { LinearGradient } from 'expo-linear-gradient'

const MotivoDenuncia = ({ navigation }) => {
  const { container, textoMotivo, wrapperMotivo, botaoTexto } = styles
  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <Text style={textoMotivo}>Qual o motivo do seu contato?</Text>
      
      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Aedes A.'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Aedes \nAegipty'} fonteImagem={'../../icons/mosquito.png'} />
      </TouchableOpacity>
      
      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Barbeiro'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Barbeiro'} fonteImagem={'../../icons/bug.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Casa/Terreno'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Casa fechada, \nTerreno baldio'} fonteImagem={'../../icons/lixo.png'} />
      </TouchableOpacity>

      <TouchableOpacity style={wrapperMotivo} onPress={() => navigation.navigate('DadosDenuncia', {motivo: 'Escorpião'})}>
        <BotaoImagemTexto wrapperStyle={wrapperMotivo} textoStyle={botaoTexto} texto={'Escorpião'} fonteImagem={'../../icons/scorpion.png'} />
      </TouchableOpacity>

    </LinearGradient>
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
    fontSize: 40,
    width: 340,
    color: 'white',
    marginBottom: 20
  },
  wrapperMotivo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 340,
    height: 115,
    padding: 20,
    elevation: 7
  },
  botaoTexto: {
    color: '#06417B',
    fontSize: 30
  }
})
export default MotivoDenuncia