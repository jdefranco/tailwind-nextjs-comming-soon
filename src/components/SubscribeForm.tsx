// add the use client directive for UI event handlers
"use client";

import React from 'react';

function SubscribeForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const email = (event.target as any).email.value;

    const response = await fetch('https://hook.us1.make.com/qmh2vrkh2ux01nfntm1oi6zlel5ir79g', {
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


  return (
    <div className="form-container">
    <p>Subscribe to receive updates and latest news from us:</p>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <button type="submit">Subscribe</button>
    </form>
</div>
  );
}

export default SubscribeForm;
