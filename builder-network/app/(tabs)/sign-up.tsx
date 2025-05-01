import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '@/components/AppHeader'
import { router } from 'expo-router'

const signup = () => {
  return (
    <SafeAreaView className='flex-1 bg-blue-700'>
      <AppHeader onBackPress={()=>router.push('/(tabs)/sign-up')}/>
        <View className='flex-1 px-6 pt-10 justify-center'>
          <Text className='font-semibold text-3xl text-white text-center'>The Reliable way to get {'\n'} work you want</Text>
          <View className='flex-1 bg-blue-300 p-6 rounded-lg mt-6'>
            <Text className='text-xl font-semibold text-gray-800 mb-3'>View Local Trade Work</Text>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({})