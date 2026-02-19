import Link from 'next/link';
import { LayoutDashboard, Users, GraduationCap, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* CONTENU DE LA PAGE */}
      <div className="drawer-content flex flex-col bg-base-200">
        {/* Navbar pour mobile */}
        <div className="navbar bg-base-100 lg:hidden">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <div className="flex-1 text-xl font-bold px-2">Eco1</div>
        </div>
        
        {/* Ici s'affichera le contenu des pages (dashboard, eleves, etc.) */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* SIDEBAR (Barre latérale) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content gap-2">
          <li className="text-2xl font-bold px-4 py-6 text-primary">ECO 1</li>
          
          <li>
            <Link href="/dashboard" className="flex gap-4">
              <LayoutDashboard size={20} /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/eleves" className="flex gap-4">
              <Users size={20} /> Gestion Élèves
            </Link>
          </li>
          <li>
            <Link href="/dashboard/classes" className="flex gap-4">
              <GraduationCap size={20} /> Classes
            </Link>
          </li>
          
          <div className="mt-auto">
            <li className="text-error">
              <button onClick={() => {/* Ajoute ta fonction logout ici */}} className="flex gap-4">
                <LogOut size={20} /> Déconnexion
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}