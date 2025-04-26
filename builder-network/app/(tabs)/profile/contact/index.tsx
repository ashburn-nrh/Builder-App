import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const index = () => {
  return (
    <SafeAreaView className='flex-1 bg-primary'>
        <View className='flex-1 px-6 py-4'>
            <View className='flex-row items-start'>
                <Ionicons name="arrow-back" size={24} color="black" onPress={() => {router.back()}} />
            </View>
            <Text className='text-3xl font-bold text-gray-800 mb-8'>Contact Details</Text>
                </View>
    </SafeAreaView>
  )
}

export default index