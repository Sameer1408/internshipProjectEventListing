import React,{useState} from 'react'
import { useHistory } from 'react-router';

function AddEvent(props) {
    let history =  useHistory();
    // const [event, setEvent] = useState({title:"",date:"",tag:"",mode:"",phone:"",organisation:""})
    const [title,setTitle] = useState("")
    const [date,setDate] = useState(null)
    const [tag,setTag] = useState("")
    const [mode,setMode] = useState("")
    const [organisation,setOrganisation] = useState("")
    const [price,setPrice] = useState("")
 
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    const handleSubmit=async(e)=>{
      var today = new Date();
      var enteredDate = new Date(date);
      e.preventDefault();
      if(localStorage.getItem('token')){
        if(title=="" || tag=="" || mode=="" || price=="" || organisation=="" || date=="")
        {
          props.showAlret("Please fill all the fields of the form",'warning')
        }
        else if(enteredDate.getTime()<today.getTime()){
          props.showAlret("Please Enter a valid Date",'warning')
        }
        else{

        const response = await fetch(`https://lit-beach-32962.herokuapp.com/api/event/creat`, {
            method: 'POST',
      
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
           body: JSON.stringify({title,date,tag,mode,organisation,price,image:image})
          });
          const json = await response.json();
          if(json.success){
              history.push('/')
              window.location.reload();
          }
          console.log(json)}}
          else{
            // history.push('/login')
            props.showAlret("Please login for adding an event",'warning')
          }
    }
    
    const onChange = (e) => {
      if (e.target.name === "image") {
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagePreview(reader.result);
            setImage(reader.result);
          }
        };
    
        reader.readAsDataURL(e.target.files[0]);
      } 
    };

  return (
    <div className="container my-3">
    <h1>Add Event</h1>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Event Title</label>
    <input type="text" class="form-control" id="title" value={title} onChange={e=>{setTitle(e.target.value)}}  placeholder="Enter title of the event"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Event Date</label>
    <input type="date" class="form-control" id="date" value={date} onChange={e=>{setDate(e.target.value)}}  placeholder="Enter event date"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Event Type</label>
    <input type="text" class="form-control" id="type" value={tag} onChange={e=>{setTag(e.target.value)}}  placeholder="Enter the event type"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Organizer</label>
    <input type="text" class="form-control" id="organizer" value={organisation} onChange={e=>{setOrganisation(e.target.value)}}  placeholder="Enter the event type"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Event Mode</label>
    <input type="text" class="form-control" id="mode"  value={mode} onChange={e=>{setMode(e.target.value)}}  placeholder="Enter the event mode"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Event Price</label>
    <input type="number" class="form-control" id="price"  value={price} onChange={e=>{setPrice(e.target.value)}}  placeholder="Enter the event price"/>
  </div>

  <div id="EventImage">
                  <img src={imagePreview} alt="Image Preview" />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={onChange}
                  />
                </div>

  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form></div>
  )
}

export default AddEvent