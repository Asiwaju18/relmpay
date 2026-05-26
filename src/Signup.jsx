import React, { useState, useRef } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Signup = () => {
    // Form state
    const [indicator, setIndicator] = useState('');
    const [service, setService] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [securityAlerts, setSecurityAlerts] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [toast, setToast] = useState(null);

    // Refs for scrolling
    const formRef = useRef(null);

    // Validation errors
    const [errors, setErrors] = useState({});

    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!indicator) newErrors.indicator = 'Please select an indicator';
        if (!service) newErrors.service = 'Please select a service';
        if (!email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!termsAccepted) newErrors.terms = 'You must agree to the Terms and Privacy Policy';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate account creation
            console.log({
                indicator,
                service,
                email,
                password,
                securityAlerts,
            });
            showToast('Account created successfully! Welcome to Relmpay 🚀', 'success');
            // Reset form (optional)
            setIndicator('');
            setService('');
            setEmail('');
            setPassword('');
            setSecurityAlerts(false);
            setTermsAccepted(false);
        } else {
            showToast('Please fix the errors in the form', 'error');
        }
    };

    const handleSocialSignup = (provider) => {
        showToast(`Sign up with ${provider} (demo integration)`, 'success');
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="font-['Inter',sans-serif] bg-linear-to-br from-[#f9fafc] to-[#f0f2f8] min-h-screen">
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-white shadow-lg transition-all duration-300 ${toast.type === 'success' ? 'bg-[#1f6a8c]' : 'bg-red-500'
                    }`}>
                    <i className={`fas ${toast.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                    {toast.message}
                </div>
            )}

            <div className="container mx-auto max-w-7xl px-4 py-6 md:py-8">
                {/* Navigation */}
                <nav className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="bg-linear-to-r from-[#0F2B4D] to-[#1E4A76] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                            Relmpay
                        </h1>
                        <p className="text-sm font-medium text-[#2c6e9e]">Bridging Borders, Effortlessly.</p>
                    </div>
                    <button
                        onClick={scrollToForm}
                        className="flex items-center gap-2 rounded-full bg-linear-to-r from-[#0F2B4D] to-[#1A4B7A] px-5 py-2.5 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:from-[#133a5a] hover:to-[#215f8f] hover:shadow-lg"
                    >
                        <i className="fas fa-rocket"></i> Get Started
                    </button>
                </nav>

                {/* Hero + Form Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left Hero Section */}
                    <div className="pt-4">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1f608f]/10 px-4 py-1.5 text-sm font-medium text-[#1B4F7A]">
                            <i className="fas fa-globe-africa"></i> UK ↔ Nigeria
                        </div>
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-transparent bg-linear-to-r from-[#0f2b3f] to-[#2a607c] bg-clip-text md:text-4xl lg:text-5xl">
                            Fast, Secure & Tax-Efficient payments
                        </h2>
                        <p className="mt-4 text-[#2c3e4e] md:text-lg">
                            Join thousands moving money smarter between the UK and Nigeria. Zero hidden fees, real-time tracking, and premium support.
                        </p>

                        {/* Stats */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm">
                                <span className="text-2xl font-extrabold text-[#0F2B4D]">50k+</span>
                                <span className="text-[#4a5b6e]">Active Users</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm">
                                <span className="text-2xl font-extrabold text-[#0F2B4D]">0</span>
                                <span className="text-[#4a5b6e]">Donations</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm">
                                <span className="text-2xl font-extrabold text-[#0F2B4D]">£0</span>
                                <span className="text-[#4a5b6e]">Hidden Fees</span>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 rounded-2xl border border-[#1f608f]/20 bg-white/60 p-4 backdrop-blur-sm">
                                <i className="fas fa-shield-alt text-2xl text-[#1e6a8c]"></i>
                                <p><strong>Regulated & Trusted</strong> — FCA compliant escrow, real-time NGN/GBP conversion.</p>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border border-[#1f608f]/20 bg-white/60 p-4 backdrop-blur-sm">
                                <i className="fas fa-bolt text-2xl text-[#1e6a8c]"></i>
                                <p><strong>Lightning speed</strong> — same-day settlement for business & personal transfers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div ref={formRef} className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">
                        <h3 className="text-2xl font-bold md:text-3xl">Create Your Account</h3>
                        <p className="mb-5 mt-1 border-l-3 border-[#1f6a8c] pl-3 text-[#5b6e8c]">Join the future of cross-border payments.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Row: Indicators + Services */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 flex items-center gap-1 text-sm font-semibold text-[#1f2a44]">
                                        <i className="fas fa-chart-line text-[#2c7aa0]"></i> Indicators
                                    </label>
                                    <select
                                        value={indicator}
                                        onChange={(e) => setIndicator(e.target.value)}
                                        className={`w-full rounded-xl border-2 p-3 transition focus:border-[#2c7aa0] focus:outline-none focus:ring-2 focus:ring-[#2c7aa0]/20 ${errors.indicator ? 'border-red-400' : 'border-[#e2e8f0]'
                                            }`}
                                    >
                                        <option value="" disabled>Select indicator type</option>
                                        <option value="personal">Personal Transfer</option>
                                        <option value="business">Business Revenue</option>
                                        <option value="investment">Investment Flow</option>
                                        <option value="education">Education / Tuition</option>
                                    </select>
                                    {errors.indicator && <p className="mt-1 text-xs text-red-500">{errors.indicator}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 flex items-center gap-1 text-sm font-semibold text-[#1f2a44]">
                                        <i className="fas fa-concierge-bell text-[#2c7aa0]"></i> Services
                                    </label>
                                    <select
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        className={`w-full rounded-xl border-2 p-3 transition focus:border-[#2c7aa0] focus:outline-none focus:ring-2 focus:ring-[#2c7aa0]/20 ${errors.service ? 'border-red-400' : 'border-[#e2e8f0]'
                                            }`}
                                    >
                                        <option value="" disabled>Choose service</option>
                                        <option value="express">Express (1-2 days)</option>
                                        <option value="standard">Standard (3-5 days)</option>
                                        <option value="bulk">Bulk Business</option>
                                        <option value="instant">Instant Guard</option>
                                    </select>
                                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-1 flex items-center gap-1 text-sm font-semibold text-[#1f2a44]">
                                    <i className="fas fa-envelope text-[#2c7aa0]"></i> Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full rounded-xl border-2 p-3 transition focus:border-[#2c7aa0] focus:outline-none focus:ring-2 focus:ring-[#2c7aa0]/20 ${errors.email ? 'border-red-400' : 'border-[#e2e8f0]'
                                        }`}
                                    placeholder="hello@relmpay.com"
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="mb-1 flex items-center gap-1 text-sm font-semibold text-[#1f2a44]">
                                    <i className="fas fa-lock text-[#2c7aa0]"></i> Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full rounded-xl border-2 p-3 transition focus:border-[#2c7aa0] focus:outline-none focus:ring-2 focus:ring-[#2c7aa0]/20 ${errors.password ? 'border-red-400' : 'border-[#e2e8f0]'
                                        }`}
                                    placeholder="Create strong password"
                                />
                                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                            </div>

                            {/* Security Breaches Checkbox */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="securityBreaches"
                                    checked={securityAlerts}
                                    onChange={(e) => setSecurityAlerts(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-[#1f6a8c] focus:ring-[#1f6a8c]"
                                />
                                <label htmlFor="securityBreaches" className="flex items-center gap-1 text-sm font-medium text-[#1f2a44]">
                                    <i className="fas fa-shield-virus text-[#2c7aa0]"></i> Notify me about security breaches & data protection updates
                                </label>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    className={`mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1f6a8c] focus:ring-[#1f6a8c] ${errors.terms ? 'border-red-400' : ''
                                        }`}
                                />
                                <label htmlFor="terms" className="text-sm text-[#1f2a44]">
                                    I agree to the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.
                                </label>
                            </div>
                            {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#0F2B4D] to-[#1C537B] py-3 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                <i className="fas fa-user-plus"></i> Create Account
                            </button>

                            {/* Social Signup */}
                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-500">Or sign up with:</p>
                                <div className="mt-2 flex justify-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleSocialSignup('Google')}
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 hover:text-[#0F2B4D]"
                                    >
                                        <FaGoogle className="text-lg" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleSocialSignup('Apple')}
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 hover:text-[#0F2B4D]"
                                    >
                                        <FaApple className="text-xl" />
                                    </button>
                                </div>
                                <p className="mt-3 text-sm">
                                    Already have an account? <a href="#" className="font-semibold text-[#1f6a8c] hover:underline">Login →</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Signup;