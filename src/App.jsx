import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Addstd from './pages/Addstd'
import Viewstd from './pages/Viewstd'
import Attandance from './pages/Attandance'
import StdAtt from './pages/StdAtt'

const App = () => {

  const [std,setStd]=useState({});
  const [students,setStudents]=useState([]);
  const navigator=useNavigate();

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem('Students') || '[]');
    setStudents(stored);
  },[])

  useEffect(()=>{
    if(students.length > 0){
      localStorage.setItem('Students',JSON.stringify(students));
    }
  },[students])

  const handelChange=(e)=>{
    const {name,value}=e.target;
    setStd({...std,[name]:value});
    console.log(std);    
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(std.id){
      let newList=students.map((s)=>{
        if(s.id == std.id ){
          return std;
        }
        return s;
      })
      setStudents(newList);
      navigator('/viewstd');
    }else{
      setStudents([...students,{...std,id:Date.now(),attandance:[]}]);
    }
    setStd({});
    navigator('/viewstd');
  }
  const handelDelete=(id)=>{
    const newList=students.filter((std)=> std.id != id);
    setStudents(newList);
  }
  const handelEdit=(id)=>{
    let data=students.find((std)=> std.id == id);
    setStd(data);
    navigator('/addstd');
  }
  console.log(students);    

  return (
    <>
      <Routes>
        <Route path="/" element={<Home students={students} />} />
        <Route path="/addstd" element={<Addstd std={std} handelChange={handelChange} handelSubmit={handelSubmit} />} />
        <Route path="/viewstd" element={<Viewstd students={students} handelDelete={handelDelete} handelEdit={handelEdit} />} />
        <Route path='/setattandance' element={<Attandance students={students} setStudents={setStudents} />} />
        <Route path='/attandance/:id' element={<StdAtt students={students}/>} />
      </Routes>
    </>
  )
}

export default App
