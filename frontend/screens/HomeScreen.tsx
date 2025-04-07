import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu, Button, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (route: keyof RootStackParamList) => {
    closeMenu();
    navigation.navigate(route);
  };

  return (
    <PaperProvider>
      <View className="flex-1 bg-white dark:bg-black">
        {/* Custom NavBar */}
        <Appbar.Header className="bg-white dark:bg-black">
          <Appbar.Content title="Builder App" titleStyle={{ fontSize: 20 }} />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="dots-vertical" color="#000" onPress={openMenu} />}
          >
            <Menu.Item onPress={() => handleSelect('PostJob')} title="Post a Job" />
            <Menu.Item onPress={() => handleSelect('Login')} title="Login" />
            <Menu.Item onPress={() => handleSelect('SignUp')} title="Sign up as Trade's person" />
          </Menu>
        </Appbar.Header>

        {/* Body content */}
        <View className="flex-1 justify-center items-center">
          {/* Add anything else for the Home screen here */}
        </View>
      </View>
    </PaperProvider>
  );
}
