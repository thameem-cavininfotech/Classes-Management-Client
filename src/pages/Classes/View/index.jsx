import React, { useEffect } from "react";
import { GetClassById } from "../../../CRUD/class";
import { classData } from "../../../features/classSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
function View() {
  const data = useSelector((state) => state.class.classData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classId } = useParams();
  useEffect(() => {
    if (classId) {
      GetClassById(classId).then((res) => {
        dispatch(classData(res.data));
      });
    }
  }, [classId]);

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <div>
        <p>
          <b>School Name</b> : {data?.schoolName}
        </p>
        <p>
          <b>Class Name</b> : {data?.className}
        </p>
        <p>
          <b>Class Teacher Name</b> : {data?.classTeacherName}
        </p>
        <p>
          <b>Class Strength</b> : {data?.classStrength}
        </p>
        <p>
          <b>Total Class</b> : {data?.totalClasses}
        </p>
        <p>
          <b>Class ID</b> : {data?.classId}
        </p>
      </div>
    </div>
  );
}

export default View;
