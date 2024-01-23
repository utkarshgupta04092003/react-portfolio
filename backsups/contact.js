
import React, { useState } from 'react';

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
    <div className="flex items-center justify-center h-screen p-5">
      <form className="w-96 bg-gray-900 rounded-lg p-6 space-y-4  shadow-lg shadow-white ">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md text-gray-900"
          value={name}
          onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md text-gray-900" 
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 p-2 w-full border rounded-md text-gray-900" rows="4"
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}></textarea>
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
  );
};

export default Contact;

