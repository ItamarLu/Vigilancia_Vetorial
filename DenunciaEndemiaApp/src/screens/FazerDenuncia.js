import React from "react"
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Image, Text } from "react-native"
import BotaoIconeTexto from "../components/BotaoIconeTexto"

const FazerDenuncia = ({ navigation }) => {
  const { container, wrapperDenuncia, textoDenuncia, wrapperOutraOpcao, TextoOutraOpcao, sombra, logo, header,logoPrefeitura, textoVig, traco } = styles
  return (
      <SafeAreaView style={container}>
        <View style={header}>
          <Image source={require('../../assets/logoJuazeiro2.png')} style={logo}/>
          <Image />
          <Image source={require('../../assets/logoPrefeitura.png')} style={logoPrefeitura}/>
          <Image />
          <View style={traco}></View>
          <Text style={textoVig}>Vigilância em Saúde</Text>
        </View>

        <TouchableOpacity style={[wrapperDenuncia, sombra]} onPress={() => navigation.navigate('MotivoDenuncia')}>
          <BotaoIconeTexto nomeIcone={"alert-triangle"} tamanhoIcone={110} corItem={'white'} textoStyle={textoDenuncia} texto={'Reportar Problema'} />
        </TouchableOpacity>

        <TouchableOpacity style={[wrapperOutraOpcao, sombra]} onPress={() => navigation.navigate('VerMapa')}>
          <BotaoIconeTexto nomeIcone={"globe"} tamanhoIcone={47} corItem={'#3F45B6'} textoStyle={TextoOutraOpcao} texto={'Nosso site'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[wrapperOutraOpcao, sombra]} onPress={() => navigation.navigate('MotivoDenuncia')}>
          <BotaoIconeTexto nomeIcone={"instagram"} tamanhoIcone={47} corItem={'#3F45B6'} textoStyle={TextoOutraOpcao} texto={'Instagram'}/>
        </TouchableOpacity>
      </SafeAreaView>
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
  wrapperDenuncia: {
    backgroundColor: '#3F45B6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350, 
    height: 360,
    borderRadius: 5,
    gap: 10
  },
  sombra: {
    elevation: 7
  },
  textoDenuncia: {
    fontSize: 35,
    color: 'white',
    width: 175,
    textAlign: 'center',
  },
  wrapperOutraOpcao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: 350,
    height: 75,
    gap: 15
  },
  TextoOutraOpcao: {
    color: '#3F45B6',
    fontSize: 32
  },
  header: {
    flexDirection: 'row',
    width: 350,
    height: 65, 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 65,
    height: 65,
    alignSelf: 'center',
    objectFit: 'contain'
  },
  logoPrefeitura: {
    width: 120,
    height: 65,
    alignSelf: 'center',
    objectFit: 'contain'
  },
  textoVig: {
    color: 'white',
    fontSize: 25,
    width: 120,
    textAlign: 'center'
  },
  traco: {
    width: 1,
    height: 65,
    backgroundColor: 'white'
  }
})
export default FazerDenuncia