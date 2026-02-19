"use client"; // <--- AJOUTE CETTE LIGNE ICI

import { Beaker } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Home() {
  const notify = () => toast.success('Bravo ! DaisyUI et Lucide fonctionnent.');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold text-primary">Projet Eco1</h1>
      <button 
        className="btn btn-primary" 
        onClick={notify}
      >
        <Beaker className="w-5 h-5 mr-2" />
        Tester les outils
      </button>
    </div>
  );
}