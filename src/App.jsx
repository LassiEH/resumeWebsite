import React from "react";

const Header = () => {
  return (
    <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h1>Lassi Haarala</h1>
      <p>Software engineering student</p>
    </header>
  );
};

const About = () => {
  return (
    <section style={{ padding: "20px" }}>
      <h2>About</h2>
      <p>
        I'm a software engineering student who has gained software
        development skills through work experience, academic work and
        personal projects. I have tackled real world problems, collaborated
        on a professional software development team but also worked independently
      </p>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Python", level: "Advanced"},
    { name: "Javascript", level: "Intermediate"},
    { name: "Linux", level: "Advanced"},
    { name: "Version control", level: "Advanced"}
  ]
  return (
    <section style={{ padding: "20px"}}>
      <h2>Skills</h2>
      <ul style={{ listStyleType: "none", padding: 0}}>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: "10px"}}>
            <strong>{skill.name}</strong> - {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Experience = () => {
  const experienceData = [
    {
      title: "Intern - Software test engineer",
      company: "Airbus defence and space",
      period: "May 2024 – December 2024",
      description: [
        "Assisted in building the test automation system.",
        "Enhanced my skills in coding, git and using linux operating system.",
        "Learned about working in a software development team and modern ways of doing so"
      ],
    },
  ];

  return (
    <section style={{ padding: "20px"}}>
      <h2>Experience</h2>
      {experienceData.map((job, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{job.title} at {job.company}</h3>
          <p><em>{job.period}</em></p>
          <ul>
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default App;
