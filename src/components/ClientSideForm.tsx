'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

interface ClientSideFormProps {
  newsletterheading: string;
}

const ClientSideForm: React.FC<ClientSideFormProps> = ({ newsletterheading }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch('https://hook.us1.make.com/qmh2vrkh2ux01nfntm1oi6zlel5ir79g', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert('Thanks for subscribing!');
    } else {
      console.error('Failed to subscribe:', await response.json());
    }
  };

  return (
    <div className='text-center lg:m-7 mt-10 w-80 p-3'>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-slate-100 font-light text-sm leading-6">{newsletterheading}</label>
          <div className="mt-2 flex-col flex lg:flex md:flex-row">
            <input id="email" name="email" type="email" placeholder='Email address' autoComplete="email" required className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2" {...register('email')} />
            <button type="submit" className='ml-0 bg-slate-950 sm:w-auto border-slate-100 rounded-none mt-2 md:mt-0 p-2 border-2 text-white'>Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientSideForm;
