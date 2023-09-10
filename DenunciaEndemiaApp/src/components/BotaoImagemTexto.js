import React from "react"
import {TouchableOpacity, Text, Image, StyleSheet } from "react-native"

const BotaoImagemTexto = (props) => {
  const { wrapperStyle, textoStyle, texto, fonteImagem } = props
  const { imagemStyle } = styles

  // Tirar esses ifs e fazer funcionar só o require()
  if (fonteImagem === '../../icons/bug.png') { 
    return (
      <TouchableOpacity style={wrapperStyle}>
        <Image source={require('../../icons/bug.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </TouchableOpacity>
    )
  }
  else if (fonteImagem === '../../icons/lixo.png') { 
    return (
      <TouchableOpacity style={wrapperStyle}>
        <Image source={require('../../icons/lixo.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </TouchableOpacity>
    )
  }
  else if (fonteImagem === '../../icons/scorpion.png') { 
    return (
      <TouchableOpacity style={wrapperStyle}>
        <Image source={require('../../icons/scorpion.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </TouchableOpacity>
    )
  }
  else { 
    return (
      <TouchableOpacity style={wrapperStyle}>
        <Image source={require('../../icons/mosquito.png')} style={imagemStyle}/>
        <Text style={textoStyle}>{texto}</Text>
      </TouchableOpacity>
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