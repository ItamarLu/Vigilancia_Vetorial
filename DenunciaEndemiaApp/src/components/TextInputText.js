import React from "react"
import { View, Text, TextInput} from 'react-native'

const TextInputText = (props) => {
  const { headerStyle, text, textInputStyle} = props
  return (
    <View>
      <Text style={headerStyle}>{text}</Text>
      <TextInput style={textInputStyle} cursorColor={'#3F45B6'}></TextInput>
    </View>
  )
}

export default TextInputText