import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';
import logo from '../images/Logo2__1_-removebg-preview.png'
export default function Navbar1() {
  return (
    <div>
        <nav >
            <div className='navdiv'>
             <img src={logo} alt="" className='logo' />
            </div>
            <div className="nav" style={{display:'flex', gap:'2vw'}}>
              <h2>
              <NavLink to ="/" exact activeclassname="active">
              Home
              </NavLink>
              </h2>
              <h2>
              <NavLink to ="/healthSurvey"  activeclassname="active">
              Health Survey
              </NavLink>
              </h2>
              <h2>
              <NavLink to ="/mealSection"  activeclassname="active">
              Meals
              </NavLink>
              </h2>
              <button>
                <NavLink to="/login" activeclassname="active">
                  Join us
                </NavLink>
              </button>
              {/* <a href="https://cunning-panda-qe508k-dev-ed.trailblaze.my.site.com/profile6/s/"></a> */}
            </div>
        </nav>
    </div>
  )
}
