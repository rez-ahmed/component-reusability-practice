"use client"

import "./App.css";
import CustomInput from "@/components/CustomInput";
import { AiOutlineMail, AiFillLock, AiOutlineUser } from "react-icons/ai";
import FormButton from "@/components/FormButton";
import { useState } from 'react'

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <CustomInput
            icon={<AiOutlineUser />}
            onChange={handleInputChange}
            value={formData.name}
            name="name"
            type={"text"}
            placeholder={"Enter your Name"}
          />
          <CustomInput
            icon={<AiOutlineUser />}
            onChange={handleInputChange}
            value={formData.businessName}
            name="businessName"
            type={"text"}
            placeholder={"Enter Business Name"}
          />
          <CustomInput
            icon={<AiOutlineMail />}
            onChange={handleInputChange}
            value={formData.email}
            name="email"
            type={"text"}
            placeholder={"Enter your Email"}
          />
          <CustomInput
            icon={<AiFillLock />}
            onChange={handleInputChange}
            value={formData.password}
            name="password"
            type={"password"}
            placeholder={"Enter your Password"}
          />
          <FormButton btnText={"Click to Proceed"} />
        </form>
      </main>
    </>
  );
}
