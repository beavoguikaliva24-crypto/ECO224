export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Bienvenue sur votre Dashboard</h1>
      
      {/* Grille de statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Total Élèves</div>
          <div className="stat-value text-primary">124</div>
          <div className="stat-desc">↗︎ 12 (ce mois-ci)</div>
        </div>
        
        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Classes actives</div>
          <div className="stat-value text-secondary">8</div>
          <div className="stat-desc">Toutes sections confondues</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Paiements en attente</div>
          <div className="stat-value text-warning">5</div>
          <div className="stat-desc">Action requise</div>
        </div>
      </div>
    </div>
  );
}