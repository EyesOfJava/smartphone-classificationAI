export default function Navbar() {

  return (

    <nav className="w-full bg-white border-b border-gray-200 px-10 py-5 flex items-center justify-between shadow-sm">

      <div>

        <h1 className="text-2xl font-bold text-gray-900">
          Smartphone Addiction AI
        </h1>

        <p className="text-gray-500 text-sm">
          Comparative Analysis Dashboard
        </p>

      </div>

      <div className="flex gap-6 text-gray-700 font-medium">

        <a href="#">Home</a>

        <a href="#">Prediction</a>

        <a href="#">Performance</a>

      </div>

    </nav>
  );
}