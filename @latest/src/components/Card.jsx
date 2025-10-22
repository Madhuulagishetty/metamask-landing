import React, { useEffect, useState } from "react";
import { ArrowLeftRight, Send, Repeat, Link, Eye } from "lucide-react";

const Card = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHero, setShowHero] = useState(false);

  // Animation when mounted
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  // Scroll logic — show hero after 200vh
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight +60; 
      setShowHero(scrollPosition >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-[#fff3ec] min-h-[120vh]">
      {!showHero && (
      <div className="flex justify-center items-center py-28">
        <div
          className={`transition-all duration-700 ease-out ${
            isLoaded
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-6 max-w-md">
            <div className="text-center">
              <h1 className="text-sm text-black font-medium">
                metamask.linea.eth
              </h1>
            </div>

            <div className="text-start">
              <h2 className="text-4xl font-bold text-gray-900">$2,372.18</h2>
              <p className="text-green-600 text-sm font-medium mt-1">
                +$6.31 (0.16%)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between w-full mt-2 gap-6">
              {[
                { icon: ArrowLeftRight, label: "Buy & Sell" },
                { icon: Send, label: "Send" },
                { icon: Repeat, label: "Swap" },
                { icon: Link, label: "Bridge" },
                { icon: Eye, label: "Receive" },
              ].map(({ icon: Icon, label }, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-700 font-medium">
                    {label}
                  </span>
                </button>
              ))}
            </div>

            <div className="w-full mt-6 border-b border-gray-200 flex justify-around text-sm">
              <button className="font-semibold border-b-2 border-black pb-2">
                Tokens
              </button>
              <button className="text-gray-400 pb-2">NFTs</button>
              <button className="text-gray-400 pb-2">Activity</button>
            </div>

            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-none"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Ethereum
                  </p>
                  <p className="text-xs text-gray-500">0.58 ETH</p>
                </div>
                <p className="text-sm font-semibold text-gray-800">$2,233.69</p>
              </div>
            ))}
          </div>
        </div>
      </div>)}

    
      <div
        className={`absolute top-[10%] right-[35%] flex items-center justify-center z-40 transition-all duration-1000 ${
          showHero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center bg-[#fff3ec]">
          <div className="relative z-10">
            <img
              src="https://store.my.games/hotbox/showcase/pocket/play-highlight/ef29ac09-85a5-4213-981d-c9e950787aa4.jpg"
              alt="Hero Character"
              className="w-[470px] h-[580px] object-cover rounded-3xl"
            />
          </div>

          <h1
            className="absolute text-center uppercase font-black leading-none z-20"
            style={{
              fontSize: "clamp(100px, 10vw, 180px)",
              letterSpacing: "-0.05em",
              lineHeight: "0.85",
              fontStretch: "ultra-condensed",
            }}
          >
            <span className="block text-[#d9a3ff]">The</span>
            <span className="block text-[#4B0082]">Everything</span>
            <span className="block text-[#d9a3ff]">Wallet</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
