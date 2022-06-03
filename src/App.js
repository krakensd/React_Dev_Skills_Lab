import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import './style.css'
import { useState } from 'react'
function App() {

  const [skills, setSkills] = useState(
    [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 3 },
      { name: "JS", level: 3 },
      { name: "Python", level: 3 },
      { name: "Django", level: 3 },
      { name: "PosgreSQL", level: 3 },
      { name: "AWS S3", level: 2 },
      { name: "MongodB", level: 3 },
      { name: "Azure", level: 2 },
      { name: "Bootstrap", level: 1 },
      { name: "React", level: 3 },
      { name: "Express", level: 2 },
    ]
  )

  const addSkill = (skill) => {
    setSkills([...skills, skill]);
  }

  return (
    <div className="App teal-text padding-0">
      <h1>My Dev Skills List</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}

export default App;
