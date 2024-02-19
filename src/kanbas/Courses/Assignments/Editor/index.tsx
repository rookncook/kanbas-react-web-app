import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaBook } from "react-icons/fa";
import "./styles.css"


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="container1">
        <div className="icons-container">
        <FaCheckCircle className="icon green-tick"/>
        <span className="icon-text"> Published</span>
          <FaBook className="icon book-logo" />
        </div>
      </div>
      <hr />
      <h4>Assignment Name</h4>
      <input value={assignment?.title} className="form-control mb-2" />
      <div className="btn_container">
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
      </div>
    </div>
  );
}
export default AssignmentEditor;
