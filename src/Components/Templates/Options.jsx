import React from "react";
import { useDispatch } from "react-redux";
import { addTemplate } from "../../Features/UserSlice";
const Options = () => {
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        console.log(e.target.value)
         dispatch(addTemplate(e.target.value));
    }
  return (
    <div>
      <select name="templates" id="templates" onChange={handleChange}>
        <option value="1">Template 1</option>
        <option value="2">Template 2</option>
        <option value="3">Template 3</option>
      </select>
    </div>
  );
};

export default Options;
