import React from "react"
import { View, Text, TextInput} from 'react-native'

const TextInputText = (props) => {
  const { headerStyle, text, textInputStyle} = props
  return (
    <View>
      <Text style={headerStyle}>{text}</Text>
      <TextInput style={textInputStyle} cursorColor={'gray'} inputMode="tel" maxLength={11}></TextInput>
    </View>
  )
}

export default TextInputText