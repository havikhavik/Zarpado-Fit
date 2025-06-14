import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('usuarioActivo');
    alert('Sesión cerrada correctamente.');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#0B3041] text-white font-poppins flex flex-col px-4 pb-10">
      {/* HEADER */}
      <div className="relative w-full flex items-center p-4 bg-gradient-to-r from-red-700 to-red-900 rounded-b-2xl shadow-lg mb-9 select-none">
        <button
          onClick={() => navigate('/catalogo')}
          aria-label="Volver al catálogo"
          className="absolute left-4 flex items-center justify-center w-10 h-10 rounded-full hover:bg-red-700/40 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h1 className="flex-1 text-center text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
          Ajustes
        </h1>
      </div>

      {/* OPCIONES */}
      <div className="flex flex-col gap-5 w-full">
        {[
          { label: 'Perfil', to: '/perfil' },
          { label: 'Seguridad y acceso a la cuenta', to: '/seguridad' },
          { label: 'Borrar historial', to: '/borrar-historial' },
          { label: 'Preguntas frecuentes', to: '/faq' },
        ].map(({ label, to }) => (
          <div
            key={to}
            onClick={() => navigate(to)}
            tabIndex={0}
            role="button"
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate(to)}
            className="bg-[#142a48] rounded-xl p-5 font-semibold text-lg flex justify-between items-center cursor-pointer shadow-md select-none
              transition-transform duration-200 ease-in-out
              hover:bg-red-700 hover:scale-105 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <span>{label}</span>
            <span className="text-2xl font-black select-none text-white transition-colors group-hover:text-red-300">
              &rsaquo;
            </span>
          </div>
        ))}
      </div>

      {/* BOTÓN CERRAR SESIÓN */}
      <div className="mt-auto flex justify-center w-full pt-12">
        <button
          onClick={cerrarSesion}
          className="bg-gradient-to-r from-red-700 to-red-900 text-white font-bold rounded-3xl py-4 px-10 shadow-lg
            hover:bg-red-800 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-600
            transition-transform duration-150 select-none"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Settings;
