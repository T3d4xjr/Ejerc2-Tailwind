import Image from "next/image";

export default function GridExercise() {
  return (
    <div className="min-h-screen  justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Ejercicio Tailwind 2: Explorando Grid</h1>
      
      <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md">
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">1</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">2</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">3</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">4</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">5</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">6</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">7</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">8</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">9</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">10</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">11</div>
        <div className="bg-blue-500 text-white flex items-center justify-center h-20 font-bold text-xl">12</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 p-4 mt-8 bg-white rounded-lg shadow-md">
        <div className="bg-red-500 text-white flex items-center justify-center h-20 font-bold text-xl col-span-2">1</div>
        <div className="bg-green-500 text-white flex items-center justify-center h-20 font-bold text-xl">2</div>
        <div className="bg-yellow-500 text-white flex items-center justify-center h-20 font-bold text-xl">3</div>
        <div className="bg-purple-500 text-white flex items-center justify-center h-20 font-bold text-xl">4</div>
        <div className="bg-pink-500 text-white flex items-center justify-center h-20 font-bold text-xl row-span-2">5</div>
        <div className="bg-indigo-500 text-white flex items-center justify-center h-20 font-bold text-xl">6</div>
        <div className="bg-teal-500 text-white flex items-center justify-center h-20 font-bold text-xl">7</div>
        <div className="bg-gray-500 text-white flex items-center justify-center h-20 font-bold text-xl">8</div>
        <div className="bg-orange-500 text-white flex items-center justify-center h-20 font-bold text-xl">9</div>
        <div className="bg-red-500 text-white flex items-center justify-center h-20 font-bold text-xl">10</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 p-4 mt-8 bg-white rounded-lg shadow-md place-items-center">
        <div className="bg-orange-500 text-white flex items-center justify-center h-20 w-full font-bold text-xl">A</div>
        <div className="bg-blue-700 text-white flex items-center justify-center h-20 w-full font-bold text-xl">B</div>
        <div className="bg-gray-700 text-white flex items-center justify-center h-20 w-full font-bold text-xl">C</div>
      </div>
      
      {/* Botón de reinicio */}
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Reiniciar diseño
      </button>
    </div>
  );
}
