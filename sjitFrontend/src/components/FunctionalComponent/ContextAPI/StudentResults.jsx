import { useContext } from "react";
import { ResultPublish } from "./COE";

const StudentResults = () => {
  const result = useContext(ResultPublish);
  return (
    <div>
      <h1>Result</h1>
      <h2>GPA:{result.gpa}</h2>
      <h2>CGPA:{result.cgpa}</h2>
    </div>
  );
};
export default StudentResults;