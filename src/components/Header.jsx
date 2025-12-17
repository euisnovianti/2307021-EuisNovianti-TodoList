const Header = ({ nim, nama, onLogout, isLoggedIn }) => {
  return (
    <header className="bg-teal-50 border-b border-teal-200 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-800">Praktikum Web</h1>
        {isLoggedIn && (
          <div className="flex items-center gap-4">
            <span className="text-teal-700">Hi, {nama}</span>
            <button
              onClick={onLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;