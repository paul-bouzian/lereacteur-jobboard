import "./Job.css";

/* eslint-disable react/prop-types */
const Job = (props) => {
  return (
    <div className={`job ${props.className}`}>
      <h2>{props.title}</h2>
      <div className="job-footer">
        <span>{props.contractType} -</span>
        <span> {props.country} -</span>
        <span> {props.city}</span>
      </div>
    </div>
  );
};

export default Job;
