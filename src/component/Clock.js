import React,{useState} from 'react'

export default function Clock() {
    const now = new Date().toLocaleTimeString();
    const[time,setTime] = useState(now);
    
    setInterval(() => {
        showTime()
        }, 1000);
    
    let showTime =()=>{
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
     }
      

    return (
        <div style={{color:'grey',fontWeight:'bold'}}>
            {time}
        </div>
    )
}
