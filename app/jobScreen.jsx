import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from "react-native";
import { Link } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function JobScreen() {
  const [location, setLocation] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true); // เริ่มรีเฟรช
    setTimeout(() => {
      setRefreshing(false); // หยุดรีเฟรชหลังจาก 1.5 วินาที
    }, 1500);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      try {
        let storedJobs = await AsyncStorage.getItem("jobs");
        console.log("✅ บันทึกข้อมูลสำเร็จ");
        let jobList = storedJobs ? JSON.parse(storedJobs) : [];
        Location.getCurrentPositionAsync({}).then((currentLocation) => {
          setLocation(currentLocation.coords);
          console.log("📍 Current location:", currentLocation.coords);
          jobList.sort((a, b) => {
            const distanceA = Math.hypot(
              currentLocation.coords.latitude - a.lat,
              currentLocation.coords.longitude - a.lng
            );
            const distanceB = Math.hypot(
              currentLocation.coords.latitude - b.lat,
              currentLocation.coords.longitude - b.lng
            );
            return distanceA - distanceB;
          });
        });

        console.log("jobList", jobList.length);
        console.log("job", jobs.length);
        if (JSON.stringify(jobs) === JSON.stringify(jobList)) return;
        setJobs(jobList);
      } catch (error) {
        console.log("❌ บันทึกข้อมูลล้มเหลว:", error);
      }
    })();
  }, [jobs, refreshing]);

  return (
    <View className="flex-1">
      <MapView
        style={{ width: "100%", height: 250 }}
        initialRegion={{
          latitude: 13.7563,
          longitude: 100.5018,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="ตำแหน่งของคุณ"
            pinColor="blue"
          />
        )}
        {jobs.map((job) => (
          <Marker
            key={job.id}
            coordinate={{ latitude: job.lat, longitude: job.lng }}
            title={job.title}
          />
        ))}
      </MapView>
      <Link
        href="/postJobScreen"
        className="text-blue-500 font-montserrat font-bold"
      >
        ประกาศหาพนักงาน(สำหรับเจ้าของร้าน)
      </Link>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-200">
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className="text-gray-600">{item.company}</Text>
            <Text className="text-blue-500">{item.salary}</Text>
            <TouchableOpacity className="mt-2 bg-blue-500 p-2 rounded">
              <Text className="text-white text-center">สมัครงาน</Text>
            </TouchableOpacity>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } // ✅ เพิ่ม RefreshControl
      />
    </View>
  );
}
