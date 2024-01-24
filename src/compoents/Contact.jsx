
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactDetails } from '../utils/Details';
import { socialMediaUrl } from '../utils/Details';
const Contact = () => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');


  const handleFormSubmit = () => {

    const body = encodeURIComponent(msg);
    const email = 'utkarshgupta04092003@gmail.com';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (

    <div className='w-4/5 mx-auto'>
      <h2 className='text-[1.5rem] md:text-[3rem] my-3 md:mt-10 fond-bold'>Contact me</h2>

      <div className=" flex flex-col md:flex-row items-center justify-around">

        <div className='w-full '>

          <form className="w-full mx-auto md:w-2/3 bg-gray-900 rounded-lg p-6 space-y-4  shadow-lg shadow-white border border-white">
            {/* <h2 className="text-2xl font-bold">Contact Us</h2> */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md text-gray-900"
              placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md text-gray-900"
              placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 p-2 w-full border rounded-md text-gray-900" rows="4"
                            placeholder='Type your message'

                value={msg}
                onChange={(e) => setMsg(e.target.value)}></textarea>
            </div>
            <button
              type="button"
              className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full "
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full my-10">


          <div className="mx-auto shadow-lg shadow-white rounded-3xl w-full md:w-2/3">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 px-3 rounded-md shadow-md  border border-white">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Utkarsh Gupta</h3>
                <p>Ayodhya, Uttar Pradesh</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className='word-break'><Link to={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link></p>
              </div>
              {/* <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>{contactDetails.phone}</p>
              </div> */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                <p>
                  <a href={socialMediaUrl.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                    LinkedIn
                  </a>
                  <a href={socialMediaUrl.twitter} rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                    Twitter
                  </a>
                  <a href={socialMediaUrl.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Contact;

