import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

const reasons = [
  "I couldn’t find a trades' person on The Builder Network",
  "I found a trades' person elsewhere",
  "I’m going to do the job myself",
  "Job not going ahead",
  "Another reason (please specify)"
];

const closejob = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSelect = (reason: string) => {
    setSelectedReason(reason);
    if (reason !== "Another reason (please specify)") {
      setCustomReason('');
    }
  };
  return (
    <SafeAreaView className="flex-1  bg-gradient-to-t  from-primary to-white">
      <View className='flex-1 bg-primary px-2 py-4'>
        {/* Header */}
        <View className='flex-row items-start'>
        <TouchableOpacity onPress={()=>{router.push('/(tabs)/my-job')}} className="mr-2 ml-2">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        </View>
        <Text className='text-2xl font-bold text-gray-800  m-4'>Why are you closing this job?</Text>
        <Text className='text-lg ml-4'> Your feedback helps us make The Builder {'\n'} Network even better</Text>
      </View>
      </SafeAreaView>

  )
}

export default closejob