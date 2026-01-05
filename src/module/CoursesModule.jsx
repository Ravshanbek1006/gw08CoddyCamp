import React, { useEffect, useState } from "react";
import SectionTitle from "../components/text/SectionTitle";
import axiosInstance from "../servis/axiosInstance";
import { redirect } from "react-router-dom";

export default function Courses() {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const response = await axiosInstance.get("/teachers");
      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const newData = {
    name: "Bilol",
    avatar: "https://cdn-icons-png.flaticon.com/512/4042/4042356.png",
    work: "Frontend",
    discription: "O'zi yaxshi bola lekin kop uxlaydi",
    salary: 20,
  }

  const setApiTeachers = async () => {
    try {
      const response = await axiosInstance.post("/teachers",newData);
      console.log(response);
      fetchTeachers()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const onEdit = async (teacher) =>{
     try {
      const response = await axiosInstance.put(`/teachers/${teacher.id}`,newData);
      console.log(response);
      fetchTeachers()
    } catch (error) {
      console.log(error);
    }
    
  }

   const onDelete = async (teacher) =>{
     try {
      const response = await axiosInstance.delete(`/teachers/${teacher.id}`);
      console.log(response);
      fetchTeachers()
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="px-20 py-10">
      <p className="font-bold">Ready to learn?</p>
      <div className="flex justify-between">
        <SectionTitle title="Featured Courses" />
        <button className="border-2 border-orange-600 px-10 py-2">
          View all courses
        </button>
      </div>

      <div className="grid grid-cols-12 p-10 gap-8">
        {teachers.map((teacher) => (
          <div className="col-span-6 grid grid-cols-12  border border-red-500" key={teacher.id} >
            <div className="col-span-4">
              <img className="w-full h-full" src={teacher.avatar} alt="" />
            </div>
            <div className="col-span-8 p-8 flex flex-col justify-between rounded">
              <div>
                <button className="bg-fuchsia-500 text-sm text-white px-2 rounded">
                  {teacher.work}
                </button>
              </div>
              <h4 className="font-bold text-xl">{teacher.discription}</h4>
              <p>
                <span className="text-red-700">${teacher.salary}</span> | by{" "}
                {teacher.name}
              </p>
              <div className="flex gap-4">
                <button onClick={()=> onEdit(teacher)} className="bg-yellow-700 text-white px-4 py-1">Edit</button>
                <button onClick={()=> onDelete(teacher)} className="bg-red-700 text-white px-4 py-1">Delete</button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setApiTeachers()} >Yuborish</button>
    </div>
  );
}
