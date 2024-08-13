import React from "react";

function ProjectItem({ name, about, technologies }) {
  const displayTechnologies = technologies.map((technology, index) => {
    return(<span key={index}>{technology}</span>)
  })
  // console.log(key)
  console.log(name)
  console.log(about)
  console.log(technologies)
  return (
    <div className="project-item">
      <h1></h1>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {displayTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
