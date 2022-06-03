import React from 'react';
import SkillListItem from './SkillListItem'

export default function SkillList({skills}) {
    const SkillListItems = skills.map((skill,idx) => <SkillListItem skill={skill} key={idx}/>);
    return (
        <ul className='padding-0'>
           {SkillListItems} 
        </ul>
    )
}