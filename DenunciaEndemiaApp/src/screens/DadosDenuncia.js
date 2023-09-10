import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";

const DadosDenuncia = () => {
  const { container, wrapperTitle, textoDenuncia, nomeDenuncia, wrapperLista, botaoEnviar, textoEnv, textoVer, sectionHeader, inputImagem, inputTexto } = styles

  return (
    <SafeAreaView style={container}>
      <View style={wrapperTitle}>
        <Text style={textoDenuncia}>Denúncia de</Text>
        <Text style={[textoDenuncia, nomeDenuncia]}>Barbeiro</Text>
      </View>
      
      <View style={wrapperLista}>
        <ScrollView>
          <View>
            <Text style={sectionHeader}>Imagem</Text>
            <TextInput style={inputImagem}></TextInput>
          </View>
          <View>
            <Text style={sectionHeader}>Nome</Text>
            <TextInput style={inputTexto}></TextInput>
          </View>
          <View>
            <Text style={sectionHeader}>Telefone</Text>
            <TextInput style={inputTexto}></TextInput>
          </View>
          <View>
            <Text style={sectionHeader}>E-mail</Text>
            <TextInput style={inputTexto}></TextInput>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={botaoEnviar}>
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
    height: 308,
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
    color: 'white',
  },
  sectionHeader: {
    fontSize: 24
  },
  inputImagem: {
    borderStyle:'solid',
    borderWidth: 3,
    borderColor: '#3F45B6',
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    height: 124,
    padding: 10
  },
  inputTexto: {
    borderStyle:'solid',
    borderWidth: 3,
    borderColor: '#3F45B6',
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    height: 62,
    padding: 10
  }
})
export default DadosDenuncia