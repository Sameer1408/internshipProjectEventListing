import React,{useEffect,useState} from 'react'
import Event from './Event'

function MyEvents() {
    
    useEffect(() => {
        getAllEvents();
      }, [])
      
      const [loading, setLoading] = useState(true)
      const [allEvents,setAllEvents] = useState([]);
      const [search,setSearch] = useState("");
  
      const getAllEvents=async() =>{
          const response = await fetch(`https://lit-beach-32962.herokuapp.com/api/event/myevents`, {
              method: 'GET',
        
              headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
                  },
          //    body: JSON.stringify({email:cred.email,password:cred.password })
            });
            const json = await response.json();
            setAllEvents(json.events)
            setLoading(false)
            console.log(json)
      }
  return (
    <>
         <div className="features">
            <input className="search" type="text" value={search} onChange={e=>{setSearch(e.target.value)}} placeholder="Search An Event"></input>
            <div className="searchIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className="container row eventsDiv">
        <h2 style={{display:"block" ,width:"100%",position:'relative',left:"20px"}}>All Events</h2>
        {loading?<h1>loading...</h1>:
        <>  
        {
            allEvents.length==0?<h1>
                No Events!
            </h1>:
            <>
             {
                allEvents.filter((e) => {
                            if (search == "") {
                                return e;
                            }

                            else if (e.title.toLowerCase().includes(search.toLocaleLowerCase())) {
                                return e;
                            }
                        }).map((e)=>{
                    return <Event event={e}/>
                })
            }
            </>
        }
           
        </>
        }
        </div>
       </>
  
  )
}

export default MyEvents