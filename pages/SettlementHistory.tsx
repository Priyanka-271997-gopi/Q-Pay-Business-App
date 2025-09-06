import React, { useState, useEffect } from 'react';

export type Transaction = {
  id: string | number;
  transaction_id?: string;
  name?: string;
  created_date: string;
  service_type?: 'IN' | 'OUT';
  account?: string;
  amount: string | number;
  status: string;
};


const ClockIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const SettleIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5L22 22" />
  </svg>
);
const SearchIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const FilterIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-8-8h16" />
    <path d="M4 6h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronLeftIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);
const ChevronRightIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);
const CloseIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const BankIconSolid: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V3.5A1.5 1.5 0 0015.5 2h-11zM5 14a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zM5 7a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1H5z" clipRule="evenodd" />
    </svg>
);
const SettledIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h16.5M3.75 9h16.5m-16.5 4.5h16.5M3.75 18h16.5" />
    </svg>
);
const PhonePeIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" aria-hidden="true">
        <path fill="#5f259f" d="M204.2 39.2c-1.2 3.1-2.9 5.8-4.9 8.2-12.2 14.6-29.2 25.3-48.4 32.5-3.3-1-6.7-1.4-10-1.4-13.7 0-26.7 4.5-37.3 12.5-12.2 9.1-21.1 21.8-25.3 36.3-1.3 4.4-2.1 9-2.1 13.8 0 11.2 3 21.8 8.6 31.1-12.7.9-24.9-1.9-36.2-7.8-3.3-1.7-7-2.6-10.7-2.6-7.3 0-14.2 2.6-19.6 7.4-4.8 4.2-8 10-9.2 16.4-.7 3.9-1 7.8-1 11.9 0 18.4 7.6 35.7 21 48.1 13.3 12.4 30.6 18.9 48.6 18.9 14.2 0 28-4.3 40.2-12.4 13.1-8.8 23.3-21.1 29.3-35.3 1.8-4.2 3.1-8.6 4-13.1 14.3-4.2 27.5-12.1 38.5-22.9 13.2-13.1 22.4-29.7 26.2-47.5 1-4.7 1.5-9.5 1.5-14.3-.2-25.4-10.4-49.8-29.3-67.6-6.1-5.7-13-10.6-20.4-14.5z"></path>
    </svg>
);



const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk';
const API_BASE_URL = '/wallet/api/v1/transaction_history';



const SettleNowModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Manage QR/POS</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5">
          <div className="space-y-3 mb-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3 text-gray-700">
                <BankIconSolid className="w-5 h-5" />
                <span>Today's Total Collection</span>
              </div>
              <span className="font-bold text-gray-900">₹1,023</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <SettledIcon className="w-5 h-5 text-green-600"/>
                <span className="text-green-600 font-semibold">Already Settled</span>
              </div>
              <span className="font-medium text-gray-500">₹100</span>
            </div>
          </div>

          <hr className="border-t border-gray-200" />
          
          
          <div className="my-5">
            <h3 className="text-xs uppercase text-gray-400 font-bold mb-4">Settlement Calculation</h3>
            <div className="flex justify-between items-start">
              <div className="space-y-3 text-sm text-gray-600">
                  <p>Amount yet to be settled</p>
                  <p>Past pending amount</p>
                  <p>Charges</p>
              </div>
              <div className="text-right text-sm">
                  <p className="font-semibold text-gray-800">IBRAHIM MOHAMMEDALI</p>
                  <p className="text-gray-500">0921U2AT27</p>
                  <p className="text-gray-500">07 Aug 2024</p>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-200" />

          
          <div className="flex justify-between items-center mt-5 font-bold">
            <div className="flex items-center space-x-3 text-gray-700">
                <BankIconSolid className="w-5 h-5" />
                <span>Today's Total Collection</span>
            </div>
            <span className="text-gray-900">₹1,023</span>
          </div>
        </div>

        
        <div className="bg-green-50 p-5 rounded-b-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-left">
                  <p className="text-gray-600">Tap 'Settle Now' to instantly get settlements in your bank account.</p>
                  <p className="font-bold text-green-700 mt-1">Settle Now is Chargeable</p>
              </div>
              <button className="w-full sm:w-auto flex-shrink-0 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Settle Now
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const getStatusChip = (status: string) => {
  if (!status) return null;
  switch (status.toLowerCase()) {
    case 'success':
      return <span className="px-3 py-1 text-sm font-semibold text-green-800 border border-green-300 bg-green-50 rounded-md">Success</span>;
    case 'pending':
      return <span className="px-3 py-1 text-sm font-semibold text-yellow-800 border border-yellow-300 bg-yellow-50 rounded-md">Pending</span>;
    case 'failed':
      return <span className="px-3 py-1 text-sm font-semibold text-red-800 border border-red-300 bg-red-50 rounded-md">Failed</span>;
    default:
      return <span className="px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md">{status}</span>;
  }
};

const getAccountIcon = () => {
    return <PhonePeIcon className="w-6 h-6 rounded-full" />;
};

const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  try {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  } catch (error) {
    console.error("Could not format date:", dateString, error);
    return '-';
  }
};

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void; }> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center space-x-2 mt-6 px-4 py-4">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50">
        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${currentPage === page ? 'bg-green-700 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
          {page}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50">
        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};



const SettlementHistoryPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTransactions = async (pageNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}?service_id=111&page=${pageNum}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      const data: Transaction[] = Array.isArray(json) ? json : json.data || [];
      const meta = json.meta || {};
      setTransactions(data);
      setTotalPages(meta.totalPages || 5);
    } catch (err) {
      setError('Failed to fetch transaction history. Check console.');
      console.error('API Fetch Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    
    <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <SettleNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Settlement History</h1>
          <button className="px-4 py-2 text-sm font-semibold text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Download statement
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <FilterIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <ClockIcon className="h-6 w-6 text-green-600" />
            <p className="text-sm text-gray-700">
              Today's total collection will be auto-settled by <span className="font-bold">08:00AM, 23rd Oct'22</span> Tomorrow.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <SettleIcon className="h-5 w-5" />
            <span>Settle Now!</span>
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Date & Time</th>
                  <th className="px-6 py-4 font-semibold">Account</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading && (
                  <tr><td colSpan={6} className="text-center py-10 text-gray-500">Loading transactions...</td></tr>
                )}
                {error && (
                  <tr><td colSpan={6} className="text-center py-10 text-red-500">{error}</td></tr>
                )}
                {!loading && !error && transactions.length === 0 && (
                  <tr><td colSpan={6} className="text-center py-10 text-gray-500">No transactions found.</td></tr>
                )}
                {!loading && !error && transactions.map((tx) => (
                  <tr key={tx.transaction_id || tx.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">{tx.name || 'Lisa'}</td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(tx.created_date)}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        {tx.service_type === 'IN' && <span>From</span>}
                        {getAccountIcon()}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      ₹{tx.amount ? parseFloat(String(tx.amount)).toLocaleString('en-IN') : '0.00'}
                    </td>
                    <td className="px-6 py-4">{getStatusChip(tx.status)}</td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-semibold text-green-600 hover:underline">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!loading && !error && transactions.length > 0 && (
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SettlementHistoryPage;
