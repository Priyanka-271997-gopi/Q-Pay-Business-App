import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import ManageQRPage from './pages/ManageQR';
import ProfilePage from './pages/Profile';
import SettlementHistoryPage from './pages/SettlementHistory';
import TransactionHistoryPage from './pages/TransactionHistory';
import { HistoryIcon, ProfileIcon, ChevronDownIcon, BharatConnectLogoIcon } from './components/Icons';
import AppLogo from './assets/icons/app_logo.svg';
import HomeIconSvg from './assets/icons/home_icon.svg';
import QRIconSvg from './assets/icons/qr_icon.svg';


const NavItem: React.FC<{ to: string; icon: React.ReactNode; children: React.ReactNode }> = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive ? 'bg-white text-brand-green-dark' : 'text-white hover:bg-white/20'
      }`
    }
  >
    <div className="flex items-center space-x-3">
        {icon}
        <span className="font-medium">{children}</span>
    </div>
  </NavLink>
);

const Sidebar: React.FC = () => {
    const location = useLocation();
    const isHistoryActive = location.pathname.startsWith('/history');
    const [isHistoryOpen, setIsHistoryOpen] = useState(isHistoryActive);
    
    useEffect(() => {
        if (isHistoryActive) {
            setIsHistoryOpen(true);
        }
    }, [isHistoryActive]);
  return (
    <div className="w-64 bg-brand-green-dark h-[calc(100vh-7rem)] flex flex-col p-4 sticky top-22 shrink-0 rounded-xl">
      <nav className="flex-1 flex flex-col space-y-2">
        <NavItem to="/" icon={<img src={HomeIconSvg} alt="Home Icon" className="w-6 h-6" />}>Home</NavItem>
        
        <NavItem to="/qr" icon={<img src={QRIconSvg} alt="QR Icon" className="w-6 h-6" />}>QR</NavItem>
        
        <div className={`rounded-lg transition-all duration-200 ${isHistoryOpen ? 'bg-white' : ''}`}>
            <button
                onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                    !isHistoryOpen && isHistoryActive ? 'bg-white text-brand-green-dark' : ''
                } ${
                    isHistoryOpen ? 'text-brand-green-dark' : 'text-white hover:bg-white/20'
                }`}
                aria-expanded={isHistoryOpen}
            >
                <div className="flex items-center space-x-3">
                    <HistoryIcon />
                    <span className="font-medium">History</span>
                </div>
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isHistoryOpen ? 'rotate-180' : ''}`} />
            </button>
            {isHistoryOpen && (
                <div className="pl-8 pr-4 pb-2 mt-1 space-y-1">
                    <NavLink
                        to="/history/transaction"
                        className={({ isActive }) => `flex items-center space-x-3 py-2 text-sm rounded-lg ${isActive ? 'font-semibold text-brand-green-dark' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                        <HistoryIcon className="w-5 h-5" />
                        <span>Transaction History</span>
                    </NavLink>
                    <NavLink
                        to="/history/settlement"
                        className={({ isActive }) => `flex items-center space-x-3 py-2 text-sm rounded-lg ${isActive ? 'font-semibold text-brand-green-dark' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                        <HistoryIcon className="w-5 h-5" />
                        <span>Settlement History</span>
                    </NavLink>
                </div>
            )}
        </div>

        <NavItem to="/profile" icon={<ProfileIcon />}>Profile</NavItem>
      </nav>
      <div className="mt-auto p-2">
        <BharatConnectLogoIcon />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-white px-8 h-16 flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
        <img src={AppLogo} alt="Pay Business Logo" className="h-8" />
        <div className="flex items-center space-x-4">
            <img src="https://i.pravatar.cc/40?u=thomas" alt="Thomas Shelby" className="w-10 h-10 rounded-full" />
            <div className="flex items-center space-x-2">
                <div>
                    <p className="text-xs text-gray-500">Hello</p>
                    <span className="font-semibold text-gray-800 text-sm">Thomas Shelby</span>
                </div>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </div>
        </div>
    </header>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <div className="flex p-6 gap-6">
          <Sidebar />
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

const NotFound: React.FC = () => (
    <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
    </div>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/qr" element={<ManageQRPage />} />
          <Route path="/history/settlement" element={<SettlementHistoryPage />} />
          <Route path="/history/transaction" element={<TransactionHistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;