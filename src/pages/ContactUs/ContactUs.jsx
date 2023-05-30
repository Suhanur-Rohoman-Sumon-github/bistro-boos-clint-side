import React from 'react';
import coverimg from '../../assets/contact/banner.jpg'
import Cover from '../shered/cover/Cover';
import TextHeader from '../../componnents/textHeader/TextHeaders';
import { FaPhoneAlt, FaLocationArrow, FaStopwatch } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div >
            <section>
                <Cover img={coverimg} title='CONTACT US' discription='Would you like to try a dish?'></Cover>
            </section>
            <section className='w-9/12 mx-auto'>
                <TextHeader header='OUR LOCATION' subHeader='---Visit Us---'></TextHeader>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='bg-slate-300 font-bold pb-4'>
                        <div className='py-2 bg-yellow-300  '><FaPhoneAlt className='w-full h-9 text-white ' /></div>
                        <div className='py-4 text-center'>
                            <h1>PHONE</h1>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className='bg-slate-300 font-bold pb-4'>
                        <div className='py-2 bg-yellow-300  '><FaLocationArrow className='w-full h-9 text-white ' /></div>
                        <div className='py-4 text-center'>
                            <h1>ADDRESS</h1>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className='bg-slate-300 font-bold '>
                        <div className='py-2 bg-yellow-300  '><FaStopwatch className='w-full h-9 text-white ' /></div>
                        <div className='py-4 text-center'>
                            <h1>WORKING HOURS</h1>
                            <p>Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                </div>
            </section>
            <section>
            <TextHeader header='CONTACT FORM' subHeader='---Send Us a Message---'></TextHeader>
            <div className='bg-slate-400 py-36 px-4'>
                <div className=' flex '>
                <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mr-3" />
                <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mr-3" />
                </div>
                <label >phone</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mr-3" />
                <textarea className="textarea textarea-warning mt-4 w-full h-64" placeholder="Bio"></textarea>
                <button className='btn btn-warning'>send</button>
            </div>
            </section>
        </div>
    );
};

export default ContactUs;