import React from "react"
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'

const DenunciaFeita = ({ navigation }) => {
  const { container, textoEnvi, textoAgra, textWrap, botaoVoltar, textoBotao, checkTextContainer, iconWrap } = styles
  return (
    <SafeAreaView style={container}>
      <View style={checkTextContainer}>
        <View style={iconWrap}>
          <FontAwesome5 name="check" size={100} color="white" />
        </View>
        <View style={textWrap}>
          <Text style={textoEnvi}>Problema reportado!</Text>
          <Text style={textoAgra}>A cidade agradece.</Text>
        </View> 
      </View>
      <TouchableOpacity style={botaoVoltar} onPress={() => navigation.navigate('FazerDenuncia')}>
        <Text style={textoBotao}>Retornar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F45B6'
  },
  checkTextContainer: { 
    flex: 1, 
    justifyContent: "center"
  },
  iconWrap: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#637EFF',
    width: 157,
    height: 157,
    borderRadius: 100,
    alignSelf: 'center' 
  },
  textWrap: {
    width: 280,
    alignItems: 'center',
    marginTop: 30,
    gap: 20
  },
  textoEnvi: {
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
    lineHeight: 45,
    fontWeight: '600'
  },
  textoAgra: {
    color: 'white',
    fontSize: 30,
    lineHeight: 30
  },
  botaoVoltar: {
    width: 300,
    height: 80,
    elevation: 5,
    backgroundColor: '#637EFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500'
  }
})

export default DenunciaFeita