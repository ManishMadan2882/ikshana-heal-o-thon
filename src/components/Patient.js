import '../index.css'
import PatientInfo from './info';
import History from './History';
import Graph from './Graph';
import Card from './Card';
function Patient() {
 
  

  return (
    <div className='text-black m-2 ml-[140px]'>
      <PatientInfo/>  
     <div className='w-full flex flex-wrap justify-between'>
     <div className='flex flex-wrap max-w-[600px]  '>
     <Card   title="Weight" value="68kg"></Card>
     <Card   title="Body temperature" value="99.2 F"></Card>
     <Card   title="Blood Sugar" value="102"></Card>
     <Card   title="Haemoglobin" value="13.9"></Card>
   
     </div>
      <div className="float-right m-8 bg-orange-100 rounded drop-shadow-lg border-black ">
          
          <History />
      </div>

     </div>
     <div className='w-full '>
        <Graph/>
      </div>
    </div>
  );
}

export default Patient;
