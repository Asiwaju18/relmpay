import React from 'react';

const ForIndividual = () => {
    return (
        <section id="forindividuals" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#0b123f]">For Individuals</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Manage your crypto payments securely with fast settlement and low fees.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {['Secure Payment', 'Instant Settlement', 'Multi-Currency'].map((item) => (
                        <div key={item} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                            <h3 className="text-2xl font-semibold text-[#1d2b6b] mb-4">{item}</h3>
                            <p className="text-gray-600">
                                Experience a smooth, compliant workflow built for individuals and freelancers.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForIndividual;
