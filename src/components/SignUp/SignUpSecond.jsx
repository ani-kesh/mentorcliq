import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Departments } from "../../constants/department";
import { getCountries, getCities } from "../../data/countries.data";
import { isEmptyString } from "../../helpers/validation.helpers";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { form, h2, inputBx } from "./SignUp.module.css";

export default function SignUpSecond({ setPage, info, setInfo }) {
  const [countriesData, setCountriesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [department, setDepartment] = useState(Departments[1].name);
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [isValidJob, setIsValidJob] = useState(true);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = res.map(({ name, ccn3 }) => {
        let { common } = name;
        return { name: common, id: ccn3 };
      });

      countries.sort((a, b) => {
        return a.name.trim().toLowerCase() - b.name.trim().toLowerCase();
      });

      setCountriesData(countries);
      setCountry(countries[1]?.name);
    });
  }, []);

  useEffect(() => {
    getCities().then(({ data }) => {
      const cities = data.map(({ city }) => {
        return { name: city, id: nanoid() };
      });

      cities.sort((a, b) => {
        return a.name.trim().toUpperCase() - b.name.trim().toUpperCase();
      });

      setCitiesData(cities);
      setCity(cities[1]?.name);
    });
  }, []);

  const handleNext = () => {
    const isValidTitle = isEmptyString(jobTitle);
    if (isValidTitle) {
      setInfo({ ...info, department, jobTitle, country, city });
      setPage(3);
    }
    setIsValidJob(isValidTitle);
  };

  const handleJobTitle = (ev) => {
    setJobTitle(ev.target.value);
  };

  return (
    <>
      <div className={form}>
        <h2 className={h2}>Registration </h2>
        <div className={inputBx}>
          <Dropdown
            options={Departments}
            selected={Departments[1].name}
            onSelect={setDepartment}
            label="Department"
          />
        </div>
        <div className={`${inputBx}`}>
          <Input
            type="text"
            label="Job Title"
            onChange={handleJobTitle}
            isValid={isValidJob}
            message={"Please input correct job title"}
          />
        </div>
        <div className={inputBx}>
          <Dropdown
            options={countriesData}
            selected={country}
            onSelect={setCountry}
            label="Country"
          />
        </div>
        <div className={inputBx}>
          <Dropdown
            options={citiesData}
            selected={city}
            onSelect={setCity}
            label="City"
          />
        </div>
        <div className={inputBx}>
          <Button label="Next >>" onClick={handleNext} />
        </div>
      </div>
    </>
  );
}
