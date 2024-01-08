import { createContext, useState, useEffect } from "react";
import Data from "../../src/data.json";
import { toast } from "react-toastify";
export const TracademyContext = createContext();

export default function TracademyProvider({ children }) {
  // using local storage

  const [students, setStudents] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(Data.students[0] || null);
  const [teachers, setTeachers] = useState([]);
  const [teachersInfo, setTeachersInfo] = useState(Data.teachers[8] || null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [nextofkin, setNextOfkin] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contact, setContact] = useState("");
  const [year, setYear] = useState("");
  const [hostel, setHostel] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [department, setDepartment] = useState("");
  const [club, setClub] = useState("");
  const [subjectOffered, setSubjectOffered] = useState("");
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState(() => {
    const min = 532984;
    const max = 533000;
    const array = Math.floor(Math.random() * (max - min + 1));
    return array;
  });
  const [showAdd, setShowAdd] = useState(false);
  // const [addStudent, setAddStudent] = useState([]);
  const [avatar, setAvatar] = useState(null);

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
    setTeachersInfo(profile);
  };

  const handleSelectedImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddStudent = (e) => {
    // console.log("handleAddStudent called");

    e.preventDefault();
    if (
      !name ||
      !email ||
      !studentClass ||
      !address ||
      !contact ||
      !mobile ||
      !gender ||
      !dateofbirth ||
      !club ||
      !id ||
      !session ||
      !term ||
      !subjectOffered ||
      !hostel ||
      !department ||
      !relationship ||
      !nextofkin ||
      !year ||
      !avatar
    ) {
      toast.error("Please fill out all the fields");
      return;
    }
    const newItems = {
      name: name,
      email: email,
      studentClass: studentClass,
      address: address,
      contact: contact,
      mobile: mobile,
      gender: gender,
      dateofbirth: dateofbirth,
      club: club,
      id: id,
      session: session,
      term: term,
      subjectOffered: subjectOffered,
      hostel: hostel,
      department: department,
      relationship: relationship,
      nextofkin: nextofkin,
      year: year,
      avatar: avatar,
    };
    try {
      setStudents((prevState) => [...prevState, newItems]);
      toast.success("You have successfully added a new student");
      // setShowAdd(false);
      setAddress("");
      setDepartment("");
      setClub("");
      setContact("");
      setDateofbirth("");
      setNextOfkin("");
      setMobile("");
      setRelationship("");
      setSession("");
      setEmail("");
      setGender("");
      setYear("");
      setAvatar(null);
      // setStudentId("");
      setName("");
      setHostel("");
      setStudentClass("");
      setTerm("");
      setSubjectOffered("");
    } catch (error) {
      // throw new Error("An Error occurred");
      toast.error("An Error occurred");
    } finally {
      setShowAdd(false);
    }

    // console.log(addStudent);
  };

  // useEffect(() => {
  //   console.log(students);
  //   setShowAdd(false);
  // }, [students]);
  // console.log(() => handleAddStudent());

  // console.log(Data.teachers[0]);
  // console.log(teachersInfo);

  const deleteStudent = (person) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this student"
    );
    if (confirm) {
      setStudents((prevState) => {
        const updatedStudent = prevState.filter(
          (student) => student.id !== person.id
        );
        setPersonalInfo(updatedStudent[0]);
        return updatedStudent;
      });
    }
  };

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
        name,
        setName,
        studentClass,
        setStudentClass,
        id,
        setId,
        email,
        setEmail,
        department,
        setDepartment,
        club,
        setClub,
        nextofkin,
        setNextOfkin,
        contact,
        setContact,
        hostel,
        setHostel,
        gender,
        setGender,
        mobile,
        setMobile,
        relationship,
        setRelationship,
        year,
        setYear,
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
        // addStudent,
        handleSelectedImage,
        avatar,
        setAvatar,
        showAdd,
        setShowAdd,
        deleteStudent,
      }}
    >
      {children}
    </TracademyContext.Provider>
  );
}
