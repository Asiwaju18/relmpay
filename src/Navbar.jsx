// Navbar.jsx

import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-white shadow-sm">

            {/* TOP NAVBAR */}
            <nav className="flex items-center justify-between px-8 lg:px-16 py-5">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <Link to="/#home" className="cursor-pointer hover:opacity-80 transition">
                        <img
                            src="/assets/relmpayLogoNormal 1.png"
                            alt="RelmPay Logo"
                            className="w-18 h-18 object-contain"
                        />
                    </Link>

                    {/* <h1 className="text-3xl font-bold text-[#1D2B6B]">
            RELM<span className="text-[#2F7F8D]">PAY</span>
          </h1> */}
                </div>

                {/* NAV LINKS */}
                <ul className="hidden lg:flex items-center gap-12 text-[18px] font-medium text-gray-800">
                    <li>
                        <Link to="/#home" className="text-[#1E4E79] font-semibold hover:text-[#154c79] transition">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/#aboutus" className="hover:text-[#1E4E79] transition">
                            About Us
                        </Link>
                    </li>

                    <li>
                        <Link to="/#howitworks" className="hover:text-[#1E4E79] transition">
                            How It Works
                        </Link>
                    </li>

                    <li>
                        <Link to="/#forindividuals" className="hover:text-[#1E4E79] transition">
                            For Individuals
                        </Link>
                    </li>

                    <li>
                        <Link to="/#forbusiness" className="hover:text-[#1E4E79] transition">
                            For Business
                        </Link>
                    </li>
                </ul>

                {/* BUTTONS */}
                <div className="hidden lg:flex items-center gap-4">

                    <button onClick={() => navigate('/waitlist')} className="border border-[#1E4E79] text-[#1E4E79] px-8 py-3 rounded-2xl font-semibold hover:bg-[#1E4E79] hover:text-white transition-all duration-300 transform hover:scale-105">
                        Join waitlist
                    </button>

                    <button onClick={() => navigate('/signup')} className="bg-[#1E4E79] text-white px-8 py-3 rounded-2xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105" type="button">
                        Get started
                    </button>
                </div>
            </nav>

            {/* CRYPTO TICKER */}
            <div className="w-full bg-[#F4F6FA] border-t border-gray-200 overflow-x-auto">
                <div className="flex items-center gap-10 px-8 py-4 min-w-max">

                    {/* Bitcoin */}
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-[#2D0A59]">Bitcoin</span>
                        <span className="text-3xl">$90,000</span>
                        <span className="text-green-500 font-semibold">+2.4%</span>
                    </div>

                    {/* Ethereum */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-600">
                            ETH
                        </div>

                        <span className="font-bold text-[#2D0A59]">Ethereum</span>
                        <span className="text-3xl">$5,000</span>
                        <span className="text-green-500 font-semibold">+1.8%</span>
                    </div>

                    {/* Tether */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-sm font-bold text-green-600">
                            USDT
                        </div>

                        <span className="font-bold text-[#2D0A59]">Tether</span>
                        <span className="text-3xl">$1.00</span>
                        <span className="text-gray-500 font-semibold">0.0%</span>
                    </div>

                    {/* Solana */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-600">
                            SOL
                        </div>

                        <span className="font-bold text-[#2D0A59]">Solana</span>
                        <span className="text-3xl">$212.45</span>
                        <span className="text-red-500 font-semibold">-0.5%</span>
                    </div>

                    {/* Cardano */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-600">
                            ADA
                        </div>

                        <span className="font-bold text-[#2D0A59]">Cardano</span>
                        <span className="text-3xl">$0.78</span>
                        <span className="text-green-500 font-semibold">+4.2%</span>
                    </div>

                    {/* BTC */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold text-orange-600">
                            BTC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;