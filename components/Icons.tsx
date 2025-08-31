import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

export const QRIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h-1.5a1.5 1.5 0 00-1.5 1.5v5.25a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-5.25a1.5 1.5 0 00-1.5-1.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h-1.5a1.5 1.5 0 00-1.5 1.5v5.25a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-5.25a1.5 1.5 0 00-1.5-1.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5a6 6 0 10-12 0v1.5a6 6 0 006 6z" />
    </svg>
);

export const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);





export const BharatConnectLogoIcon: React.FC<React.ComponentProps<'div'>> = (props) => (
    <div className="bg-white p-2 rounded-lg flex items-center justify-center" {...props}>
        <span className="text-sm font-bold text-blue-600">BHARAT</span>
        <span className="text-sm font-bold text-orange-500">CONNECT</span>
    </div>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
);

export const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const BankIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.882 4h8.236a1 1 0 01.949.684l2.536 7.316H5.346l2.536-7.316A1 1 0 017.882 4z" />
    </svg>
);

export const BusinessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
    </svg>
);

export const KycIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4" />
    </svg>
);

export const OrderQrIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
);

export const SettleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const BankIconSolid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);

export const PhonePeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#5F259F"/>
        <path d="M15.29 11.14C15.29 10.28 15.01 9.54995 14.45 8.94995C13.89 8.34995 13.16 8.04995 12.26 8.04995H9.01999V16H10.51V12.7H12.11C12.7 12.7 13.2 12.55 13.6 12.25C14 11.95 14.2 11.53 14.2 10.99C14.2 10.47 14.04 10.05 13.72 9.73C13.4 9.41 12.98 9.25 12.46 9.25H10.51V10.45H12.26C12.56 10.45 12.79 10.54 12.95 10.72C13.11 10.9 13.19 11.12 13.19 11.38C13.19 11.64 13.11 11.85 12.95 12.01C12.79 12.17 12.56 12.25 12.26 12.25H10.51V16H12.82C13.72 16 14.46 15.7 15.04 15.1C15.62 14.5 15.91 13.73 15.91 12.79C15.91 12.2 15.75 11.69 15.43 11.27C15.59 11.19 15.72 11.08 15.82 10.94C15.92 10.8 15.97 10.64 15.97 10.46C15.97 10.16 15.86 9.91995 15.64 9.73995C15.42 9.55995 15.12 9.46995 14.74 9.46995H14.17C14.82 9.06995 15.29 8.45995 15.29 7.63995C15.29 6.81995 14.93 6.16995 14.21 5.68995C13.49 5.20995 12.52 4.96995 11.3 4.96995H9.01999V6.84995H11.21C11.91 6.84995 12.42 6.98995 12.74 7.26995C13.06 7.54995 13.22 7.91995 13.22 8.37995C13.22 8.83995 13.06 9.20995 12.74 9.48995C12.42 9.76995 11.91 9.90995 11.21 9.90995H9.01999V11.15H12.26C13.21 11.15 13.97 11.41 14.54 11.93C15.11 12.45 15.39 13.16 15.39 14.06C15.39 14.96 15.06 15.71 14.4 16.31C13.74 16.91 12.86 17.21 11.76 17.21H9.01999V19.03H11.76C13.31 19.03 14.54 18.63 15.45 17.83C16.36 17.03 16.81 15.96 16.81 14.62C16.81 13.8 16.63 13.06 16.27 12.4C16.8 12.1 17.16 11.64 17.35 11.02C17.41 11.52 17.21 11.92 16.75 12.22C16.29 12.52 15.82 12.67 15.34 12.67H14.2V11.14H15.29Z" fill="white"/>
    </svg>
);

export const GPayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#fff"/>
        <path d="M12.35 12.77V14.88H15.98C15.81 15.93 15.04 16.7 14.02 16.7C12.5 16.7 11.25 15.45 11.25 14C11.25 12.55 12.5 11.3 14.02 11.3C14.7 11.3 15.31 11.56 15.79 12.02L17.29 10.52C16.27 9.61 14.84 9 13 9C10.24 9 8 11.24 8 14C8 16.76 10.24 19 13 19C15.82 19 17.9 17.13 17.9 14.28C17.9 13.72 17.85 13.25 17.75 12.77H12.35Z" fill="#4285F4"/>
    </svg>
);

export const GenericPayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="10" fill="#42A5F5"/>
        <path d="M13 7L9 12H12L11 17L15 12H12L13 7Z" fill="white"/>
    </svg>
);

export const BharatPeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="10" fill="#20B57E"/>
        <path d="M12.58 7.5H9V16.5H12.58C14.96 16.5 16.5 14.98 16.5 12C16.5 9.02 14.96 7.5 12.58 7.5ZM12.58 14.5H11V9.5H12.58C13.84 9.5 14.5 10.16 14.5 12C14.5 13.84 13.84 14.5 12.58 14.5Z" fill="white"/>
    </svg>
);

export const PaytmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="10" fill="#00B9F1"/>
        <path d="M15.5 10.3H14.16L12.58 13.06L11.02 10.3H8.5V16.5H10.1V12.1L12.04 15.64H13.12L15.08 12.1V16.5H16.5V10.3H15.5Z" fill="white"/>
    </svg>
);

const defaultProps: IconProps = {
    className: "w-6 h-6 text-white",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
};

const secondaryIconProps: IconProps = {
    className: "w-8 h-8 text-gray-700",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: 1.2
};
const manageIconProps: IconProps = { ...secondaryIconProps, className: "w-8 h-8 text-green-800" };

export const SmartSpeakerIcon: React.FC<IconProps> = (props) => <svg {...secondaryIconProps} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5m-4.5 2.25h4.5m-4.5 2.25h4.5m-4.5 2.25h4.5M7.5 15h.008v.008H7.5V15zm.008-2.25h.008v.008H7.508v-.008zm0-2.25h.008v.008H7.508V10.5zm0-2.25h.008v.008H7.508V8.25z" /></svg>;
export const PosMachineIcon: React.FC<IconProps> = (props) => <svg {...secondaryIconProps} {...props}><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm14 8H5m11-4h-3m3 2h-3m-1 2h-3m3 2h-3" /></svg>;
export const PaymentSettingsIcon: React.FC<IconProps> = (props) => <svg {...manageIconProps} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>;
export const ManageStaffIcon: React.FC<IconProps> = (props) => <svg {...manageIconProps} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663c.257.542.483 1.12.654 1.742M9.879 10.879a3 3 0 100-4.242 3 3 0 000 4.242z" /></svg>;
export const ChangeLanguageIcon: React.FC<IconProps> = (props) => <svg {...manageIconProps} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.625M21 21l-5.25-11.625M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>;