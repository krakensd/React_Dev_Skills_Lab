import React from "react";
import './SkillListItem.css'

function SkillListItem({skill, level}){
    return(
        <li className="SkillListItem">{skill}
            <div className="level">SKILL {level}</div>
        </li>
    )
}

export default SkillListItem