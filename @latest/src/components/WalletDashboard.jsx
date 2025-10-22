import React from "react";
import { ArrowLeftRight, Info } from "lucide-react";

const WalletDashboard=()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
      <div className="w-[85%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Buy & swap tokens</h2>
            <p className="text-xl mb-8">Trade perps</p>

            <div className="relative">
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3 mb-4">
                <div className="bg-orange-500 rounded-xl p-3">
                  <span className="text-white text-2xl font-bold">$</span>
                </div>
                <span className="text-gray-900 text-xl font-semibold">
                  Pay USD
                </span>
              </div>

              <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-purple-500 rounded-full p-3">
                  <ArrowLeftRight className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-black rounded-xl p-3">
                  <span className="text-white text-xl">Ξ</span>
                </div>
                <span className="text-gray-900 text-xl font-semibold">ETH</span>
              </div>
            </div>
          </div>

          {/* All Networks Card */}
          <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold leading-tight mb-8">
              All your networks
              <br />
              All your assets
              <br />
              All in one place
            </h2>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black rounded-lg p-2">
                  <span className="text-white text-lg">Ξ</span>
                </div>
                <span className="text-gray-900 font-semibold">Crypto</span>
                <Info className="w-5 h-5 text-gray-400 ml-auto" />
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-gray-900 text-2xl font-bold">
                  3.00254 ETH
                </span>
                <span className="text-gray-500">≈ 11,563.35 mUSD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 md:col-span-2 flex items-center justify-center">
          <h1 className=" font-black text-purple-900 text-center leading-tight title"
           style={{
              fontSize: "clamp(80px, 5vw, 50px)",
              fontWeight: "900",
              letterSpacing: "-0.05em",
              lineHeight: "0.85",
              fontStretch: "ultra-condensed",
            }}>
            THE
            <br />
            EVERYTHING
            <br />
            WALLET
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-gradient-to-br from-teal-950 to-teal-900 rounded-3xl p-8 text-white overflow-hidden relative">
            <h2 className="text-3xl font-bold mb-8">
              Get MetaMask
              <br />
              Rewards
            </h2>

            <div className="bg-white rounded-2xl p-6 transform rotate-3">
              <h3 className="text-gray-900 text-2xl font-bold mb-4">Rewards</h3>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-200 rounded-lg p-2">
                  <div className="w-8 h-8 bg-purple-400 rounded"></div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Level 2</div>
                  <div className="text-gray-900 font-semibold">Frontier</div>
                </div>
              </div>

              <div className="relative">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="mt-2 text-gray-900 font-bold text-lg">
                  ✓ 22,578 points
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-lime-400 rounded-tl-[80px]"></div>
          </div>

          {/* Earn on Crypto Card */}
          <div className="bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl p-8 text-gray-900 relative overflow-hidden md:col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-bold mb-8">
              Earn on your
              <br />
              crypto
            </h2>

            <div className="relative h-40">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 160"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,120 L 100,100 L 200,80 L 300,40 L 400,20"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  opacity="0.5"
                />
                <path
                  d="M 0,140 L 100,120 L 200,100 L 300,60 L 400,40 L 400,160 L 0,160 Z"
                  fill="url(#gradient)"
                  opacity="0.8"
                />
                <circle cx="200" cy="100" r="8" fill="white" />
                <circle cx="300" cy="60" r="8" fill="white" />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WalletDashboard
