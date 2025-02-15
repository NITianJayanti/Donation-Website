import React from 'react';

const qualities = () => {

  const Qualities =[

{
  id:1,
  image:"/community.jpg",
  title:"Community Development",
  description:" fgdkjl rtyuio dfghjkl wertyui jkl;"
},
{
  id:2,
  image :"/transparency.jpg",
  title:"Transparency",
  description:"sdfghjkl; ertyuiop sdfghjkl;"
},
{
  id:3,
  image :"/impact.jpg",
  title:"Impact Measurement",
  description:"asdfghj ertyuio ghjkl"
},
  ];
  return (
  <>
  
  <div className="qualities">
    <h2>Our Qualities</h2>
    <div className="container">
      {Qualities.map((element)=>{
        return (
          <div className="card" key={element.id}>
            <div className="img-wrapper">
              <img src={element.image} alt={element.title}/>
              </div> 
              <div className="content">
                <p className='title'>{element.title}</p>
                <p className='description'>{element.description}</p>
              </div>
              </div>
        );

      })}
    </div>
  </div>
  </>
  );
};

export default qualities;
