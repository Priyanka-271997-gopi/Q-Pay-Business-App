import React, { useState, useEffect } from 'react';
import { Transaction } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, PhonePeIcon, GPayIcon, BharatPeIcon, PaytmIcon } from '../components/Icons';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk';
const API_BASE_URL = 'http://64.227.189.27/wallet/api/v1/transaction_history';

const getStatusChip = (status: string) => {
    switch (status.toLowerCase()) {
        case 'success':
            return <span className="px-2.5 py-1 text-xs font-semibold text-status-success border border-status-success bg-green-50 rounded-md">Success</span>;
        case 'pending':
            return <span className="px-2.5 py-1 text-xs font-semibold text-status-pending border border-status-pending bg-yellow-50 rounded-md">Pending</span>;
        case 'failed':
            return <span className="px-2.5 py-1 text-xs font-semibold text-status-failed border border-status-failed bg-red-50 rounded-md">Failed</span>;
        default:
            return <span className="px-2.5 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-md">{status}</span>;
    }
};

const getAccountIcon = (id: number) => {
    const icons = [<BharatPeIcon />, <PhonePeIcon />, <GPayIcon />, <PaytmIcon />];
    const index = id % icons.length;
    return React.cloneElement(icons[index], { className: 'w-5 h-5 rounded-full' });
};

const Pagination: React.FC<{ currentPage: number, totalPages: number, onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push('...');
        
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        if(currentPage <= 2) {
           start = 2;
           end = 3;
        }
        if(currentPage >= totalPages -1) {
            start = totalPages - 2;
            end = totalPages - 1;
        }

        for (let i = start; i <= end; i++) pages.push(i);

        if (currentPage < totalPages - 2) pages.push('...');
        pages.push(totalPages);
    }
    
    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            {pages.map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
                            currentPage === page ? 'bg-brand-green-dark text-white' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="px-2 text-gray-500">...</span>
                )
            )}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
        </div>
    );
};

const TransactionHistoryPage: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(0);

    const totalPages = 8;
    const currentPage = page + 1;

    const fetchTransactions = async (pageNum: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}?service_id=111&page=${pageNum}`, {
                headers: { 'Authorization': `Bearer ${API_TOKEN}` }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data: Transaction[] = await response.json();
            setTransactions(data);
        } catch (err) {
            setError('Failed to fetch transaction history.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions(page);
    }, [page]);

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage - 1);
        }
    };
    
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Transaction History</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Date & Time</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Account</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Amount</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
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
                                 <tr key={tx.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 font-semibold text-gray-800">{tx.name}</td>
                                    <td className="px-4 py-4 text-gray-600">{formatDate(tx.created_at)}</td>
                                    <td className="px-4 py-4 text-gray-600">
                                        <div className="flex items-center space-x-2">
                                            <span>From</span>
                                            {getAccountIcon(tx.id)}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-800">₹{parseFloat(tx.amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    <td className="px-4 py-4">{getStatusChip(tx.status)}</td>
                                    <td className="px-4 py-4">
                                        <a href="#" className="font-semibold text-brand-green-dark hover:underline">View</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {!loading && !error && transactions.length > 0 && (
                     <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
            </div>
        </div>
    );
};

export default TransactionHistoryPage;