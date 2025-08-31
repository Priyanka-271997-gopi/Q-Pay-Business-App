
export interface Transaction {
    id: number;
    name: string;
    created_at: string;
    account: string;
    amount: string;
    status: 'Success' | 'Pending' | 'Failed' | string;
}
