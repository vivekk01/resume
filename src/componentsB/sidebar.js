import { NavLink,Outlet } from 'react-router-dom';
export default function Sidebar(){
    return(
        <>
            <div className="sidebar shadow">
           
        <NavLink to="personalInfo" onClick={()=>alert('You are at the Initial Page!')} className='side-links'>Personal Info</NavLink>
        <hr />
        <NavLink to="workExperience" className='side-links'>Work Experience</NavLink>
        <hr />
        <NavLink to="education" className='side-links'>Eduaction</NavLink>
        <hr />
        <NavLink to="mySkills" className='side-links'>My Skills</NavLink>
        <Outlet />
        
        </div>
        </>

    )
}
