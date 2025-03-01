import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
const signUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    // ส่งข้อมูลไปยัง Backend (API) ได้ที่นี่
    Alert.alert("ลงทะเบียนสำเร็จ!");
    router.push("/signIn"); // ส่งไปหน้า Login
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-5">สมัครสมาชิก</Text>
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="ชื่อผู้ใช้"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="อีเมล"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="รหัสผ่าน"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="ยืนยันรหัสผ่าน"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg w-full items-center"
        onPress={handleRegister}
      >
        <Text className="text-white font-bold text-lg">สมัครสมาชิก</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/signIn")}>
        <Text className="mt-4 text-blue-500 text-sm">
          มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default signUp;
