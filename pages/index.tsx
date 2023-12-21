import NavBar from "./components/NavBar"; // Adjust the path based on your file structure

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-100">
      <NavBar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Character World Conquest
          </h1>
          <p className="mt-6 text-xl md:text-1xl">
            Describe your ultimate character and watch them conquer the world in an epic comic saga. With a few keystrokes, unleash the power of storytelling and witness your creation's rise to glory.
          </p>
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <input type="text" className="px-4 py-3 bg-gray-800 rounded-md text-gray-300 leading-tight focus:outline-none focus:shadow-outline w-full md:w-auto flex-grow" />
            <button className="bg-blue-600 text-gray-900 font-bold py-3 px-8 rounded-md text-lg md:text-xl hover:bg-blue-700 transition-colors duration-300">
              Create
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
