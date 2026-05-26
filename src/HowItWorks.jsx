import React from 'react';

const HowItWorks = () => {
    return (
        <section id="howitworks" className="bg-[#f7f8fc] py-20 border-t-2 border-purple-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-[#0b123f]">How RelmPay Works</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Securely connect your wallet, authorize transactions, and settle funds instantly across supported rails.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-[#1f4d78] text-white flex items-center justify-center font-bold">1</div>
                                <div className="w-2px h-full bg-purple-400 mt-2" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#0b123f]">Connect Your Wallet</h3>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Link a CEX or self-custodial wallet to access currencies, balances, and instant payment rails.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-[#1f4d78] text-white flex items-center justify-center font-bold">2</div>
                                <div className="w-2px h-full bg-purple-400 mt-2" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#0b123f]">Authorize Securely</h3>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Confirm transfers with a secure PIN and optional biometric authentication, keeping your assets protected.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-[#1f4d78] text-white flex items-center justify-center font-bold">3</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#0b123f]">Settle Instantly</h3>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Relmpay settles your payout instantly in supported currencies so you can move funds faster.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="border border-[#2f2f83] rounded-[40px] p-6 bg-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <img src="/assets/Background+Border+Shadow.png" alt="RelmPay interface" className="w-full max-w-[350px] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
