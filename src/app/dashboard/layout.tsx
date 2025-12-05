'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({children}: { 
    children: React.ReactNode;
}) {

    const router = useRouter();
    const token = getToken();

    if (!token) {
        router.push('/login');
        return null;
}

    function handleLogout() {
        logoutUser();
        router.push('/login');
}

    return (

        <div className="p-6 bg-slate-900">
        <header className="flex justify-between items-center mb-6">
        <h1 className="text-8xl font-bold text-white ">Dashboard</h1>
        <Button variant="destructive" onClick={handleLogout} className="bg-slate-400 text-black">Logout</Button> 
        </header>

        {children}
        </div>
    );
}