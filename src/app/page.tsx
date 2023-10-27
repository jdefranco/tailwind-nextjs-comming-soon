import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo';
import data from '../../data/data';
import SubscribeForm from '../components/SubscribeForm';

const inter = Inter({ subsets: ['latin'] })

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const email = (event.currentTarget as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;

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


export default function Home() {
  const currentYear = new Date().getFullYear();
  const {
    sitename,
    sitetagline,
    description,
    copyrightText,
    newsletterheading,
    sitelogo,
    socialIcons,
    socialIconsHeading,
    title,
  } = data;

  return (
    <>
      <main
        className="flex min-h-screen bg-slate-950 flex-col items-center justify-between p-5 lg:p-12"
        style={{
          backgroundImage: "url('https://4567.llc/wp-content/uploads/2023/10/ben-56-scaled.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
              <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">

          <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
              href="/"
              rel="noopener noreferrer"
            >
              <div className='flex flex-col text-center'>
                
              </div>
            </a>
          </div>
        </div>

        <div className="relative flex flex-col  place-items-center ">
<Image src="https://4567.llc/wp-content/uploads/2023/10/hudson-heights-logo-1-1.png" alt="Logo" width={500} height={500} />          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
  <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold '>
    <span className='text-gray-800'>{title}</span>
  </h2>
  <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-black-500' dangerouslySetInnerHTML={{
    __html: description
  }}>
  </p>
</div>

        </div>

          <SubscribeForm newsletterheading={newsletterheading} />


        <footer className='text-slate-500 text-center'>
          <div className='my-4 text-center' >
            <ul className='flex flex-wrap lg:flex justify-center '>
              <li className='px-2'> {socialIconsHeading} </li>
              {socialIcons.map((social, index) =>
              (
                <li key={index} className='px-2 capitalize'>
                  <a target='_blank' href={social.link}> {social.icon}  </a>
                </li>
              )
              )}
            </ul>
          </div>
          <div className=''>
            <p className='' dangerouslySetInnerHTML={{
              __html: copyrightText
            }}>
            </p>

          </div>
        </footer>

      </main>
    </>
  )
}
