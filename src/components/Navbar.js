import '../index.css'

function Navbar() {
  return (
    <div className="text-2xl text-black">
     <nav className='py-2 rounded-b-sm drop-shadow-lg '>
      <h1 className='urbanFont inline text-xl m-2 text-blue-200 font-semibold '>
        Ikshana
        <p className="text-orange-300 inline text-3xl">+</p>

      </h1>
      <ul id="navabar" className="inline text-xl    ">
        <li className="list-none mx-4 rounded-md p-1 bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-10 cursor-pointer">
          Doctors
        </li>

        <li className="list-none mx-4 rounded-md p-1 bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-10 cursor-pointer">
          Health workers
        </li>

        <li className="list-none mx-4 rounded-md p-1 bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-10 cursor-pointer">
          Patients
        </li>
      </ul>
      
     </nav>
    </div>
  );
}

export default Navbar;
