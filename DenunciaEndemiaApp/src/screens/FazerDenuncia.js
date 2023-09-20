import React from "react"
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"
import BotaoIconeTexto from "../components/BotaoIconeTexto"

const FazerDenuncia = ({ navigation }) => {
  const { container, wrapperDenuncia, textoDenuncia, wrapperOutraOpcao, TextoOutraOpcao, sombra } = styles
  return (
      <SafeAreaView style={container}>
        <TouchableOpacity style={[wrapperDenuncia, sombra]} onPress={() => navigation.navigate('MotivoDenuncia')}>
          <BotaoIconeTexto nomeIcone={"alert-triangle"} tamanhoIcone={115} corItem={'#BD373B'} textoStyle={textoDenuncia} texto={'Reportar Problema'} />
        </TouchableOpacity>

        <TouchableOpacity style={[wrapperOutraOpcao, sombra]} onPress={() => navigation.navigate('VerMapa')}>
          <BotaoIconeTexto nomeIcone={"clock"} tamanhoIcone={36} corItem={'#3B4C9D'} textoStyle={TextoOutraOpcao} texto={'Histórico'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[wrapperOutraOpcao, sombra]} onPress={() => navigation.navigate('MotivoDenuncia')}>
          <BotaoIconeTexto nomeIcone={"users"} tamanhoIcone={36} corItem={'#3B4C9D'} textoStyle={TextoOutraOpcao} texto={'Contatos'}/>
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
  wrapperDenuncia: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280, 
    height: 371,
    borderRadius: 15,
    gap: 10
  },
  sombra: {
    elevation: 7
  },
  textoDenuncia: {
    fontSize: 28,
    color: '#BD373B',
    width: 137,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 36
  },
  wrapperOutraOpcao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    width: 280,
    height: 59,
    gap: 10
  },
  TextoOutraOpcao: {
    color: '#3B4C9D',
    fontSize: 28,
    lineHeight: 34
  }
})
export default FazerDenuncia