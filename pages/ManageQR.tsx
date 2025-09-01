import React, { useState } from 'react';
import { DownloadIcon, ShareIcon, ChevronRightIcon, CopyIcon, CheckCircleIcon, ChevronDownIcon } from '../components/Icons';
import AppLogo from "../assets/icons/app_logo.svg";

type Tab = 'active' | 'requests';

const ActiveQRItem: React.FC<{ id: string; desc: string; terminal: string }> = ({ id, desc, terminal }) => (
  <div className="flex items-center justify-between py-5 cursor-pointer">
    <div className="flex items-center space-x-4">
      <div className="bg-white p-1.5 rounded-lg shadow-md border border-gray-100">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=${id}`}
          alt={`QR code for ${id}`}
          className="w-16 h-16 rounded-md"
        />
      </div>
      <div>
        <p className="font-bold text-base text-gray-900">{id}</p>
        <p className="text-sm text-gray-700">{desc}</p>
        <p className="text-sm text-gray-400 mt-1">{terminal}</p>
      </div>
    </div>
    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
  </div>
);

const QRRequestItem: React.FC<{ title: string; address: string; date: string; status: string }> = ({ title, address, date, status }) => (
  <div className="py-4">
    <div className="flex items-start space-x-4">
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${title}`}
        alt="QR small"
        className="rounded-md flex-shrink-0"
      />
      <div>
        <p className="font-semibold text-sm text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{address}</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
    <button className="mt-3 w-full flex items-center justify-between p-2.5 rounded-lg bg-brand-green-extralight text-brand-green-dark font-semibold text-sm transition-colors hover:bg-green-100">
      <div className="flex items-center space-x-2">
        <CheckCircleIcon className="w-5 h-5 text-current" />
        <span>{status}</span>
      </div>
      <ChevronDownIcon className="w-5 h-5" />
    </button>
  </div>
);

const ManageQRPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('active');

  const qrCodes = [
    { id: 'Q2019465791', desc: 'All Marketing Sales-MS1903041155331648980231', terminal: 'Terminal 1' },
    { id: 'Q2019465792', desc: 'All Marketing Sales-MS1903041155331648980231', terminal: 'Terminal 2' },
    { id: 'Q2019465793', desc: 'All Marketing Sales-MS1903041155331648980231', terminal: 'Terminal 3' },
  ];

  const qrRequests = [
    { title: 'All Marketing Sales', address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.", date: "Requested on 26.04.202", status: 'QR Request Accepted' },
    { title: 'All Marketing Sales', address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.", date: "Requested on 26.04.202", status: 'QR Request Accepted' },
  ];

  return (
    <div className="font-sans bg-white p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Manage QR/POS</h1>

      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6">
        {/* QR Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg flex flex-col items-center text-center lg:col-span-2">
          <img src={AppLogo} alt="Pay Business Logo" className="h-8 mb-6" />
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=UPI-ID-9876543210@qpay"
            alt="Main QR Code"
            className="rounded-lg w-48 sm:w-60"
          />
          <div className="flex items-center space-x-2 mt-6">
            <p className="font-semibold text-gray-700 text-sm sm:text-base">UPI ID: 9876543210@qpay</p>
            <button
              onClick={() => navigator.clipboard.writeText('9876543210@qpay')}
              className="text-brand-green-dark hover:text-brand-green"
              aria-label="Copy UPI ID"
            >
              <CopyIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">Ibrahim Mohammedali</p>

          {/* Buttons stacked on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
            <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              <DownloadIcon />
              <span>Download</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              <ShareIcon />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* QR List / Requests */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-lg lg:col-span-3">
          <div className="bg-gray-100 p-1 rounded-full flex">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 py-2 px-4 font-semibold rounded-full transition-colors duration-300 text-sm ${activeTab === 'active' ? 'bg-brand-green-dark text-white shadow' : 'text-gray-500'}`}
            >
              Active QR Codes
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex-1 py-2 px-4 font-semibold rounded-full transition-colors duration-300 text-sm ${activeTab === 'requests' ? 'bg-brand-green-dark text-white shadow' : 'text-gray-500'}`}
            >
              QR Code Requests
            </button>
          </div>

          <div className="mt-4">
            {activeTab === 'active' && (
              <div className="divide-y divide-gray-100">
                {qrCodes.map((qr, i) => (
                  <ActiveQRItem key={i} {...qr} />
                ))}
              </div>
            )}
            {activeTab === 'requests' && (
              <div className="divide-y divide-gray-100">
                {qrRequests.map((req, i) => (
                  <QRRequestItem key={i} {...req} />
                ))}
              </div>
            )}
          </div>

          <button className="mt-6 w-full bg-brand-green-dark text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Request more QR Codes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageQRPage;
