import React from "react";
import SkillListItem from './SkillListItem';
import './SkillList.css'

function SkillList({skills}){
    return(
    <ul className="SkillList">
        {skills.map((skill, index)=>(
            <SkillListItem skill={skill.name} level={skill.level} key={index}/>
        ))}
    </ul>
    );
}

export default SkillList