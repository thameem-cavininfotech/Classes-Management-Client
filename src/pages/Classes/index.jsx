import React, { Fragment, useEffect } from "react";
import { DeleteClass, GetAllClass } from "../../CRUD/class";
import { useDispatch, useSelector } from "react-redux";
import { classDeleteData, classesData } from "../../features/classSlice";
import "./Classes.css";
import { useNavigate } from "react-router-dom";
function Classes() {
  const data = useSelector((state) => state.class.classesData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    GetAllClass().then((res) => {
      dispatch(classesData(res.data));
    });
  }, []);
  const handleDelete = async (id) => {
    try {
      const data = await DeleteClass(id);
      if (data.status === 200) {
        dispatch(classDeleteData(id));
        alert("Delete successfully.");
      } else {
        alert("Couldn't delete class.");
      }
    } catch (error) {
      console.error("Failed to delete class:", error);
    }
  };

  return (
    <div>
      <h3>CLASS DETAILS</h3>
      <div>
        <button type="button" onClick={()=>navigate("/class/create")}>Create New Class</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>School Name</th>
            <th>Class Name</th>
            <th>Class Teacher Name</th>
            <th>Class Strength</th>
            <th>Total Classes</th>
            <th>Class ID</th>
            <th>Edit</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.classId}>
              <td>{item.schoolName}</td>
              <td>{item.className}</td>
              <td>{item.classTeacherName}</td>
              <td>{item.classStrength}</td>
              <td>{item.totalClasses}</td>
              <td>{item.classId}</td>
              <td>
                <button
                  type="button"
                  //  onClick={()=>navigate(`/class/${item.classId}`)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => navigate(`/class/${item.classId}`)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(item.classId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classes;
