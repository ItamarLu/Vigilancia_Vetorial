import React from "react"
import { Image, StyleSheet, View } from "react-native"

const IconeMotivo = (props) => {
  const { motivo } = props
  const { iconeStyle, iconePadd } = styles

  if (motivo === 'Barbeiro') { 
    return (
      <View style={iconePadd}>
        <Image source={require('../../icons/bug.png')} style={iconeStyle} />
      </View>
    )
  }
  else if (motivo === 'Aedes A.') { 
    return (
      <View style={iconePadd}>
        <Image source={require('../../icons/mosquito.png')} style={iconeStyle} />
      </View>
    )
  }
  else if (motivo === 'Casa/Terreno') { 
    return (
      <View style={iconePadd}>
        <Image source={require('../../icons/lixo.png')} style={iconeStyle} />
      </View>
    )
  }
  else { 
    return (
      <View style={iconePadd}>
        <Image source={require('../../icons/scorpion.png')} style={iconeStyle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconeStyle: {
    width: 65, 
    height: 65,
    tintColor: 'white'
  },
  iconePadd: {
    width: 85,
    height: 85,
    backgroundColor: '#3F45B6',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default IconeMotivo