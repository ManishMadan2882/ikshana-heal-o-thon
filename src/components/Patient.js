import '../index.css'
import statIcon from  '../images/stats.png'
function Patient() {
  return (
    <div className='text-black m-2'>
    <h1 className='text-xl'>Jesse Pinkman</h1>
      <div className="flex flex-wrap justify-evenly">
        <div className='border rounded-2xl w-[30%] text-center p-2 bg-slate-100 drop-shadow-xl m-1'>
           <button className='float-right '>
           <img src={statIcon} alt="Statistics" className='w-7 '></img>
           </button>
           <h1 className='text-xl'>Weight</h1>
           <span className='text-3xl'>78 kg</span>
        </div>

        <div className='border  rounded-2xl w-[30%] text-center p-2 bg-slate-100 drop-shadow-xl m-1 '>
        <button className='float-right '>
           <img src={statIcon} alt="Statistics" className='w-7 '></img>
           </button>
           <h1 className='text-xl'>Age</h1>
           <span className='text-3xl'>40</span>
        </div>

        <div className='border rounded-2xl w-[30%] text-center p-2 bg-slate-100 drop-shadow-xl m-1'>
        <button className='float-right '>
           <img src={statIcon} alt="Statistics" className='w-7 '></img>
           </button>
           <h1 className='text-xl'>Heart Rate</h1>
           <span className='text-3xl'>75</span>
           
        </div>
      </div>
    </div>
  );
}

export default Patient;
