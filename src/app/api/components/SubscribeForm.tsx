
import React from 'react';

async function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.email.value;

  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (response.ok) {
    alert('Thanks for subscribing!');
  } else {
    console.error('Failed to subscribe:', await response.json());
  }
}

export default function SubscribeForm({ newsletterheading }) {
  return (
    <div className='text-center lg:m-7 mt-10 w-80 p-3'>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-slate-100 font-light text-sm leading-6">{newsletterheading}</label>
          <div className="mt-2 flex-col flex lg:flex md:flex-row">
            <input id="email" name="email" type="email" placeholder='Email address' autoComplete="email" required className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2" />
            <button className='ml-0 bg-slate-950 sm:w-auto border-slate-100 rounded-none mt-2 md:mt-0 p-2 border-2 text-white'>Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
}