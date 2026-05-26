import React, { useState } from 'react';

const Footer = () => {
    const [footerEmail, setFooterEmail] = useState('');

    const handleFooterNewsletter = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${footerEmail}`);
        setFooterEmail('');
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img
                                src="/assets/relmpayLogoLight 1.png"
                                alt="RelmPay Logo"
                                className="w-18 h-18  object-contain"
                            />
                        </div>
                        <p className="text-sm">Cross‑border payments reimagined.</p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2 text-sm">
                            <li>F20+ Storefronts</li>
                            <li>Business API</li>
                            <li>Tax Collector</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>How It Works</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Discovery</h3>
                        <ul className="space-y-2 text-sm">
                            <li>UK</li>
                            <li>Local Knowledge</li>
                            <li>Major</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm">Total Free Customer Case</p>
                        <p className="text-white font-semibold text-lg">+01 123 456 7899</p>
                        <p className="text-sm mt-2">Live Support?</p>
                        <a href="mailto:info@relimay.com" className="text-indigo-400">
                            info@relimay.com
                        </a>
                        <form onSubmit={handleFooterNewsletter} className="flex flex-col gap-2 mt-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                value={footerEmail}
                                onChange={(e) => setFooterEmail(e.target.value)}
                                className="px-3 py-2 rounded-lg bg-gray-800 border text-white"
                                required
                            />
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div>© 2025 Relimay - All rights reserved.</div>
                    <div className="flex gap-4">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Storey</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
