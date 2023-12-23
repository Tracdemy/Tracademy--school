import { createContext, useState, useEffect } from "react";
import Data from "../../src/data.json";
export const TracademyContext = createContext();

export default function TracademyProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(Data.students[0] || null);
  const [teachers, setTeachers] = useState([]);
  const [teachersInfo, setTeachersInfo] = useState(Data.teachers[8] || null);
  useEffect(() => {
    setStudents(Data.students);
    setTeachers(Data.teachers);
  }, []);

  const handleSubmit = (student) => {
    setPersonalInfo(student);
  };

  const handleTeacher = (teacher) => {
    setTeachersInfo(teacher);
  };

  const handleTeacherProfile = (profile) => {
    setTeachersInfo(profile)
  }

  // console.log(Data.teachers[0]);
  console.log(teachersInfo);

  return (
    <TracademyContext.Provider
      value={{
        students,
        handleSubmit,
        personalInfo,
        teachers,
        handleTeacher,
        teachersInfo,
        handleTeacherProfile,
      }}
    >
      {children}
    </TracademyContext.Provider>
  );
}
