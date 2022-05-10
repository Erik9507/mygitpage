import WorkJson from "../Json/work.json";

function Work() {
  return (
      <div className="workJson">
        {WorkJson.map((work) => {
          return (
            <>
              <h4>Company: {work.company}</h4>
              <p>Role: {work.roll}</p>
              <p>Description: {work.descrption}</p>
              <br></br>
            </>
          );
        })}
      </div>
  );
}
export default Work;
