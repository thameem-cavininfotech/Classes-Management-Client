import React, { useState } from "react";
import "./Create.css";
import { createClass } from "../../../CRUD/class";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { classCreateData } from "../../../features/classSlice";
function Create() {
  const [formData, setFormData] = useState({
    schoolName: "",
    className: "",
    classTeacherName: "",
    classStrength: "",
    classId: "",
    totalClasses: "",
  });
  const [formError, setFormError] = useState({
    schoolName: "",
    className: "",
    classTeacherName: "",
    classStrength: "",
    classId: "",
    totalClasses: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
    setFormError({
      ...formError,
      [name]: "",
    });
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.schoolName) errors.schoolName = "School Name is required";
    if (!formData.className) errors.className = "Class Name is required";
    if (!formData.classTeacherName)
      errors.classTeacherName = "Class Teacher Name is required";
    if (!formData.classStrength)
      errors.classStrength = "Class Strength Name is required";
    if (!formData.classId) errors.classId = "Class ID is required";
    if (!formData.totalClasses) errors.totalClasses = "Total Classes is required";
    console.log("errors", errors);
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("formData", formData);
      createClass(formData)
        .then((res) => { 
          dispatch(classCreateData(res.data));
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="create-form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          onChange={handleChange}
          placeholder="School Name"
          value={formData.schoolName}
          name="schoolName"
        />
        {formError.schoolName && (
          <p className="error-text">{formError.schoolName}</p>
        )}
        <input
          type="text"
          onChange={handleChange}
          placeholder="Class Name"
          value={formData.className}
          name="className"
        />
        {formError.className && (
          <p className="error-text">{formError.className}</p>
        )}
        <input
          type="text"
          onChange={handleChange}
          placeholder="Class Teacher Name"
          value={formData.classTeacherName}
          name="classTeacherName"
        />
        {formError.classTeacherName && (
          <p className="error-text">{formError.classTeacherName}</p>
        )}
        <input
          type="number"
          onChange={handleChange}
          placeholder="Class Strength"
          value={formData.classStrength}
          name="classStrength"
        />
        {formError.classStrength && (
          <p className="error-text">{formError.classStrength}</p>
        )}
        <input
          type="number"
          onChange={handleChange}
          placeholder="Class ID"
          value={formData.classId}
          name="classId"
        />
        {formError.classId && <p className="error-text">{formError.classId}</p>}
        <input
          type="number"
          onChange={handleChange}
          placeholder="Total Classes"
          value={formData.totalClasses}
          name="totalClasses"
        />
        {formError.totalClasses && (
          <p className="error-text">{formError.totalClasses}</p>
        )}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
