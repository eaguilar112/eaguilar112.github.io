/* 
File: page.js
Collaborators: Kourosh, Karie Israeli, Erwin Aguilar, Lily Power
Date Created: 2025-02-24
Last Modified: 2025-02-24

Program Description:
This is a web application for New Generation High School that allows users to view the list of students and
add to it. Users will be presented with a form where they will be able to input a student's First Name,
Last Name, Date of Birth, and Grade. After each field is filled, the user will then be able to select
the Add Student button where the application receives the user inputs, organizes, then adds the student
to the student list. The application automatically displays the current list of students, including all
of the inputted student information.
*/

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
      <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-center gap-8 font-geist-sans">
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