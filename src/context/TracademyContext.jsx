import { createContext, useState, useEffect } from "react";
import Data from "../../src/data.json";
export const TracademyContext = createContext();

export default function TracademyProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(null);
  useEffect(() => {
    setStudents(Data.students);
  }, []);

  const handleSubmit = (student) => {
    setPersonalInfo(student)
  };

  return (
    <TracademyContext.Provider
      value={{
        students,
        handleSubmit,
        personalInfo,
      }}
    >
      {children}
    </TracademyContext.Provider>
  );
}
