import React from 'react';
import homeBanner from '../assets/profile_banner.png'; 
import bankImg from '../assets/icons/bankicon.svg';
import business from'../assets/icons/business.svg';
import kyc from'../assets/icons/kyc.svg';
import order_qr from '../assets/icons/order_qr.svg';
import smart_speaker from '../assets/icons/smart_speaker.svg';
import pos_machine from '../assets/icons/pos_machine.svg';
import payment_setting from '../assets/icons/payment_setting.svg';
import manage_staff from '../assets/icons/manage_staff.svg';
import change_language from '../assets/icons/change_language.svg';


const Icon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


 const BankIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={bankImg}
      alt="Bank Icon"
      className="w-full h-full object-cover"
    />
  </div>
 );

const BusinessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={business}
      alt="business Icon"
      className="w-full h-full object-cover"
    />
  </div>
);

const KycIcon: React.FC<{ className?: string }> = ({ className }) =>(
    <div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={kyc}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div> 

);


const OrderQrIcon: React.FC<{ className?: string }> = ({ className }) =>(
<div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={order_qr}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div> 

);   


const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);
const SmartSpeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
<div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={smart_speaker}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div> 

); 

const PosMachineIcon: React.FC<{ className?: string }> = ({ className }) => (
<div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={pos_machine}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div>
);
const PaymentSettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
<div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={payment_setting}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div>
);

const ManageStaffIcon: React.FC<{ className?: string }> = ({ className }) => (

    <div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={manage_staff}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div>
);

const ChangeLanguageIcon: React.FC<{ className?: string }> = ({ className }) => (
<div className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
    <img
      src={change_language}
      alt="Kyc Icon"
      className="w-full h-full object-cover"
    />
  </div>
);


const PosDeviceBanner: React.FC = () => {
    return (
        <div className="mb-8">
            <img 
                src={homeBanner} 
                alt="Pay 1 rupee per month for the QPay POS Device" 
                className="w-full h-auto rounded-2xl shadow-lg"
            />
        </div>
    );
};

interface ProfileInfoCardProps {
    icon: React.ReactNode;
    title: React.ReactNode; 
    description: string;
}

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ icon, title, description }) => (
    <div className="relative bg-[#f8fbf8] p-6 rounded-2xl shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow duration-300">
        
        <ChevronRightIcon className="absolute top-4 right-4 text-green-400 w-4 h-4" />

         <div className="bg-[#348a5b] p-4 rounded-full mb-3">
            {icon}
        </div>
<p className="font-bold text-green-800 leading-tight">{title}</p>
<p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
);


interface SectionCardProps {
    title: string;
    children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {children}
        </div>
    </div>
);

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label }) => (
    <div className="flex flex-col items-center text-center space-y-2 cursor-pointer group flex-1">
        <div className="bg-gray-50 p-4 rounded-2xl transition-all duration-300 group-hover:bg-gray-100">
            {icon}
        </div>
        <p className="text-sm font-medium text-gray-800 w-20 leading-tight">{label}</p>
    </div>
);


const ProfilePage: React.FC = () => {
    return (
    
        <div className="p-4 sm:p-6 bg-white min-h-screen font-sans">
            
            <PosDeviceBanner />
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <ProfileInfoCard 
                    icon={<BankIcon className="w-6 h-6 text-white" />} 
                    title="XXXX 9820" 
                    description="ICICI Bank | Chennai Egmore Branch" 
                />
                <ProfileInfoCard 
                    icon={<BusinessIcon className="w-6 h-6 text-white" />} 
                    title={<>Business<br/>Profile</>}
                    description="View and edit your business details" 
                />
                <ProfileInfoCard 
                    icon={<KycIcon className="w-6 h-6 text-white" />} 
                    title={<>KYC<br/>Verification</>} 
                    description="Unlock exclusive benefits with KYC" 
                />
                <ProfileInfoCard 
                    icon={<OrderQrIcon className="w-6 h-6 text-white" />} 
                    title="Order QR" 
                    description="Get paid, manage & order QRs" 
                />
            </div>

            {/* Management Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SectionCard title="Business Services">
                    <ActionButton icon={<SmartSpeakerIcon />} label="Smart Speaker" />
                    <ActionButton icon={<PosMachineIcon />} label="POS Machine" />
                </SectionCard>

                <SectionCard title="Manage Business">
                    <ActionButton icon={<PaymentSettingsIcon />} label="Payment Settings" />
                    <ActionButton icon={<ManageStaffIcon />} label="Manage Staff" />
                    <ActionButton icon={<ChangeLanguageIcon />} label="Change Language" />
                </SectionCard>
            </div>
        </div>
    );
};

export default ProfilePage;