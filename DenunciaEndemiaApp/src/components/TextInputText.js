import React from 'react'
import { View, Text, TextInput } from 'react-native'

const TextInputText = (props) => {
  const { headerStyle, header, placeho, textInputStyle, childToParent } = props

  return (
    <View>
      <Text style={headerStyle}>{header}</Text>
      <TextInput
        style={textInputStyle}
        cursorColor={'#3F45B6'}
        placeholder={placeho}
        placeholderTextColor="#3F45B6"
        onChangeText={(value) => {
          childToParent(value)
        }}
      />
    </View>
  )
}

export default TextInputText
