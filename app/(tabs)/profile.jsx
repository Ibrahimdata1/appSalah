import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter(); // ✅ ต้องเพิ่ม const เพื่อให้ useRouter ทำงาน

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-3xl font-bold mb-4">👤 โปรไฟล์</Text>

      <Button
        title="กลับหน้าหลัก"
        onPress={() => router.back()}
        color="#007AFF" // เปลี่ยนสีปุ่มให้ดูดีขึ้น
      />
    </View>
  );
}
