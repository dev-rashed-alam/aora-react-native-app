import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, containerStyle, handlePress, isLoading, textStyles}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress} 
        className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
        activeOpacity={0.7}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton