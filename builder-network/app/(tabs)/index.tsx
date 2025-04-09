import { View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-4 bg-gray-100 border-b border-gray-300">
        <Text className="text-xl font-bold text-gray-800">Builder Network</Text>

        <TouchableOpacity onPress={() => setOpen(!open)} className="p-2">
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Dropdown Menu */}
      {open && (
        <View
          style={{ width: screenWidth, top: 100 }} // pushed lower from header
          className="absolute left-0 bg-white border-y border-gray-200 z-50 shadow-md"
        >
          {/* Close Icon */}
          <TouchableOpacity
            onPress={() => setOpen(false)}
            className="absolute top-3 right-4 z-50"
          >
            <Ionicons name="close" size={24} color="gray" />
          </TouchableOpacity>

          <View className="pt-10">
            <Link href="/post-job" asChild>
              <TouchableOpacity className="px-4 py-4 border-b border-gray-100">
                <Text className="text-gray-700 text-base">Post Job</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/login" asChild>
              <TouchableOpacity className="px-4 py-4 border-b border-gray-100">
                <Text className="text-gray-700 text-base">Login</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/sign-up" asChild>
              <TouchableOpacity className="px-4 py-4">
                <Text className="text-gray-700 text-base">Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      )}

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 text-lg">Welcome to the Builder App!</Text>
      </View>
    </SafeAreaView>
  );
}
