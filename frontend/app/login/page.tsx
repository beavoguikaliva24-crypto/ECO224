"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // On s'assure que l'URL ne finit pas par un slash pour éviter les doubles //
  const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/login/`, {
        username,
        password
      });
      
      // ON SUPPRIME LE STOCKAGE DES TOKENS
      // Au lieu du token, on stocke les infos utilisateur si besoin
      localStorage.setItem('user_info', JSON.stringify(res.data.user));
      
      toast.success('Connexion réussie !');
      router.push('/dashboard');

    } catch (error: any) {
      const message = error.response?.data?.error || "Erreur de connexion";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }; 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold text-center mb-4">Eco1</h1>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Utilisateur</span>
              </label>
              <input 
                type="text" 
                placeholder="Ex: admin"
                className="input input-bordered focus:input-primary" 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                disabled={loading}
              />
            </div>
            
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-semibold">Mot de passe</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="input input-bordered focus:input-primary" 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                disabled={loading}
              />
            </div>
            
            <div className="form-control mt-8">
              <button 
                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`} 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Vérification...' : 'Se connecter'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}