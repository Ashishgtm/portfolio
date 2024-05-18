import React,{useState} from 'react'

function Clients() 
{

  //CG
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    const divStyle = {
    
      backgroundColor: hovered ? 'rgb(253, 127, 81)' : 'black', // Change color based on hover state
      color: hovered ? 'black' : 'rgb(245, 234, 214)',
      width: 'auto',
      height: 'auto',
      marginLeft: hovered ? '100px' : '100px', // Add left margin on hover
      marginRight: hovered ? '100px' : '100px', 
      transition: 'background-color 1.7s ease, color 1.7s ease, margin 0.7s ease' // Smooth transition
      
    };


    //AANFA
    const [hovered2, setHovered2] = useState(false);
  
    const handleMouseEnter1 = () => {
      setHovered2(true);
    };
  
    const handleMouseLeave1 = () => {
      setHovered2(false);
    };
    const divVision = {
    
        backgroundColor: hovered2 ? 'rgb(253, 127, 81)' : 'black', // Change color based on hover state
        color: hovered2 ? 'black' : 'rgb(245, 234, 214)',
        width: 'auto',
        height: 'auto',
        marginLeft: hovered2 ? '100px' : '100px', // Add left margin on hover
        marginRight: hovered2 ? '100px' : '100px', 
        transition: 'background-color 1.7s ease, color 1.7s ease, margin 0.7s ease' // Smooth transition
        
      };

//Wordlink

const [hovered3, setHovered3] = useState(false);
  
const handleMouseEnter2 = () => {
  setHovered3(true);
};

const handleMouseLeave2 = () => {
  setHovered3(false);
};
const divMotion = {

    backgroundColor: hovered3 ? 'rgb(253, 127, 81)' : 'black', // Change color based on hover state
    color: hovered3 ? 'black' : 'rgb(245, 234, 214)',
    width: 'auto',
    height: 'auto',
    marginLeft: hovered3 ? '100px' : '100px', // Add left margin on hover
    marginRight: hovered3 ? '100px' : '100px', 
    transition: 'background-color 1.7s ease, color 1.7s ease, margin 0.7s ease' // Smooth transition
    
  };

//Honda Nepal

const [hovered4, setHovered4] = useState(false);
  
const handleMouseEnter3 = () => {
  setHovered4(true);
};

const handleMouseLeave3 = () => {
  setHovered4(false);
};
const divProduct= {

    backgroundColor: hovered4 ? 'rgb(253, 127, 81)' : 'black', // Change color based on hover state
    color: hovered4 ? 'black' : 'rgb(245, 234, 214)',
    width: 'auto',
    height: 'auto',
    marginLeft: hovered4 ? '100px' : '100px', // Add left margin on hover
    marginRight: hovered4 ? '100px' : '100px', 
    transition: 'background-color 1.7s ease, color 1.7s ease, margin 0.7s ease' // Smooth transition
    
  };
//Sleepiq

const [hovered5, setHovered5] = useState(false);
  
const handleMouseEnter4 = () => {
  setHovered5(true);
};

const handleMouseLeave4 = () => {
  setHovered5(false);
};
const divTutorial= {

    backgroundColor: hovered5 ? 'rgb(253, 127, 81)' : 'black', // Change color based on hover state
    color: hovered5 ? 'black' : 'rgb(245, 234, 214)',
    width: 'auto',
    height: 'auto',
    marginLeft: hovered5 ? '100px' : '100px', // Add left margin on hover
    marginRight: hovered5 ? '100px' : '100px', 
    transition: 'background-color 1.7s ease, color 1.7s ease, margin 0.7s ease' // Smooth transition
    
  };





  return (
    <div className='all-work'>
      
                <hr className='horiline' />


  {/* CG */}
                <div style={divStyle}
                  onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                ><div> 
        <span className='insideline123'>CG</span>
               {hovered && <div className='insideline1123'>I was just one person that Developed the current website of this company.</div>}</div>
                </div>

               <hr className='horiline' />

{/* AANFA */}
                <div style={divVision}
                   onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                 ><div> 
                  <span className='insideline123'>AANFA</span>
                  {hovered2 && <div className='insideline1123'>Explored  the Future Fantasy Football beign huge fan of football.</div>}</div>
                </div>
                 <hr className='horiline' />


  {/* Wordlink */}
                <div style={divMotion}
                   onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                 ><div> 
                  <span className='insideline123'>WORDLINK</span>
                  {hovered3 && <div className='insideline1234'>Design language for wordlink but never liked the internet in real. </div>}</div>
                </div>
                    <hr className='horiline' />

  {/* Honda */}
                  <div style={divProduct}
                   onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                 ><div> 
                  <span className='insideline123'>HONDA NEPAL</span>
                  {hovered4 && <div className='insideline1345'>Worked on honda website design, experienced without no driving experience.</div>}</div>
                </div>



                      <hr className='horiline' />

 {/* SleepIQ */}
                    
                  <div style={divTutorial}
                   onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                 ><div> 
                  <span className='insideline123'>SLEEPIQ</span>
                  {hovered5 && <div className='insideline1456'>Designed 100+ users websites utlilizing my best personal experience : sleeping.</div>}</div>
                </div>

                  
                  
                  <hr className='horiline' />

                  
       </div>

  )
}
export default Clients;
