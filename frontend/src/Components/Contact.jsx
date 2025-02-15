import React ,{useState} from 'react';



const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] =useState("");
  const [phone, setPhone] = useState("");
  const [message,setMessage] = useState("");

  const handleSendMessage = async(e) =>{
    e.preventDefault();
    // await axios.post("http://localhost:4000/api/v1/message/send",{name,email,phone,message},{
    //   withCredentials :true,
    //   headers:{"Content-Type":"application/json"},
    // })
    // .then
  }

  return (
    <section className='contact'>
      <div className="container">
        <div className="banner">
          <form onSubmit ={handleSendMessage}>
            <h2>Contact Us</h2>
            <div className="">

              <input type='text' value={name} placeholder='Your Nice Name'  onChange={(e)=>setName(e.target.value)}/>
              <input type="email" value={email} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}   />

              <input  type="number"
              value={phone}
              placeholder='Phone Number'
              onChange={(e)=> setPhone(e.target.value)}
               
              />
            </div>
            <textarea 
            
            rows="10"
            value ={message}
            placeholder='Message'
            onChange={(e)=>setMessage(e.target.value)}
            
            />

            <button className='btn' type='sumit'>Send Message</button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contact;
