import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'iconoir-react';
import { Navbar } from '../navbar/Navbar';

export const ContactForm = () => {
  const { propertyId } = useParams();

  return (
    <div>
      <Navbar />
    <div className="max-w-md mx-auto flex flex-col space-y-4 border shadow-sm rounded-xl p-12 my-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact the agent</h2>
        <p className="text-gray-500 dark:text-gray-400">Enter your information below to get in touch with the agent.</p>
      </div>
      <form className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="property-id">Property ID</label>
          <input value={propertyId} id="property-id" readOnly className='p-2 border bg-gray-100 rounded-md focus:outline-none'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className='text-sm'>Name</label>
          <input id="name" placeholder="Enter your name" className='border p-4 focus:outline-none rounded-md' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contact-number" className='text-sm'>Contact number</label>
          <input id="contact-number" placeholder="Enter your number" className='border p-4 focus:outline-none rounded-md' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className='text-sm'>Email</label>
          <input id="email" placeholder="Enter your email" type="email" className='border p-4 focus:outline-none rounded-md' />
        </div>
        <button className='flex items-center gap-2 py-2 px-6 bg-rose-600 text-white rounded-md cursor-pointer' type="submit">
          <div className='font-semibold'>Submit details</div>
          <div className='p-2'>
            <ArrowRight />
          </div>
        </button>
      </form>
    </div>
    </div>
  );
};
