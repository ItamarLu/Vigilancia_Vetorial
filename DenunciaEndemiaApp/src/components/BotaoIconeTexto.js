import React from "react"
import {TouchableOpacity, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

const BotaoIconeTexto = (props) => {
  const { wrapperStyle, nomeIcone, tamanhoIcone, textoStyle, texto } = props
  return (
    <TouchableOpacity style={wrapperStyle}>
      <Feather name={nomeIcone} size={tamanhoIcone} color={"white"}/>
      <Text style={textoStyle}>{texto}</Text>
    </TouchableOpacity>
  )
}

export default BotaoIconeTexto