import React from 'react';

const Index = () => (
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div className="mx-auto max-w-md">
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>Hello guys, I am Barath.</p>
          <p className='font-semibold text-gray-900'> This website is currently revamped to run on the edge. 
            <br />No more WORDPRESS
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-fuchsia-100 stroke-fuchsia-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="ml-4">
                All articles will temporarily be linked as text only content
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-fuchsia-100 stroke-fuchsia-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="ml-4">
                Follow me on Youtube -
                <code className="text-sm font-bold text-gray-900"> <a href="https://www.youtube.com/channel/UCywpR6E1lpk66CHhGziz8Bg/subscribe"> @CZDe </a></code>
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-fuchsia-100 stroke-fuchsia-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="ml-4">Follow me on Instagram - 
              <code className="text-sm font-bold text-gray-900"> <a href="https://www.instagram.com/codermonk_"> @codermonk_ </a></code>
              </p>
            </li>
          </ul>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="ml-4">
            POSTS (Coming Soon)</p>
          </div>
        </div>
        <div className="pt-8 text-base font-semibold leading-7">
          <p className="text-gray-900">Have any suggestions for this website? Let me know through the above mentioned channels.</p>
        </div>
      </div>
    </div>
  </div>
</div>

);

export default Index;
