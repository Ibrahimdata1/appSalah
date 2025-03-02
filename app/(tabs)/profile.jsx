import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../contexts/authContext";
import { router } from "expo-router";

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    Alert.alert("บันทึกข้อมูลสำเร็จ!");
    setIsEditing(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-5">โปรไฟล์ของฉัน</Text>
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="ชื่อ"
        value={name}
        onChangeText={setName}
        editable={isEditing}
      />
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="อีเมล"
        value={email}
        editable={false}
      />
      <TextInput
        className="w-full h-12 bg-white rounded-lg px-4 mb-4 border border-gray-300"
        placeholder="เบอร์โทรศัพท์"
        value={phone}
        onChangeText={setPhone}
        editable={isEditing}
      />
      {isEditing ? (
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg w-full items-center"
          onPress={handleSave}
        >
          <Text className="text-white font-bold text-lg">บันทึก</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg w-full items-center"
          onPress={() => setIsEditing(true)}
        >
          <Text className="text-white font-bold text-lg">แก้ไขโปรไฟล์</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        className="mt-4 bg-red-500 p-4 rounded-lg w-full items-center"
        onPress={logout}
      >
        <Text
          className="text-white font-bold text-lg"
          onPress={router.push("/signIn")}
        >
          ออกจากระบบ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
