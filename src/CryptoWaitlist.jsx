import React, { useState } from 'react';

const CryptoWaitlist = () => {
    const [waitlist, setWaitlist] = useState({ fullName: '', email: '', country: '' });
    const [waitlistErrors, setWaitlistErrors] = useState({ fullName: '', email: '', country: '' });

    const [apiForm, setApiForm] = useState({ businessName: '', region: '', email: '', volume: '' });
    const [apiErrors, setApiErrors] = useState({ businessName: '', region: '', email: '', volume: '' });

    const [toast, setToast] = useState({ message: '', visible: false, isError: false });

    const showToast = (message, isError = false) => {
        setToast({ message, visible: true, isError });
        setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleWaitlistSubmit = (e) => {
        e.preventDefault();
        const errors = { fullName: '', email: '', country: '' };
        let isValid = true;

        if (!waitlist.fullName.trim()) {
            errors.fullName = 'Full name is required';
            isValid = false;
        } else if (waitlist.fullName.trim().length < 2) {
            errors.fullName = 'Please enter a valid name';
            isValid = false;
        }

        if (!waitlist.email.trim()) {
            errors.email = 'Email address is required';
            isValid = false;
        } else if (!isValidEmail(waitlist.email)) {
            errors.email = 'Enter a valid email (e.g., name@domain.com)';
            isValid = false;
        }

        if (!waitlist.country) {
            errors.country = 'Please select your country';
            isValid = false;
        }

        setWaitlistErrors(errors);

        if (isValid) {
            console.log('Waitlist joined:', waitlist);
            showToast(`🎉 Thanks ${waitlist.fullName.split(' ')[0]}! You're on the waitlist. Early access coming soon.`);
            setWaitlist({ fullName: '', email: '', country: '' });
        }
    };

    const handleApiSubmit = (e) => {
        e.preventDefault();
        const errors = { businessName: '', region: '', email: '', volume: '' };
        let isValid = true;

        if (!apiForm.businessName.trim()) {
            errors.businessName = 'Business name is required';
            isValid = false;
        }

        if (!apiForm.region) {
            errors.region = 'Please select primary region';
            isValid = false;
        }

        if (!apiForm.email.trim()) {
            errors.email = 'Email address is required';
            isValid = false;
        } else if (!isValidEmail(apiForm.email)) {
            errors.email = 'Enter a valid email address';
            isValid = false;
        }

        if (!apiForm.volume) {
            errors.volume = 'Please select expected monthly volume';
            isValid = false;
        }

        setApiErrors(errors);

        if (isValid) {
            console.log('API access requested:', apiForm);
            showToast('📡 API access request submitted! Our solutions engineer will reach out within 24 hours.');
            setApiForm({ businessName: '', region: '', email: '', volume: '' });
        }
    };

    const handleWaitlistChange = (field, value) => {
        setWaitlist(prev => ({ ...prev, [field]: value }));
        setWaitlistErrors(prev => ({ ...prev, [field]: '' }));
    };

    const handleApiChange = (field, value) => {
        setApiForm(prev => ({ ...prev, [field]: value }));
        setApiErrors(prev => ({ ...prev, [field]: '' }));
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50/40 font-sans p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Card - Waitlist */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-6 md:p-8 transition-all hover:shadow-2xl">
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
                            ✨ EARLY ACCESS
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                            Be the First to Experience the Future of Crypto Payments.
                        </h1>
                        <p className="text-slate-600 mt-4 mb-6">
                            Bridging the gap between the UK and Nigeria with seamless, secure, and instant cryptocurrency transactions.
                        </p>

                        <form onSubmit={handleWaitlistSubmit} noValidate>
                            {/* Full Name Field */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    FULL NAME
                                </label>
                                <input
                                    type="text"
                                    value={waitlist.fullName}
                                    onChange={(e) => handleWaitlistChange('fullName', e.target.value)}
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-3 rounded-xl border ${waitlistErrors.fullName
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                                />
                                {waitlistErrors.fullName && (
                                    <p className="text-red-500 text-xs mt-1">{waitlistErrors.fullName}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    EMAIL ADDRESS
                                </label>
                                <input
                                    type="email"
                                    value={waitlist.email}
                                    onChange={(e) => handleWaitlistChange('email', e.target.value)}
                                    placeholder="hello@example.com"
                                    className={`w-full px-4 py-3 rounded-xl border ${waitlistErrors.email
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                                />
                                {waitlistErrors.email && (
                                    <p className="text-red-500 text-xs mt-1">{waitlistErrors.email}</p>
                                )}
                            </div>

                            {/* Country Select */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    COUNTRY
                                </label>
                                <select
                                    value={waitlist.country}
                                    onChange={(e) => handleWaitlistChange('country', e.target.value)}
                                    className={`w-full px-4 py-3 rounded-xl border ${waitlistErrors.country
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition appearance-none bg-white cursor-pointer`}
                                >
                                    <option value="" disabled>
                                        Select your country
                                    </option>
                                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                                    <option value="Nigeria">🇳🇬 Nigeria</option>
                                    <option value="Ghana">🇬🇭 Ghana</option>
                                    <option value="South Africa">🇿🇦 South Africa</option>
                                    <option value="Kenya">🇰🇪 Kenya</option>
                                    <option value="United States">🇺🇸 United States</option>
                                    <option value="Other">🌍 Other</option>
                                </select>
                                {waitlistErrors.country && (
                                    <p className="text-red-500 text-xs mt-1">{waitlistErrors.country}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                            >
                                Join the Waitlist <span className="text-lg">→</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Card - API Access */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-6 md:p-8 transition-all hover:shadow-2xl">
                        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4">
                            ⚙️ DEVELOPERS
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                            Ready to Modernize Your Payments?
                        </h2>
                        <p className="text-slate-600 mt-2 mb-6">
                            Request API access and our solutions engineer will reach out within 24 hours.
                        </p>

                        <form onSubmit={handleApiSubmit} noValidate>
                            {/* Business Name Field */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    BUSINESS NAME
                                </label>
                                <input
                                    type="text"
                                    value={apiForm.businessName}
                                    onChange={(e) => handleApiChange('businessName', e.target.value)}
                                    placeholder="Acme Corp"
                                    className={`w-full px-4 py-3 rounded-xl border ${apiErrors.businessName
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                                />
                                {apiErrors.businessName && (
                                    <p className="text-red-500 text-xs mt-1">{apiErrors.businessName}</p>
                                )}
                            </div>

                            {/* Primary Region Select */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    PRIMARY REGION
                                </label>
                                <select
                                    value={apiForm.region}
                                    onChange={(e) => handleApiChange('region', e.target.value)}
                                    className={`w-full px-4 py-3 rounded-xl border ${apiErrors.region
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition appearance-none bg-white cursor-pointer`}
                                >
                                    <option value="" disabled>
                                        Select region
                                    </option>
                                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                                    <option value="Nigeria">🇳🇬 Nigeria</option>
                                    <option value="Europe">🌍 Europe</option>
                                    <option value="North America">🌎 North America</option>
                                    <option value="Asia">🌏 Asia</option>
                                </select>
                                {apiErrors.region && (
                                    <p className="text-red-500 text-xs mt-1">{apiErrors.region}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    EMAIL ADDRESS
                                </label>
                                <input
                                    type="email"
                                    value={apiForm.email}
                                    onChange={(e) => handleApiChange('email', e.target.value)}
                                    placeholder="remote@company.com"
                                    className={`w-full px-4 py-3 rounded-xl border ${apiErrors.email
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                                />
                                {apiErrors.email && (
                                    <p className="text-red-500 text-xs mt-1">{apiErrors.email}</p>
                                )}
                            </div>

                            {/* Volume Select */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                    EXPECTED MONTHLY VOLUME
                                </label>
                                <select
                                    value={apiForm.volume}
                                    onChange={(e) => handleApiChange('volume', e.target.value)}
                                    className={`w-full px-4 py-3 rounded-xl border ${apiErrors.volume
                                        ? 'border-red-400 bg-red-50'
                                        : 'border-slate-200'
                                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition appearance-none bg-white cursor-pointer`}
                                >
                                    <option value="" disabled>
                                        Select volume range
                                    </option>
                                    <option value="< $10k">Under $10k</option>
                                    <option value="$10k - $50k">$10k – $50k</option>
                                    <option value="$50k - $250k">$50k – $250k</option>
                                    <option value="$250k - $1M">$250k – $1M</option>
                                    <option value="$1M+">$1M+</option>
                                </select>
                                {apiErrors.volume && (
                                    <p className="text-red-500 text-xs mt-1">{apiErrors.volume}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                            >
                                Request API Access →
                            </button>
                        </form>

                        {/* Terms */}
                        <p className="text-[11px] text-center text-slate-400 mt-4">
                            By submitting, you agree to our Terms of Service Policy.
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="text-center text-xs text-slate-400 mt-8 border-t border-slate-200 pt-6">
                    ⚡ Instant settlement • 🔐 Bank-grade security • 🌍 UK ↔ Nigeria corridor
                </div>
            </div>

            {/* Toast Notification */}
            {toast.visible && (
                <div
                    className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-full shadow-lg text-white text-sm font-medium transition-all z-50 ${toast.isError ? 'bg-red-600' : 'bg-slate-800'
                        }`}
                >
                    {toast.message}
                </div>
            )}
        </div>
    );
};

export default CryptoWaitlist;
