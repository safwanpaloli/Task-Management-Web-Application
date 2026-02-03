
export type Task = {
    id: number;
    title: string;
    description?: string;
    status: 'pending' | 'in_progress' | 'completed';
    due_date?: string;
    user_id: number;
};