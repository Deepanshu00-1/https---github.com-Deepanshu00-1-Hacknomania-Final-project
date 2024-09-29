import React from 'react'
import './style.css';
export default function Contact() {
    return (
        <div>
            <div className='divmain1'>
                <div className='container contact1'>
                    <h1 className="textc1">Contact us</h1>
                    <p className='textc12'>Any Questions or remarks? Just write us a message</p>
                    <h1 className='textc2'>Get In Touch</h1>
                    <br />
                    <div className='grid1'>
                        <div>
                            <form action="">
                                <input className='form1' type="text" name="" id="" placeholder='Name' required />
                                <input className='form2' type="email" name="" id="" placeholder='Email' required />

                                <br />
                                <input className='form3' type="text" name="" id="" placeholder='Phone' required />
                                <input className='form4' type="text" name="" id="" placeholder='Subject' required />
                                <br />
                                <textarea className='msg' name="" id="" placeholder='Message' required></textarea>
                                <br />
                                <input type="submit" className='btn1' value="Submit" />

                            </form>
                        </div>
                        <div className="cd">
                            <br />
                           <h3 className='cdtext1'>Contact <br /> Information </h3>
                           <br />
                            <p className='cdtext1'>+91 9191919191 <br /> teamapex001@gmail.com <br /> Ghaziabad Uttar Pradesh,
                            <br /> 201301</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
