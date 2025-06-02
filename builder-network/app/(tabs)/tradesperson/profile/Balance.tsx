import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function BalanceScreen() {
    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-primary pt-5 px-4">
                <TouchableOpacity onPress={() => router.back()} className="mb-4">
                    <ArrowLeft size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}