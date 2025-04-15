import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import ProfileAvatar from '@/components/ProfileAvatar';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 bg-primary p-4">
        <Text className="text-3xl font-bold text-gray-800 mb-6">Profile</Text>
        <ProfileAvatar  
          name="John Doe"
          imageUrl='https://fastly.picsum.photos/id/999/200/200.jpg?hmac=iwXALEStJtHL4Thxk_YbLNHNmjq9ZrIQYFUvtxndOaU'
        />
        {/* subtitle */}
        <Text className='text-xl font-semibold text-gray-800 mt-4 mb-5'>Account</Text>
        {/*button*/}
        <TouchableOpacity onPress={() => {}} >
        <View className="flex-row items-center justify-between m-2">
          <View className="flex-row items-center ">
            <Ionicons name="person-outline" size={24} color="gray" />
            <Text className="text-gray-700 text-lg pl-4">Contact Information</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="gray" />
        </View>
        </TouchableOpacity>
        {/* Divider */}
        <View className='h-px bg-gray-300 my-2'/>
        
      </View>
    </SafeAreaView>
  );
};

export default Index;
