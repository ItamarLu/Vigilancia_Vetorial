import React from "react"
import { Text } from "react-native"
import { Feather } from "@expo/vector-icons"

const BotaoIconeTexto = (props) => {
  const { nomeIcone, tamanhoIcone, textoStyle, texto } = props
  return (
    <>
      <Feather name={nomeIcone} size={tamanhoIcone} color={"white"} />
      <Text style={textoStyle}>{texto}</Text>
    </>
  )
}

export default BotaoIconeTexto