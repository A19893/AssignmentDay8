import React from 'react';
import {  Modal } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Template2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate();
  const {state}=useLocation();
  console.log(state);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/profile");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/profile");
  };
  useEffect(()=>{
    showModal();
  },[])
  return (
    <div>
      <Modal title="Template 2" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h1>Introduction</h1>
      <p>{state.CV?.intro}</p>
      <h1>Skills</h1>
        <ul>
        {
        state.CV?.skills.map((item)=>{
          return(
            <li>{item}</li>
          )
        })
        }
       </ul>
      <h1>Education</h1>
      <p>{state.CV?.university} Cgpa-{state.CV?.cgpa}</p>
      <p>{state.CV?.school} {state.CV?.schoolMarks}</p>
      <h1>Info:</h1>
       <p>Name:{state.CV?.name}</p>
      <p>Email:{state.CV?.email}</p>
      <p>Phone:+{state.CV?.prefix} {state.CV?.phone}</p>
      <h1>Projects</h1>
        <p>{state.CV?.project1}</p>
        <p>{state.CV?.project2}</p>
      <h1>Webiste</h1>
      <p>{state.CV?.website}</p>
      </Modal>
    </div>
  );
}

export default Template2;
