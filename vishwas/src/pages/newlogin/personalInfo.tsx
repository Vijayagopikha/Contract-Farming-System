
import React, { useContext } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import FormControl from "./formControl";

const PersonalInfo = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
  } = useContext(GlobalNLContex);
 


  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Personal info
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h3>

        <div className="md:mt-7 mt-5 space-y-4">
          <FormControl
            label={"Name"}
            type={"text"}
            id={"name"}
            placeholder={"e.g. Stephen King"}
            onchange={setName('name')}
            value={name}
          />
          <FormControl
            label={"Email Address"}
            type={"email"}
            id={"email"}
            placeholder={"e.g. stephenking@lorem.com"}
            onchange={setEmail('email')}
            value={email}
          />
          <FormControl
            label={"Phone Number"}
            type={"text"}
            id={"number"}
            placeholder={"e.g. +1 234 567 890"}
            onchange={setNumber('number')}
            value={number}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
