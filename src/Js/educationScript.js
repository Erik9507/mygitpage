import Education from "../Json/Education.json";
import Courses from "../Json/courses.json";

function Work() {
  return (
      <div className="EDUjson">
        {Education.map((Edu) => {
          return (
            <>
              <p>School: {Edu.School}</p>
              <p>Program: {Edu.program}</p>
              <p>Length: {Edu.length}</p>
              <br></br>
            </>
          );
        })}
        <h2>Courses in the program</h2>
        {Courses.map((Course) => {
          return (
            <>
              <p>{Course.courseName} -- {Course.points} points</p>
            </>
          );
        })}
      </div>
  );
}
export default Work;
