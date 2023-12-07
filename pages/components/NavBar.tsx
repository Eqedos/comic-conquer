// components/NavBar.js
const NavBar = () => {
    return (
      <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-800">
        <a href="#" className="font-bold text-2xl text-white hover:text-gray-300 transition duration-300">ComicConquer</a>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">How it Works</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Create</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Gallery</a>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  