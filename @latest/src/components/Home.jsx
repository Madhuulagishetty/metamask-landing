import React from "react";

function Home() {
  return (
    <div className="bg-[#fff3ec] min-h-screen flex flex-col  font-sans">
      <div className="w-[100%] mx-auto flex justify-center items-center mt-12">
        <nav className="fixed w-[95%] mx-auto bg-white/80 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-4 py-2 shadow-sm z-50 rounded-2xl">
          <div className="flex items-center ">
            {/* <h1 className="text-xl font-extrabold flex flex-col px-12 gap-0"><p>Meta</p><p>Mask</p></h1> */}
            <ul className="hidden md:flex space-x-8 text-gray-800 font-medium gap-4 ">
              <li className="hover:text-black cursor-pointer text-[12px] font-bold">Features</li>
              <li className="hover:text-black cursor-pointer text-[12px] font-bold">Developer</li>
              <li className="hover:text-black cursor-pointer text-[12px] font-bold">MetaMask USD</li>
            </ul>
          </div>
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
            VIEW METAMASK WEB
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <h1 className="text-[clamp(2rem,10vw,6rem)] font-extrabold text-purple-900 leading-[1.1] uppercase">
          Your Home <br /> in Web3
        </h1>
        <button className="mt-10 bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          VIEW METAMASK WEB
        </button>
      </main>

      {/* Footer Notification */}
      <div className="fixed bottom-5 left-5 bg-white border rounded-full shadow-md px-5 py-3 flex items-center space-x-3 text-sm">
        <span className="font-bold uppercase text-gray-800">Update</span>
        <span className="text-gray-700">
          Perps trading is here! Get started on …
        </span>
        <button className="text-gray-500 hover:text-gray-700">✕</button>
      </div>
    </div>
  );
}

export default Home;
