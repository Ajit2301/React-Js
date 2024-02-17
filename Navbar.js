import { NavLink } from "react-router-dom" 
export const Navbar= () =>{
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Skill'>Skills</NavLink>
            <NavLink to='/project'>Project</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            
        </nav>
    )
}