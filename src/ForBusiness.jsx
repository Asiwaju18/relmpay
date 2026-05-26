

import React from 'react';

const ForBusiness = () => {
    return (
        <section id="forbusiness" className="bg-[#eef1ff] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0b123f]">Built for Business</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Streamline corporate crypto payments with compliance, liquidity, and automated reporting.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                        <h3 className="text-2xl font-semibold text-[#1d2b6b]">Compliance First</h3>
                        <p className="mt-4 text-gray-600">Designed to support business requirements across UK and Nigeria.</p>
                    </div>
                    <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                        <h3 className="text-2xl font-semibold text-[#1d2b6b]">Fast Settlement</h3>
                        <p className="mt-4 text-gray-600">Move funds quickly with real-time liquidity and bank payout support.</p>
                    </div>
                    <div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                        <h3 className="text-2xl font-semibold text-[#1d2b6b]">Secure Access</h3>
                        <p className="mt-4 text-gray-600">Authorized access, audit trails, and enterprise-grade control.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForBusiness;







