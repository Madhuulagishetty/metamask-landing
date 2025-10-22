import  { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { Send, ArrowLeftRight, Repeat, Link, Eye, Menu } from "lucide-react";
import WalletDashboard from "./WalletDashboard";

 const Home=() =>{

  const [showNavbar, setShowNavbar] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > windowHeight / 4) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
    <div className="bg-[#fff3ec] min-h-screen font-sans">
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[97%] bg-white/80  border border-gray-100 flex justify-between items-center px-6 z-50 rounded-2xl transition-all duration-500 ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-20">
          <div className="">
            <svg className="h-20 w-20" viewBox="0 0 128 64" fill="currentColor">
              <path
                fill="currentColor"
                d="M71.554 48.607v13.81h-7.072v-9.568l-8.059.945c-1.77.205-2.548.79-2.548 1.864 0 1.575 1.478 2.239 4.648 2.239 1.932 0 4.073-.29 5.963-.79l-3.66 5.225c-1.479.332-2.92.496-4.44.496-6.414 0-10.074-2.57-10.074-7.132 0-4.023 2.877-6.136 9.416-6.884l8.638-1.012c-.467-2.532-2.362-3.633-6.13-3.633-3.537 0-7.443.912-10.937 2.613l1.111-6.18c3.248-1.369 6.95-2.074 10.69-2.074 8.226 0 12.461 3.444 12.461 10.075l-.008.005ZM7.938 31.315.208 62.416h7.73l3.836-15.628 6.65 8.039h8.06l6.65-8.039 3.836 15.628h7.73l-7.73-31.105-14.518 17.388L7.934 31.311zM36.97.21 22.452 17.598 7.938.21.208 31.315h7.73l3.836-15.628 6.65 8.039h8.06l6.65-8.039 3.836 15.628h7.73zm53.17 48.107-6.25-.912c-1.562-.247-2.178-.747-2.178-1.617 0-1.41 1.52-2.032 4.647-2.032 3.62 0 6.868.747 10.283 2.364l-.862-6.094c-2.757-.995-5.922-1.491-9.212-1.491-7.688 0-11.886 2.696-11.886 7.547 0 3.776 2.303 5.889 7.196 6.636l6.335.954c1.603.248 2.261.87 2.261 1.865 0 1.41-1.478 2.074-4.481 2.074-3.948 0-8.225-.953-11.72-2.654l.7 6.094c3.003 1.122 6.91 1.785 10.57 1.785 7.896 0 12.007-2.78 12.007-7.715 0-3.94-2.303-6.057-7.4-6.8zM100.3 34.09v28.325h7.071V34.091zm15.334 15.595 9.833-10.744h-8.8l-9.296 11.114 9.912 12.356h8.925l-10.574-12.73zm-16.321-25.09c0 4.56 3.66 7.13 10.074 7.13 1.52 0 2.961-.167 4.44-.495l3.66-5.225c-1.89.496-4.031.79-5.963.79-3.166 0-4.648-.664-4.648-2.239 0-1.079.783-1.659 2.549-1.864l8.058-.945v9.567h7.072v-13.81c0-6.635-4.236-10.075-12.461-10.075-3.744 0-7.442.705-10.691 2.075l-1.112 6.178c3.495-1.701 7.401-2.613 10.937-2.613 3.769 0 5.664 1.1 6.13 3.633l-8.637 1.013c-6.539.747-9.417 2.86-9.417 6.883l.009-.004Zm-19.779-1.492c0 5.725 3.29 8.627 9.787 8.627 2.59 0 4.732-.416 6.785-1.37l.903-6.261c-1.974 1.2-3.99 1.822-6.005 1.822-3.044 0-4.402-1.243-4.402-4.023v-8.295h10.732V7.84H86.601V2.948l-13.448 7.174v3.482h6.372V23.1l.008.004Zm-6.95-2.612v1.411H53.47c.862 2.873 3.423 4.187 7.97 4.187 3.62 0 6.993-.747 9.992-2.196l-.862 6.056c-2.757 1.16-6.251 1.785-9.829 1.785-9.5 0-14.68-4.23-14.68-12.066 0-7.838 5.264-12.235 13.406-12.235s13.119 4.771 13.119 13.062l-.005-.004ZM53.378 17.09h12.086c-.637-2.751-2.732-4.188-6.08-4.188-3.349 0-5.335 1.399-6.006 4.188"
              ></path>
            </svg>
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <li className="hover:text-black cursor-pointer text-md font-semibold">
              Features
            </li>
            <li className="hover:text-black cursor-pointer text-md font-semibold">
              Developer
            </li>
            <li className="hover:text-black cursor-pointer text-md font-semibold ">
              MetaMask USD
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 rounded-full transition">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-semibold text-sm">
            GET METAMASK
          </button>
          <button className="md:hidden w-12 h-12 flex items-center justify-center">
            <Menu />
          </button>
        </div>
      </nav>
      {!showNavbar && (
        <>
          <div
            className={`${
              showNavbar
                ? "opacity-0 -translate-y-10 pointer-events-none"
                : "opacity-100 translate-y-0"
            } flex gap-3 items-center justify-center transition-opacity duration-500 fixed top-10 right-15 z-40`}
          >
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-semibold text-sm">
              GET METAMASK
            </button>
            <div className="bg-black rounded-full text-white p-2">
              <Menu />
            </div>
          </div>
        </>
      )}

      <main className="flex flex-col items-center pt-52 px-4">
        <div className="relative text-center mb-20">
          <h1
            className="font-black uppercase leading-none select-none text-[#3d065f] title "
            style={{
              fontSize: "clamp(180px, 15vw, 300px)",
              fontWeight: "900",
              letterSpacing: "-0.05em",
              lineHeight: "0.85",
              fontStretch: "ultra-condensed",
            }}
          >
            <div>YOUR HOME</div>
            <div>IN WEB3</div>
          </h1>

          <button className="mt-12 bg-black text-white px-8 py-4 rounded-full text-base hover:bg-gray-800 transition font-semibold shadow-lg">
            GET METAMASK
          </button>
        </div>
      </main>
    </div>
    <Card showNavbar={showNavbar}/>
    <WalletDashboard/>
    </>
  );
}
export default Home