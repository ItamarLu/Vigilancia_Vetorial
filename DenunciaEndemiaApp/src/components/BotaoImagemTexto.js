import React from "react"
import { Text, Image, StyleSheet } from "react-native"

const BotaoImagemTexto = (props) => {
  const { textoStyle, texto, fonteImagem } = props
  const { imagemStyle } = styles

  // Tirar esses ifs e fazer funcionar só o require()
  if (fonteImagem === '../../icons/bug.png') { 
    return (
      <>
        <Image source={require('../../icons/bug.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </>
    )
  }
  else if (fonteImagem === '../../icons/lixo.png') { 
    return (
      <>
        <Image source={require('../../icons/lixo.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </>
    )
  }
  else if (fonteImagem === '../../icons/scorpion.png') { 
    return (
      <>
        <Image source={require('../../icons/scorpion.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </>
    )
  }
  else { 
    return (
      <>
        <Image source={require('../../icons/mosquito.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  imagemStyle: {
    width: 60, 
    height: 60
  }
})
export default BotaoImagemTexto