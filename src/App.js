import './App.css';
import NewSkillForm from './NewSkillForm';
import SkillList from './SkillList';

function App() {
  const skills = [
    {name: "CSS", level: 5},
    {name: "HTML", level: 4},
    {name: "JS", level: 4},
    {name: "Python", level: 4},
    {name: "Django", level: 4},
  ];
  return (
    <div className="App">
      <h1>My Dev Skills List</h1>
      <SkillList skills={skills}/>
      <hr></hr>
      <NewSkillForm/>
    </div>
  );
}

export default App;
