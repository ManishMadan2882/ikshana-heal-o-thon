import '../index.css'
import defImg from '../images/dp.jpg'
function PatientInfo(){
    return(
        <div className="flex flex-wrap justify-evenly w-full">
        <div className=' rounded-2xl w-[30%] text-center p-2  drop-shadow-xl m-1'>
        <img src={defImg} alt="Profile" className='w-28 rounded-full inline drop-shadow-xl'></img>
          <div className="float-right text-2xl py-3 text-left">
            <h1 className='font-bold'>Patient</h1>
            <h1>Adam Waheed</h1>
          </div> 
           
        </div>


        <table className="text-left personal">
            <tr>
                <th>Age</th>
                <td>39</td>
            </tr>
            <tr>
                <th>Sex</th>
                <td>M</td>
            </tr>
            <tr>
                <th>Blood Group</th>
                <td>B+</td>
            </tr>
            <tr>
                <th>Ailment</th>
                <td>Myocardial inf.</td>
            </tr>
        </table>
        <table className="text-left personal" >
            <tr>
                <th>Check-in</th>
                <td>12/09/2022, 08:56 </td>
            </tr>
            <tr>
                <th>Department</th>
                <td>Cardiology</td>
            </tr>
            <tr>
                <th>Room</th>
                <td>206</td>
            </tr>
            <tr>
                <th>Bed</th>
                <td>2</td>
            </tr>
        </table>
      </div>
    );
}
export default PatientInfo;