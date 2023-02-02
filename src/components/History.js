import '../index.css'

function History() {
  return (
    <div>   
    <h1 className="rounded-t-xl text-center text-white py-2 font-semibold bg-gradient-to-r from-orange-700  to-red-900 ...">Visit Information</h1>
  <table>
  <tr className='bg-gradient-to-r from-orange-700  to-red-900 ... text-white '>
    <th>Time</th>
    <th>Visiting Staff</th>
    <th>Visit Reason</th>
   
  </tr>
  <tr>
    <td>00:06, 12/10/22</td>
    <td>Maria Anders</td>
    <td>To give tablets</td>
   
  </tr>
  <tr>
    <td>07:45, 16/10/22</td>
    <td>Amber Heard</td>
    <td>Measure blood presure</td>
    
  </tr>
</table>    
    </div>
  );
}

export default History;
