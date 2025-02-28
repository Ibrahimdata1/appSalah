import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PostJobScreen() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Allow location access to continue");
      return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  };

  const postJob = async () => {
    if (!jobTitle || !company || !salary || !location) {
      Alert.alert("กรอกข้อมูลให้ครบ!", "ต้องมีชื่อ ตำแหน่ง เงินเดือน และพิกัด");
      return;
    }

    const newJob = {
      id: Date.now(),
      title: jobTitle,
      company,
      salary,
      lat: location.latitude,
      lng: location.longitude,
    };

    let storedJobs = await AsyncStorage.getItem("jobs");
    let jobs = storedJobs ? JSON.parse(storedJobs) : [];
    jobs.push(newJob);

    await AsyncStorage.setItem("jobs", JSON.stringify(jobs));

    Alert.alert(
      "ประกาศงานสำเร็จ!",
      `ตำแหน่ง: ${jobTitle}\nบริษัท: ${company}\nเงินเดือน: ${salary}`
    );
    setJobTitle("");
    setCompany("");
    setSalary("");
    setLocation(null);
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold">โพสต์งานใหม่</Text>

      <TextInput
        style={{
          borderWidth: 1,
          padding: 8,
          marginTop: 8,
          borderColor: "#000",
        }}
        placeholder="ชื่อตำแหน่งงาน"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      <TextInput
        style={{
          borderWidth: 1,
          padding: 8,
          marginTop: 8,
          borderColor: "#000",
        }}
        placeholder="ชื่อบริษัท"
        value={company}
        onChangeText={setCompany}
      />
      <TextInput
        style={{
          borderWidth: 1,
          padding: 8,
          marginTop: 8,
          borderColor: "#000",
        }}
        placeholder="เงินเดือน"
        value={salary}
        onChangeText={setSalary}
      />

      <Button title="ใช้ตำแหน่ง GPS ปัจจุบัน" onPress={getLocation} />
      {location && (
        <Text className="text-green-500 mt-2">พิกัดบันทึกแล้ว! 📍</Text>
      )}

      <Button title="โพสต์งาน" onPress={postJob} />
    </View>
  );
}
