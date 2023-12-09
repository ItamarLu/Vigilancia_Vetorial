import React from 'react'
import { View, Text, TextInput } from 'react-native'

const TextInputText = (props) => {
  const { headerStyle, header, textInputStyle, childToParent } = props

  return (
    <View>
      <Text style={headerStyle}>{header}</Text>
      <TextInput
        style={textInputStyle}
        cursorColor={'#3F45B6'}
        placeholder="Rua, número e bairro"
        placeholderTextColor="#3F45B6"
        autoComplete="street-address"
        onChangeText={(value) => {
          childToParent(value)
        }}
      />
    </View>
  )
}

export default TextInputText
