import React, { createContext, useContext, useState } from "react";

// สร้าง Context สำหรับจัดการข้อมูลผู้ใช้
const AuthContext = createContext();

// สร้าง Provider ที่ให้ข้อมูลแก่คอมโพเนนต์ต่างๆ
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // เก็บข้อมูลผู้ใช้

  // ฟังก์ชันเข้าสู่ระบบ (ตัวอย่าง)
  const login = (userData) => {
    setUser(userData); // อัปเดตข้อมูลผู้ใช้
  };

  // ฟังก์ชันออกจากระบบ
  const logout = () => {
    setUser(null); // ล้างข้อมูลผู้ใช้
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// สร้าง Hook `useAuth()` เพื่อให้ดึงข้อมูลจาก Context ได้ง่ายขึ้น
export const useAuth = () => {
  return useContext(AuthContext);
};
