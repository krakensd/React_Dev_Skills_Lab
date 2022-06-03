import React from 'react';
import './NewSkillForm.css';
import { useState } from 'react';

 export default function NewSkillForm({addSkill}){

    const [newSkill, setNewSkill] = useState(
        {name:'', level:3}
    )

    const handleChange = (e) => {
        setNewSkill({...newSkill, [e.target.name]:e.target.value})
    }

    const handleAddSkill = (e) => {
        e.preventDefault();
        addSkill(newSkill);
        setNewSkill({name:'', level:3})
    }

    return(
        <form className='NewSkillForm' onSubmit={handleAddSkill}>
            <label htmlFor="skill">Skill</label>
            <input type="text" name="name" value={newSkill.name} onChange={handleChange}/>
            <label htmlFor="skillLevel">Level</label>
            <select id="skillLevel" name="level" value={newSkill.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit" >Add My Skill</button>
        </form>
    )
}