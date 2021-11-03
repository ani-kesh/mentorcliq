import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { form, h2, inputBx } from "./SignUp.module.css";
import { Departments } from "../../constants/department";
import { getCountries, getCities } from "../../data/countries.data";

export default function SignUpSecond({setPage}) {
  const [countriesData, setCountriesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [department, setDepartment] = useState(Departments[1].name);
  const [jobTitle, setJobTitle] = useState("");  
  const [country, setCountry] = useState(countriesData[1]?.name);
  const [city, setCity] = useState(citiesData[1]?.name);



  useEffect(() => {
    getCountries().then((res) => {
      const countries = res.map(({ name, ccn3 }) => {
        let { common } = name;
        return { name: common, id: ccn3 };
      });
      setCountry(countriesData[1]?.name);
      setCountriesData(countries);
    });

  }, []);

  useEffect(() => {
    getCities().then(({ data }) => {
      const cities = data.map(({ city }) => {
        return { name: city, id: nanoid() };
      });
      setCity(citiesData[1]?.name);
      setCitiesData(cities);
    });
  }, []);

  const handleNext = () => {
    console.log(department,jobTitle,country,city)
    setPage(3);
  };

  const handleJobTitle = (ev) => {
    setJobTitle(ev.target.value);
  };

  return (
    <>
      <div className={form}>
        <h2 className={h2}>Registration </h2>
        <div className={inputBx}>
          <Dropdown options={Departments} selected={Departments[1].name} onSelect={setDepartment}/>
        </div>
        <div className={`${inputBx}`}>
          <Input type="text" label="Department" />
        </div>
        <div className={`${inputBx}`}>
          <Input type="text" label="Job Title" onChange={handleJobTitle} />
        </div>
        <div className={inputBx}>
          <Dropdown options={countriesData} selected={countriesData[1]?.name} onSelect={setCountry}/>
        </div>
        <div className={`${inputBx}`}>
          <Input type="text" label="Country" />
        </div>
        <div className={inputBx}>
          <Dropdown options={citiesData} selected={citiesData[1]?.name} onSelect={setCity}/>
        </div>
        <div className={`${inputBx}`}>
          <Input type="text" label="City" />
        </div>
        <div className={inputBx}>
          <Button label="Next >>" onClick={handleNext} />
        </div>
      </div>
    </>
  );
}
