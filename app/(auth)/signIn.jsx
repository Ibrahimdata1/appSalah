import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../assets/images";
import { LinearGradient } from "expo-linear-gradient";

const signIn = () => {
  return (
    <LinearGradient colors={["#1e293b", "#0f172a"]} style={{ flex: 1 }}>
      <SafeAreaView className="bg-slate-900 h-full">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View
            style={{
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
              marginHorizontal: 13,
            }}
          >
            <Image
              source={images.banner}
              resizeMode="contain"
              className="w-1/2 h-20"
            />
            <Text className="text-lg text-white text-semibold font-poppinsBold">
              Sign in to JobFinder
            </Text>
            {/* Input Fields */}
            <View style={{ width: "100%", marginTop: 24 }}>
              <Text style={{ color: "white", fontSize: 16, marginBottom: 8 }}>
                Email
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: 12,
                  borderRadius: 10,
                  width: "100%",
                }}
                placeholder="Enter your email"
                keyboardType="email-address"
              />

              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginTop: 16,
                  marginBottom: 8,
                }}
              >
                Password
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: 12,
                  borderRadius: 10,
                  width: "100%",
                }}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "#2563eb",
                padding: 16,
                borderRadius: 10,
                alignItems: "center",
                width: "100%",
                marginTop: 24,
              }}
              onPress={() => router.push("/home")}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default signIn;
