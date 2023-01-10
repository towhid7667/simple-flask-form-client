import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import styles from "./../../styles/FirstForms.module.css";
import Buttongroup from "../Button Group/Buttongroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const FirstForms = () => {
  const [code, setCode] = React.useState(+880);
  const [codeList, setCodeList] = React.useState([]);
  const [facilityList, setFacilityList] = React.useState([]);
  const [components, setComponents] = useState([]);
  const { register, handleSubmit, reset } = useForm();




  const addElement = event =>{
    event.preventDefault();
      const newElement=[...components,[]];
      setComponents(newElement);

  }

  const deleteElement =(i)=>{
    event.preventDefault()
    const deletemap=[...components]
    deletemap.splice(i,1)
    setComponents(deletemap)
}

  
// console.log(components)

  const handleChange = (event) => {
    setCode(event.target.value);
  };


  useEffect(()=>{
    axios.get("http://127.0.0.1:5000/codes")
    .then(res => setCodeList(res.data.code)) 


    axios.get("http://127.0.0.1:5000/faclities")
    .then(res => setFacilityList(res.data.facilities)) 

  }, [])




 

  // names.map(name => console.log(name))

  
    

  // // const AddingInputFeild = (event) => {
  // //   event.preventDefault();
  // //   setInputList(inputList.concat(<Input key={inputList.length} />));
  // // };
  // const handleDeleteFacilities = (id) => {
  //   // console.log(id)
  //   event.preventDefault();

  //   const newElement = [...components]
  //   newElement.splice(id,1)

  //   // // 
  //   // // console.log(element.key)
  //   setComponents(newElement);
  // };
  // };

 const  component = (i) => {
  console.log(i)
    return(
<div className={styles.facilities}>
        <div className={styles.customSelect}>
       <select  {...register(`facility[${i}]`)} defaultValue className={styles.facilityForm}>
       <option  hidden selected></option>
        {facilityList.map((facility, i) => <option value={facility.facilies}  key={i}>{facility.facilities}</option>)}
       </select>
       </div>
        <button
          style={{
            background: "none",
            border: 0,
            width: "20px",
            fontSize: "35px",
          }}
          onClick={() => deleteElement(i)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>

    )
  }
  const handleForm = (data) => {
    const Info = {
      code: data.code,
      phone: data.phone,
      // branch: data.branch,
      // name : data.name,
      // assignto : data.assignto,
      checkbox : data.checkbox,
      charge: data.charge,
      // area: data.charge,
      facility: [data.facility],
    };

    fetch("http://127.0.0.1:5000/personInfo", {
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Info)
    })
    console.log(Info);
    // reset(data)
  };

  return (
    <form  onSubmit={handleSubmit(handleForm)} className={styles.formbBody}>
      <div className={styles.FirstFroms}>
        <FormControl className={styles.code}>
          <InputLabel className={styles.codeLabel} shrink= {true}>
            Country Code <span className={styles.star}>*</span>
          </InputLabel>
          {/* <label>Country Code <span className={styles.star}>*</span></label> */}
          <Select {...register("code", { required: true })} value={code} onChange={handleChange}>
            {codeList.map(code => <MenuItem key={code.id} value={code.code}>{code.code}</MenuItem>)}
            
          </Select>
        </FormControl>
        <div>
          <InputLabel htmlFor="name" shrink= {true}>
            Phone<span className={styles.star}>*</span>
          </InputLabel>
          <TextField type='number'  {...register("phone", { required: true })} />
        </div>
        <div>
          <div className={styles.name}>
            <div className={styles.branch}>
              <InputLabel htmlFor="name" shrink= {true} disabled>
                Owner/Organization
              </InputLabel>
              <FormControlLabel
                className={styles.checkbox}
                {...register("checkbox")}
                control={<Checkbox />}
                label="Branch"
              />
            </div>

            <TextField disabled />
          </div>
        </div>
      </div>
      <div>
        <InputLabel htmlFor="name" shrink= {true} disabled>
          Assign To
        </InputLabel>
        <TextField disabled fullWidth />
      </div>
      <br />
      <hr />
      <div>
        <Buttongroup></Buttongroup>
      </div>
      <div className={styles.Services}>
        <div>
          <InputLabel htmlFor="name" shrink= {true}>
            Service Charge
          </InputLabel>
          <TextField type='number' {...register("charge")}/>
        </div>
        <div>
          <InputLabel htmlFor="name" shrink= {true} disabled>
            Parking Area
          </InputLabel>
          <TextField disabled />
        </div>
      </div>
      <br />
      <h1 className={styles.myh1}>Facility</h1>
      <hr />
      <div className={styles.comp}>

      <div >{components.map((_, i) => component(i))}</div>
      </div>
      
      <button
        // onClick={AddingInputFeild}
        onClick={addElement}
        style={{
          background: "none",
          border: 0,
          color: "red",
          fontSize: "15px",
          marginTop: "50px",
        }}
        tex
      >
        +Add Facility
      </button>
      <br />
      {/* <button className={`${(components.length === 2 )? styles.k2 : styles.k}`}>K</button> */}
      <input className={styles.submit} type="submit" value="Submit" />
    </form>
  );
};

export default FirstForms;
