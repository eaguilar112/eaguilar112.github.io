'use client';
import AddStudentForm from "./components/addStudentForm";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DisplayStudentData from "./components/displayStudentData";
import studentInfoData from "./studentInfo.json";
import { useState } from "react";

export default function Home() {
  const [studentInfo, setStudentInfo] = useState(studentInfoData);

  const handleAddStudent = (newStudent) => {
    setStudentInfo([...studentInfo, newStudent]);
  };

  return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 font-geist-sans">
        <Navbar />
        <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-8">
          <AddStudentForm onAddStudent={handleAddStudent} />
          <div className="space-y-4">
            {studentInfo.map((student, index) => (
                <DisplayStudentData key={index} student={student} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
  );
}