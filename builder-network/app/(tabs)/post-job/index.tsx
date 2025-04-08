import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { jobCategories } from '../../../constants/JobCategory';

export default function PostJobScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const router = useRouter();

  const items = jobCategories.map((job) => ({
    label: job,
    value: job,
  }));

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 bg-gray-100 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800">Select Job Category</Text>
      </View>

      {/* Body Content */}
      <View className="flex-1 px-6 pt-10">
        <View className="w-full max-w-md">
          <Text className="text-2xl font-bold mb-3 text-gray-800">Post a Job</Text>
          <Text className="text-lg text-gray-700 mb-6">
            Get responses from The Builder{"\n"}
            Network's screened and reviewed{"\n"}
            Tradespeople near you
          </Text>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={() => {}}
            placeholder="Choose a job category"
            style={{ borderColor: '#ccc', zIndex: 1000 }}
            dropDownContainerStyle={{ borderColor: '#ccc', zIndex: 999 }}
            textStyle={{ fontSize: 16 }}
          />
        </View>
      </View>

      {/* Fixed Bottom Button */}
      {value && (
        <View className="absolute bottom-6 left-0 right-0 px-6">
          <TouchableOpacity
            onPress={() => router.push(`/post-job/${encodeURIComponent(value)}`)}
            className="bg-blue-600 py-3 rounded-xl"
          >
            <Text className="text-white text-base font-medium text-center">Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
