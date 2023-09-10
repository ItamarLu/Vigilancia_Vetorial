import React from "react"
import {SafeAreaView, StyleSheet} from "react-native"
import BotaoIconeTexto from "../components/BotaoIconeTexto"

const FazerDenuncia = () => {
  const { container, wrapperDenuncia, textoDenuncia, wrapperOutraOpcao, TextoOutraOpcao } = styles
  return (
      <SafeAreaView style={container}>
        <BotaoIconeTexto wrapperStyle={wrapperDenuncia} nomeIcone={"alert-triangle"} tamanhoIcone={115} textoStyle={textoDenuncia} texto={'Fazer Denúncia'}/>

        <BotaoIconeTexto wrapperStyle={wrapperOutraOpcao} nomeIcone={"list"} tamanhoIcone={30} textoStyle={TextoOutraOpcao} texto={'Histórico'}/>

        <BotaoIconeTexto wrapperStyle={wrapperOutraOpcao} nomeIcone={"phone"} tamanhoIcone={30} textoStyle={TextoOutraOpcao} texto={'Contatos'}/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  wrapperDenuncia: {
    backgroundColor: '#B63F54',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280, 
    height: 371,
    borderRadius: 15
  },
  textoDenuncia: {
    fontSize: 28,
    color: 'white',
    width: 137,
    textAlign: 'center'
  },
  wrapperOutraOpcao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F45B6',
    borderRadius: 15,
    width: 280,
    height: 59
  },
  TextoOutraOpcao: {
    color: 'white',
    fontSize: 28,
    lineHeight: 34,
    marginLeft: 5
  }
})
export default FazerDenuncia