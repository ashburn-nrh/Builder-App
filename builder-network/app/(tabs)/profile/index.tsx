import { Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import ProfileAvatar from '@/components/ProfileAvatar';
import SettingsRow from '@/components/SettingsRow';

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 bg-primary p-4">
        <Text className="text-3xl font-bold text-gray-800 mb-6">Profile</Text>

        <ProfileAvatar  
          name="John Doe"
          imageUrl="https://fastly.picsum.photos/id/999/200/200.jpg?hmac=iwXALEStJtHL4Thxk_YbLNHNmjq9ZrIQYFUvtxndOaU"
        />

        {/* ACCOUNT SECTION */}
        <Text className="text-xl font-semibold text-gray-800 mt-6 mb-3">Account</Text>

        <SettingsRow 
          iconName="person-outline"
          label="Contact Information"
          onPress={() => {}}
        />
        <SettingsRow 
          iconName="lock-closed-outline"
          label="Change Password"
          onPress={() => {}}
        />

        {/* PREFERENCES SECTION */}
        <Text className="text-xl font-semibold text-gray-800 mt-6 mb-3">Preferences</Text>

        <SettingsRow 
          iconName="moon-outline"
          label="Dark Mode"
          onPress={() => {}}
        />
        <SettingsRow 
          iconName="notifications-outline"
          label="Notifications"
          onPress={() => {}}
        />

        {/* OTHERS */}
        <Text className="text-xl font-semibold text-gray-800 mt-6 mb-3">Others</Text>

        <SettingsRow 
          iconName="log-out-outline"
          label="Logout"
          onPress={() => {}}
        />

      </View>
    </SafeAreaView>
  );
};

export default Index;
