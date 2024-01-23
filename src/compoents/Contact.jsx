
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    <div className='w-4/5 mx-auto brdr-red'>
    <h2 className='text-[1.5rem] md:text-[3rem] my-3 md:my-10 fond-bold'>Contact me</h2>

    <div className=" flex flex-col md:flex-row items-center justify-around mt-10">

      <div className='w-full '>

        <form className="w-full mx-auto md:w-2/3 bg-gray-900 rounded-lg p-6 space-y-4  shadow-lg shadow-white border border-white">
          {/* <h2 className="text-2xl font-bold">Contact Us</h2> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md text-gray-900"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md text-gray-900"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 p-2 w-full border rounded-md text-gray-900" rows="4"
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
                <p className='word-break'><Link to={'mailto:utkarshgupta04092003@gmail.com'}>utkarshgupta04092003@gmail.com</Link></p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>+91 9999999999</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                <p>
                  <a href="https://www.linkedin.com/in/utkarshgupta04092003" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                    LinkedIn
                  </a>
                  <a href="#" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                    Twitter
                  </a>
                  <a href="https://www.instagram.com/utkarsh_official" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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



// <div className="w-full brdr-red h-screen mt-10">

// <section className="bg-gray-100 dark:bg-gray-800">
// <div className="container mx-auto">
//   <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-md shadow-md">
//     <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">Company Name</h3>
//       <p>123 Main Street, Cityville, Country</p>
//     </div>
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">Email</h3>
//       <p>info@example.com</p>
//     </div>
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">Phone</h3>
//       <p>+1 (123) 456-7890</p>
//     </div>
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">Social Media</h3>
//       <p>
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
//           Facebook
//         </a>
//         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
//           Twitter
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//           Instagram
//         </a>
//       </p>
//     </div>
//   </div>
// </div>
// </section>



// </div>

