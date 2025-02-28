import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <Text className="w-full text-center text-3xl font-montserrat font-bold">
        🏠 หน้าหลัก (Home)
      </Text>

      <View className="w-full items-center mt-4 ">
        <Link href="/home" className="text-blue-500 font-montserrat font-bold">
          ไปที่ Home
        </Link>
        <Link
          href="/settings"
          className="text-blue-500 font-montserrat font-bold"
        >
          ไปที่ตั้งค่า
        </Link>
        <Link
          href="/jobScreen"
          className="text-blue-500 font-montserrat font-bold"
        >
          ไปที่หน้าหางาน
        </Link>
      </View>
    </View>
  );
}
