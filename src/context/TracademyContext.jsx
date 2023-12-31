import { createContext, useState, useEffect } from "react";
import Data from "../../src/data.json";
export const TracademyContext = createContext();

export default function TracademyProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(Data.students[0] || null);
  const [teachers, setTeachers] = useState([]);
  const [teachersInfo, setTeachersInfo] = useState(Data.teachers[8] || null);
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [nextOfkin, setNextOfkin] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contact, setContact] = useState("");
  const [resumption, setResumption] = useState("");
  const [hostel, setHostel] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [arm, setArm] = useState("");
  const [club, setClub] = useState("");
  const [subjectOffered, setSubjectOffered] = useState("");
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [gender, setGender] = useState("");
  const [studentId, setStudentId] = useState(() => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  });
  const [showAdd, setShowAdd] = useState(false);
  const [addStudent, setAddStudent] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setStudents(Data.students);
    setTeachers(Data.teachers);
  }, []);

  const handleSelectedImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (student) => {
    setPersonalInfo(student);
  };

  const handleTeacher = (teacher) => {
    setTeachersInfo(teacher);
  };

  const handleTeacherProfile = (profile) => {
    setTeachersInfo(profile);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newItems = {
      studentName: studentName,
      email: email,
      studentClass: studentClass,
      address: address,
      contact: contact,
      number: number,
      gender: gender,
      dateofbirth: dateofbirth,
      club: club,
      studentId: studentId,
      session: session,
      term: term,
      subjectOffered: subjectOffered,
      hostel: hostel,
      arm: arm,
      relationship: relationship,
      nextOfkin: nextOfkin,
      resumption: resumption,
      selectedImage: selectedImage,
    };
    setAddStudent((prevState) => [...prevState, newItems]);
    setAddress("");
    setArm("");
    setClub("");
    setContact("");
    setDateofbirth("");
    setNextOfkin("");
    setNumber("");
    setRelationship("");
    setSession("");
    setEmail("");
    setGender("");
    setResumption("");
    setSelectedImage(null);
    // setStudentId("");
    setStudentName("");
    setHostel("");
    setStudentClass("");
    setTerm("");
    setSubjectOffered("");
  };
  console.log(addStudent);
  // console.log(() => handleAddStudent());

  // console.log(Data.teachers[0]);
  // console.log(teachersInfo);

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
        handleAddStudent,
        studentName,
        setStudentName,
        studentClass,
        setStudentClass,
        studentId,
        setStudentId,
        email,
        setEmail,
        arm,
        setArm,
        club,
        setClub,
        nextOfkin,
        setNextOfkin,
        contact,
        setContact,
        hostel,
        setHostel,
        gender,
        setGender,
        number,
        setNumber,
        relationship,
        setRelationship,
        resumption,
        setResumption,
        term,
        setTerm,
        session,
        setSession,
        subjectOffered,
        setSubjectOffered,
        address,
        setAddress,
        dateofbirth,
        setDateofbirth,
        addStudent,
        handleSelectedImage,
        selectedImage,
        showAdd,
        setShowAdd,
      }}
    >
      {children}
    </TracademyContext.Provider>
  );
}
