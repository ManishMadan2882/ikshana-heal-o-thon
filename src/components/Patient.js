import '../index.css'
import PatientInfo from './info';
import History from './History';
import Graph from './Graph';
import Card from './Card';
import Todo from './Todo';
function Patient() {
 const patient = {
  "name":"Adam Waheed",
  "personalInfo":{
      "gender":"M",
      "age":"45",
      "ailment":"attuVirus",
      "department":"Gastro",
      "bloodGroup":"B+",
      "room":"209",
      "bed":"1"
  },
  "reports":[
    {"title":"Weight","value":"58 kg"},
    {"title":"Temperature","value":"98.9 F"}
  ],
  "bloodPressure":[{"date":1675469852472,"value":188},{"date":1675469862472,"value":150},{"date":1675469872472,"value":123}],
  "records":
  [
      {
          "worker":"Selena",
          "reason":"check  99",
          "time":"00:59, 3/2/2023"
      },
      {
          "worker":"Afan",
          "reason":"Injection",
          "time":"05:56, 3/2/2023"
      },
      {
          "worker":"Zehra Mir",
          "reason":"Give ORS",
          "time":"13:25, 3/2/2023"
      }

  ],
  "doctors":["Dr. RP"],
  "checkin":"19:15, 2/2/2023"

};
  const arr=[];
  patient.reports.forEach((element)=>{
    arr.push(<Card   title={element.title} value={element.value}></Card>);
  });

  return (
    <div className='text-black m-2 ml-[140px] flex flex-wrap w-[86%]'>
      <PatientInfo obj={patient}/>  
     <div className='w-full flex flex-wrap justify-between'>
    
     <Todo/>
      <div className="float-right mt-11 m-8 bg-slate-100 rounded drop-shadow-lg border-black ">
         
          <History obj={patient.records} />
      </div>

     </div>
     <div className='w-[60%] flex flex-wrap mt-11 justify-evenly'>
     <div className='flex flex-wrap max-w-[600px]  '>
     {arr}{/* //cards */}
     </div>
        <Graph arr={patient.bloodPressure}/>
      </div>
    </div>
  );
}

export default Patient;
