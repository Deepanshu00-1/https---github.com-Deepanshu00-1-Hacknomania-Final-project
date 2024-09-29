import React from 'react'
import './style.css';
import fr1 from '../images/shape1.jpg'
import c1 from '../images/clients.jpg'
import w1 from '../images/weight1.jpg';
import online from '../images/yoga2.jpg';
import group from '../images/Group1.jpg';
import diet1 from '../images/diet2.jpg'

export default function Program() {
    return (
        <div>
            <div className="divm12 divmainf">
                {/* Flex1 services and programs */}
                <div className="f1 container">
                    <div className='fd1'><img src={online} alt="" className='primg1' /></div>
                    <div className='fd2'><img src={diet1} alt=""  className='primg1'/></div>
                </div>
                <br />
                {/* flex2 services and programs */}
                <div className="f2 container">
                    <div className='fd3'><img src={group} alt="" className='primg1' /></div>
                    <div className='fd4'><img src={w1} alt="" className='primg1' /></div>
                </div>
                <br />
                <div className="rec container">
                    <img src={'https://parade.com/.image/t_share/MjA3Mzg0MzU4MDI0MTI3NTk4/diet-that-can-reduce-early-death-risk-according-to-new-research-june-2024.jpg'} alt="" className='rr11' />
                </div>
                {/* image shape1 */}
                <div className="r1 container">
                    <img src={fr1} alt="" className='frimg1' />
                </div>
                <br />
                <h1 className='textc11'>What Our Clients Say : </h1>
                <div className="flex1 container">
                
                    <div className='flex11'>
                        <br />
                        <img src={c1} alt="" className='imgc1' />
                        <br />
                        XYZ
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste delectus veniam quas maxime provident odit, similique. 
                    </div>
                    <div className='flex12'>
                        <br />
                        <img src={c1} alt="" className='imgc1' />
                        <br />
                        XYZ
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci dolor, libero a commodi rem itaque.

                    </div>
                    <div className='flex13'>
                        <br />
                        <img src={c1} alt="" className='imgc1' />
                        <br />
                        XYZ
                        <br /><br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quae nostrum commodi quod ipsa sit ex corporis.
                    </div>
                </div>
                <br /><br />
                {/* Why Fitzz? */}
                <div className="fit container">
                    <br />
                    <h1 className='fittext1'>Why Diet&Nutrition </h1>
                    <br />
                    <div className='fitflex'>
                        <div className="fitf1">
                            <ul>
                                <li>Wide Range of Workout Options</li>
                                <li>Expert Guidance and instructions</li>
                                <li>Cost Effective community and Support</li>
                            </ul>
                        </div>
                        <div className="fitf2">
                            <ul>
                                <li>Free Live Workouts Every Weeks</li>
                                <li>Personalization and progress Tracking</li>
                                <li>All Access to DNN Cookbook</li>
                            </ul>
                        </div>
                        <div className="fitf3">
                            <ul>
                                <li>Access to 100+ Home & Gym Workout Videos</li>
                                <li>Real Result</li>
                                <li>Positive Relationship With Food</li>
                            </ul>
                        </div>
                    
                    </div>
                </div><br /><br />
            </div>
        </div>
    )
}
