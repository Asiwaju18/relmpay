import React, { useState } from 'react';

const Home = () => {
    // Form state for API access request
    const [formData, setFormData] = useState({
        businessName: '',
        activeCorp: '',
        smallAddress: '',
        email: '',
        privateRegion: '',
        listedKingdom: '',
        monthlyVolume: '1000',
        termsAccepted: false,
    });
    const [taxConfirmed, setTaxConfirmed] = useState(false);
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [footerEmail, setFooterEmail] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('API Access Request:', formData);
        alert('Request submitted! Our solutions engineer will contact you within 24 hours.');
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${subscribeEmail}`);
        setSubscribeEmail('');
    };

    const handleFooterNewsletter = (e) => {
        e.preventDefault();
        alert(`Newsletter signup: ${footerEmail}`);
        setFooterEmail('');
    };

    return (
        <div className="font-sans antialiased">
            {/* ========== HERO SECTION (original first section) ========== */}
            <section id="home" className="relative min-h-screen bg-[#f4f6ff] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#eef1ff] via-[#dfe5ff] to-[#6b7cff] opacity-90" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-sm text-white font-medium mb-6">
                            <span className="w-2 h-2 bg-white rounded-full" />
                            NOW LIVE IN UK & NIGERIA
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-[#11185b]">
                            Effortless Crypto
                            <br />
                            <span className="text-white">Payments.</span>
                            <br />
                            <span className="text-white">Bridging Borders.</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
                            The premier non-custodial gateway for secure cross-border transactions. Automate your tax
                            computation and stay compliant with FCA and Nigerian regulatory standards effortlessly.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                            <button className="bg-[#154c79] hover:bg-white transition-all duration-300 text-black px-8 py-4 rounded-xl font-semibold shadow-lg">
                                Launch Business Account →
                            </button>
                            <button className="bg-white text-black hover:bg-blue-800 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg">
                                Individual Account
                            </button>
                        </div>
                        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 text-white/90 text-sm font-medium">
                            <div className="flex items-center gap-2">✅ Non-Custodial Security</div>
                            <div className="flex items-center gap-2">✨ Auto Tax Computation</div>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 flex justify-center relative">
                        <img
                            src="/assets/Background+Border+Shadow (2).png"
                            alt="Crypto Payment UI"
                            className="w-full max-w-600px object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ========== TRUSTED SECTION ========== */}
            <section className="bg-white py-16 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center">
                        <p className="uppercase tracking-[4px] text-sm text-gray-400 font-semibold">
                            Trusted by Industry Leaders and Regulators
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-10 mt-8 text-3xl font-bold text-gray-500">
                            <h3>FCA UK</h3>
                            <h3>Quidax</h3>
                            <h3>CBN Compliant</h3>
                            <h3>Chainalysis</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        <div className="bg-linear-to-r from-[#1f4d78] to-[#4d98d8] rounded-2xl p-10 text-white shadow-lg">
                            <h2 className="text-5xl font-extrabold">20+</h2>
                            <h3 className="text-3xl font-bold mt-2">businesses</h3>
                            <p className="mt-6 text-white/90 leading-relaxed">
                                Amet turpis nec tortor suspendisse. Turpis amet tincidunt eget purus mauris.
                            </p>
                        </div>
                        <div className="bg-linear-to-r from-[#1f4d78] to-[#4d98d8] rounded-2xl p-10 text-white shadow-lg">
                            <h2 className="text-5xl font-extrabold">$30 million</h2>
                            <p className="mt-6 text-white/90 leading-relaxed">
                                Morbi facilisis neque in risus magnis. Quam arcu lorem non facilisis.
                            </p>
                        </div>
                        <div className="bg-linear-to-r from-[#1f4d78] to-[#4d98d8] rounded-2xl p-10 text-white shadow-lg">
                            <h2 className="text-5xl font-extrabold">100+</h2>
                            <h3 className="text-3xl font-bold mt-2">users</h3>
                            <p className="mt-6 text-white/90 leading-relaxed">
                                Est a semper sit augue. Sit sit neque vitae nulla arcu eget consectetur sed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== REGIONAL FOCUS (original "We don't just operate globally") ========== */}
            <div className="bg-linear-to-r from-slate-50 to-gray-100 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-700 text-sm font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                            </span>
                            Global Reach · Local Depth
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                            We don't just operate globally;
                            <span className="text-indigo-600 block"> we localize deeply.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Reinforce our position as a local hub for the <strong>FCA (UK)</strong> and <strong>SEC (Nigeria)</strong>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* UK Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-linear-to-r from-blue-800 to-blue-900 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">🇬🇧</span>
                                    <h3 className="text-2xl font-bold text-white">United Kingdom</h3>
                                </div>
                                <p className="text-blue-100">London Operations Hub</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3"><span>✅</span> <span><strong>Unblocked custody</strong> – Seamless asset safekeeping</span></li>
                                    <li className="flex items-start gap-3"><span>✅</span> <span><strong>Full FCA compliance</strong> – Travel Rule ready</span></li>
                                    <li className="flex items-start gap-3"><span>✅</span> <span><strong>Dedicated client servicing</strong> – 24/7 white-glove support</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* Nigeria Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-linear-to-r from-green-700 to-emerald-800 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">🇳🇬</span>
                                    <h3 className="text-2xl font-bold text-white">Nigeria</h3>
                                </div>
                                <p className="text-green-100">Lagos Operations Hub</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3"><span>✅</span> <span><strong>Lead on-ramps</strong> – Fiat-to-crypto gateways</span></li>
                                    <li className="flex items-start gap-3"><span>✅</span> <span><strong>Automated BON workflow</strong> – Central Bank integration</span></li>
                                    <li className="flex items-start gap-3"><span>✅</span> <span><strong>Merchant settlement networks</strong> – Real-time payouts</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== ZERO-TAX STRESS + FORM (the long middle section) ========== */}
            <div className="bg-linear-to-r from-slate-50 via-white to-gray-50 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero: Zero-Tax Stress */}
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-1.5 rounded-full text-amber-700 text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Tax Intelligence
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                            Zero-Tax Stress with <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Automated Optimization</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Helpmap simplifies taxation with detailed transaction breakdowns, automated VAT calculations, and comprehensive VAT reporting.
                        </p>
                    </div>

                    {/* Three Feature Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Red-Tree-HMRC Reporting</h3>
                            <p className="text-gray-600">Full-funnel for your UK annual tax return. Seamless integration with HMRC systems.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">FRS Compliance Hooks</h3>
                            <p className="text-gray-600">Lever for E-Invoicing for higher business users. Flat Rate Scheme ready.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Optimization Engine</h3>
                            <p className="text-gray-600">Strategically route payments to minimize tax leakage. Maximize post-tax returns.</p>
                        </div>
                    </div>

                    {/* Transaction Summary Box */}
                    <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl mb-20 overflow-hidden">
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Transaction Summary</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="bg-white/10 rounded-xl p-4"><p className="text-gray-300 text-sm">Funding Amount</p><p className="text-2xl font-bold text-white">2,901 ETH</p></div>
                                <div className="bg-white/10 rounded-xl p-4"><p className="text-gray-300 text-sm">To Distribution (ISR)</p><p className="text-2xl font-bold text-white">1,483,203.00</p></div>
                                <div className="bg-white/10 rounded-xl p-4"><p className="text-gray-300 text-sm">UK COT Estimate</p><p className="text-2xl font-bold text-white">1,433.75</p></div>
                                <div className="bg-white/10 rounded-xl p-4"><p className="text-gray-300 text-sm">Rates (Net 0.5%)</p><p className="text-2xl font-bold text-white">1.00</p></div>
                            </div>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" checked={taxConfirmed} onChange={(e) => setTaxConfirmed(e.target.checked)} className="w-5 h-5 rounded" />
                                <span className="text-white font-medium">Confirm E-Pay Tax Optimized</span>
                            </label>
                        </div>
                    </div>

                    {/* For Businesses & For Individuals */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-linear-to-r from-blue-600 to-indigo-700 px-6 py-5">
                                <h3 className="text-2xl font-bold text-white">For Businesses</h3>
                                <p className="text-blue-100">Scale your operations</p>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">Enterprise-grade APIs, mass payroll, automated corporate tax reporting.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3"><span>✅</span> Bulk Vendor Payments</li>
                                    <li className="flex items-center gap-3"><span>✅</span> Payroll in Crypto / Tax</li>
                                    <li className="flex items-center gap-3"><span>✅</span> Multi-Tax Payments</li>
                                </ul>
                                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">Open Business Account →</button>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-5">
                                <h3 className="text-2xl font-bold text-white">For Individuals</h3>
                                <p className="text-emerald-100">Fast, secure, tax-optimized</p>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">Fast P2P transfers. Send money home or pay for services in seconds.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3"><span>✅</span> Red Exchange Rates</li>
                                    <li className="flex items-center gap-3"><span>✅</span> Mobile App Access</li>
                                </ul>
                                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">Open Individual Account →</button>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="bg-linear-to-r from-indigo-50 to-purple-50 px-6 py-8 md:px-8">
                            <div className="text-center max-w-2xl mx-auto mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ready to Modernize Your Payments?</h2>
                                <p className="text-gray-600 text-lg">Request API access – our engineer will meet you within 24 hours.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-5 mb-6">
                                    <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleInputChange} className="px-4 py-2 border rounded-lg" required />
                                    <input type="text" name="activeCorp" placeholder="Active Corp" value={formData.activeCorp} onChange={handleInputChange} className="px-4 py-2 border rounded-lg" />
                                    <input type="text" name="smallAddress" placeholder="Small Address" value={formData.smallAddress} onChange={handleInputChange} className="px-4 py-2 border rounded-lg" />
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="px-4 py-2 border rounded-lg" required />
                                    <input type="text" name="privateRegion" placeholder="Private Region" value={formData.privateRegion} onChange={handleInputChange} className="px-4 py-2 border rounded-lg" />
                                    <input type="text" name="listedKingdom" placeholder="Listed Kingdom" value={formData.listedKingdom} onChange={handleInputChange} className="px-4 py-2 border rounded-lg" />
                                    <div className="md:col-span-2 relative">
                                        <input type="number" name="monthlyVolume" value={formData.monthlyVolume} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg" />
                                        <span className="absolute right-3 top-2.5 text-gray-400">USD</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mb-6">
                                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} required />
                                    <label className="text-sm text-gray-600">By submitting, you agree to our <a href="#" className="text-indigo-600">Terms of Service</a>.</label>
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">Request API Access →</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== BLOG PREVIEW + FOOTER (the final part) ========== */}
            <div className="bg-white">
                {/* Hero image banner */}
                <div className="relative w-full h-96 md:h-500px bg-linear-to-r from-indigo-900 to-purple-900 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Global payments" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Seamless Cross‑Border Corridors</h1>
                        <p className="text-xl md:text-2xl">Connecting London to Lagos – instant settlements, full compliance.</p>
                    </div>
                </div>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    {/* Expanding the Corridor */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Expanding the Corridor</h2>
                            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4"><span className="text-3xl">🇬🇧</span><h3 className="text-2xl font-bold">London</h3></div>
                                <p className="text-gray-600 text-lg">H5 & RCL Limited</p>
                                <p className="text-gray-500">FCA regulated custody, instant GBP settlements.</p>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4"><span className="text-3xl">🇳🇬</span><h3 className="text-2xl font-bold">Lagos</h3></div>
                                <p className="text-gray-600 text-lg">Corridor RLD</p>
                                <p className="text-gray-500">NGN on‑ramps, BON integration, merchant settlement.</p>
                            </div>
                        </div>
                    </div>

                    {/* Blogs */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Blogs</h2>
                            <p className="text-gray-600">Latest insights from the team</p>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                                        <div className="h-2 bg-linear-to-r from-blue-500 to-cyan-500 mb-3" />
                                        <div className="flex justify-between"><span className="text-xs font-semibold text-blue-600">CATEGORY</span><span className="text-gray-400 text-sm">0{i}</span></div>
                                        <h3 className="text-xl font-bold mt-2">Blog title {i}</h3>
                                        <p className="text-gray-600 text-sm mt-2">Short description of the blog post goes here...</p>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">📅 01.0{i}.2024</div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">🔥 Popular This Week</h3>
                                    <div className="space-y-4">
                                        <p><span className="font-bold text-indigo-600">01</span> We GBCDC are the final boss of centralized finance</p>
                                        <p><span className="font-bold text-indigo-600">02</span> Integrating Remplay with Shopify</p>
                                        <p><span className="font-bold text-indigo-600">03</span> The USDC Crypto-Asset Bill</p>
                                    </div>
                                </div>
                                <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold">Stay Curated.</h3>
                                    <p className="text-gray-600 mb-4">Get our in-depth editorial.</p>
                                    <form onSubmit={handleSubscribe} className="space-y-3">
                                        <input type="email" placeholder="Your email" value={subscribeEmail} onChange={(e) => setSubscribeEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
                                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
        </div>
    );
};

export default Home;