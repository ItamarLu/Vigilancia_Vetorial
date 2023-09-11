import React from "react"
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'

const DenunciaFeita = ({ navigation }) => {
  const { container, textoEnvi, textoAgra, textWrap, botaoVoltar, textoBotao, checkTextContainer, iconWrap } = styles
  return (
    <SafeAreaView style={container}>
      <View style={checkTextContainer}>
        <View style={iconWrap}>
          <AntDesign name="checkcircle" size={137} color="white" />
        </View>
        <View style={textWrap}>
          <Text style={textoEnvi}>Denúncia Enviada!</Text>
          <Text style={textoAgra}>A cidade agradece.</Text>
        </View> 
      </View>
      <TouchableOpacity style={botaoVoltar} onPress={() => navigation.navigate('FazerDenuncia')}>
        <Text style={textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007419'
  },
  checkTextContainer: { 
    flex: 1, 
    justifyContent: "center" 
  },
  iconWrap: {
    alignItems: "center"
  },
  textWrap: {
    width: 200,
    alignItems: 'center',
    marginTop: 30
  },
  textoEnvi: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 41
  },
  textoAgra: {
    color: 'white',
    fontSize: 20,
    lineHeight: 24
  },
  botaoVoltar: {
    width: 280,
    height: 55,
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 15,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  textoBotao: {
    color: 'white',
    fontSize: 24
  }
})

export default DenunciaFeita