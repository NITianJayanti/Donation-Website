import React from 'react'

const members = () => {

const Members =[
  {
    id:1,
    image:"/m1.jpg",
    title:"Adya",
  },
  {
    id:2,
    image :"/m2.jpg",
    title:"Jaya",
  },

  {
    id:3,
    image :"/m3.jpg",
    title:"Minakchi",
  },
  {
    id:4,
    image:"/m4.jpg",
    title:"Rubi",
   },
   {
    id:5,
    image :"/m5.jpg",
    title:"surbi",
   },
   {
    id:6,
    image :"/m6.jpg",
    title:"tarun",
   },
   {
    id:7,
    image:"/m7.jpg",
    title:"jayu",
   }
,
];
  return (
  <>
  <section className="members">
    <div className="container">
      <div className="heading_section">
        <h2 className='heading'>
          Members
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quidem, sunt eveniet beatae nihil doloremque. Magnam eaque sit veritatis nulla! Doloribus, culpa cumque?
        </p>
      </div>
      <div className="members_container">
        {Members.map((element)=>(
          <div className="card" key={element.id}>
            <img src={element.image} alt={element.title}/>
            <h3>{element.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  </>
  )
}

export default members;
