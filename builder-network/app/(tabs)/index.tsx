import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-4 bg-gray-100 border-b border-gray-300">
        <Text className="text-xl font-bold text-gray-800">Builder Network</Text>

        <View className="relative">
          <TouchableOpacity onPress={() => setOpen(!open)} className="p-2">
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>

          {open && (
            <View className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-40 z-50 border border-gray-200">
              <Link href="/post-job" asChild>
                <TouchableOpacity className="px-4 py-3 border-b border-gray-100">
                  <Text className="text-gray-700">Post Job</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/login" asChild>
                <TouchableOpacity className="px-4 py-3 border-b border-gray-100">
                  <Text className="text-gray-700">Login</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/sign-up" asChild>
                <TouchableOpacity className="px-4 py-3">
                  <Text className="text-gray-700">Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 text-lg">Welcome to the Builder App!</Text>
      </View>
    </SafeAreaView>
  );
}
