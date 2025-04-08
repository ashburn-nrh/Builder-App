import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRouter } from 'expo-router';
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
    <View className="flex-1 bg-white">
      <View className="px-4 py-4 bg-gray-100 border-b border-gray-200">
        <Text className="text-xl font-bold text-gray-800">Select Job Category</Text>
      </View>

      <View className="flex-1 justify-center items-center px-4">
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={() => {}}
          placeholder="Choose a job category"
          style={{ minWidth: 250, borderColor: '#ccc' }}
          dropDownContainerStyle={{ borderColor: '#ccc' }}
          textStyle={{ fontSize: 16 }}
        />

        {value && (
          <TouchableOpacity
            onPress={() => router.push(`/post-job/${encodeURIComponent(value)}`)}
            className="mt-6 bg-blue-600 px-6 py-2 rounded-xl"
          >
            <Text className="text-white text-base font-medium">Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
