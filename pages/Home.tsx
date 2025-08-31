import React from 'react';
import homeBanner from '../assets/home_banner.png'; 

const ChevronRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-white p-4 rounded-lg text-center shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <p className="text-lg font-bold" style={{ color: '#4D8B55' }}>{value}</p>
        <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
);

const TransactionItem: React.FC<{ name: string; date: string; amount: string; }> = ({ name, date, amount }) => (
    <div className="flex justify-between items-center py-3">
        <div>
            <p className="font-semibold text-sm text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{date}</p>
        </div>
        <p className="font-semibold text-sm text-gray-800">+₹{amount}</p>
    </div>
);

const HomePage: React.FC = () => {
    const progress: number = 30;
    const radius: number = 52;
    const stroke: number = 8;
    const normalizedRadius: number = radius - stroke / 2;
    const circumference: number = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset: number = circumference - (progress / 100) * circumference;

    return (
        <div className="space-y-6 p-4 sm:p-6 bg-gray-50">
            
            <div>
              
                <img 
                    src={homeBanner}
                    alt="QPay POS Device Offer" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="1.5k" label="Account Holders" />
                <StatCard value="2.1k" label="Transactions" />
                <StatCard value="2.3k" label="Settlement" />
                <StatCard value="45k" label="QR Orders" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* --- Profile Card --- */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                    <h3 className="font-semibold text-gray-400 text-xs uppercase tracking-wider mb-4">PROFILE</h3>
                    <div className="flex-grow flex flex-col sm:flex-row items-center sm:space-x-6">
                        <div className="relative w-32 h-32 flex-shrink-0">
                            <svg
                                height="100%"
                                width="100%"
                                viewBox="0 0 120 120"
                                className="-rotate-90"
                            >
                                <circle className="text-gray-200" stroke="currentColor" strokeWidth={stroke} fill="transparent" r={normalizedRadius} cx={radius + stroke / 2} cy={radius + stroke / 2} />
                                <circle
                                    stroke="#4D8B55"
                                    strokeWidth={stroke}
                                    strokeDasharray={`${circumference} ${circumference}`}
                                    style={{ strokeDashoffset }}
                                    strokeLinecap="round"
                                    fill="transparent"
                                    r={normalizedRadius}
                                    cx={radius + stroke / 2}
                                    cy={radius + stroke / 2}
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold" style={{ color: '#4D8B55' }}>
                                {progress}%
                            </span>
                        </div>
                        <div className="mt-4 sm:mt-0 text-center sm:text-left">
                            <h4 className="font-semibold text-gray-800 text-lg">Complete your profile</h4>
                            <ul className="mt-2 space-y-1.5 text-gray-500">
                                <li className="flex items-center justify-center sm:justify-start"><span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>Personal KYC</li>
                                <li className="flex items-center justify-center sm:justify-start"><span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>Company KYC</li>
                                <li className="flex items-center justify-center sm:justify-start"><span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>Onboarding details</li>
                            </ul>
                        </div>
                    </div>
                    <button
                        className="mt-8 w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#4D8B55' }}
                    >
                        Next
                    </button>
                </div>

                {/* --- QR Card --- */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                    <h3 className="font-semibold text-gray-400 text-xs uppercase tracking-wider mb-4">QR</h3>
                    <div className="flex-grow flex flex-col sm:flex-row items-center sm:space-x-6">
                        <div className="flex-shrink-0">
                             <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Example" alt="QR Code" className="w-32 h-32" />
                        </div>
                        <div className="mt-4 sm:mt-0 text-center sm:text-left">
                            <h4 className="font-semibold text-gray-800 text-lg">Order QR</h4>
                            <ul className="mt-2 space-y-1.5 text-gray-500">
                                <li className="flex items-center justify-center sm:justify-start"><span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>Receive Payment</li>
                                <li className="flex items-center justify-center sm:justify-start"><span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>Order new QRs</li>
                                <li className="flex items-center justify-center sm:justify-start"><span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>Download QR</li>
                            </ul>
                        </div>
                    </div>
                    <button
                        className="mt-8 w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#4D8B55' }}
                    >
                        View more
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="font-semibold text-gray-400 text-xs uppercase tracking-wider">SETTLEMENT</h3>
                            <p className="font-bold text-xl text-gray-800">₹1,23,816.19</p>
                        </div>
                        <a href="#settlement" className="text-gray-400 hover:text-gray-600">
                            <ChevronRightIcon />
                        </a>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <TransactionItem name="Ibrahim" date="23 Oct, 09:15 AM" amount="90.00" />
                        <TransactionItem name="Ibrahim" date="23 Oct, 09:15 AM" amount="90.00" />
                        <TransactionItem name="Ibrahim" date="23 Oct, 09:15 AM" amount="90.00" />
                    </div>
                    <button className="mt-4 w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#4D8B55' }}>Settle Now</button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="font-semibold text-gray-400 text-xs uppercase tracking-wider">TOTAL TRANSACTIONS</h3>
                            <p className="font-bold text-xl text-gray-800">₹1,23,816.19</p>
                        </div>
                        <a href="#transactions" className="text-gray-400 hover:text-gray-600">
                            <ChevronRightIcon />
                        </a>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <TransactionItem name="Ibrahim" date="23 Oct, 09:15 AM" amount="90.00" />
                        <TransactionItem name="Ibrahim" date="23 Oct, 09:15 AM" amount="90.00" />
                        <TransactionItem name="Ibrahim" date="23 Oct, 09:15 AM" amount="90.00" />
                    </div>
                    <button className="mt-4 w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#4D8B55' }}>View All</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;