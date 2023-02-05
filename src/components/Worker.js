import '../index.css'
import Comp from './Comp';

import { useState, useEffect } from 'react';
 function Worker(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        
        fetch('/worker')
           .then((res) => res.json())
           .then((data) => {
            let arr=[];
            data.forEach(element => {
                arr.push(<Comp username={element.username} name={element.name} about={element.about}/>)
            });
              console.log(data);
              setPosts(arr);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
        
         
         
    return(
        <div className='ml-[168px] mt-[10px] mr-[13px] p-1'>
       
           {posts.map((post) => {
               return (
                  post
               );
            })}

        </div>
    )
}
export default Worker