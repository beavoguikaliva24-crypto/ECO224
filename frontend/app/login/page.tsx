"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username,
        password
      });
      
      // On stocke le token (Pour le middleware, il faudrait aussi le mettre en Cookie)
      document.cookie = `access_token=${res.data.access}; path=/; max-age=86400`;
      localStorage.setItem('access_token', res.data.access);
      
      toast.success('Connexion réussie !');
      router.push('/dashboard');
    } catch (error) {
      toast.error('Identifiants invalides');
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-2xl font-bold text-center">Connexion Eco1</h1>
            <div className="form-control">
              <label className="label"><span className="label-text">Nom d'utilisateur</span></label>
              <input type="text" placeholder="admin" className="input input-bordered" 
                onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Mot de passe</span></label>
              <input type="password" placeholder="password" className="input input-bordered" 
                onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Se connecter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}