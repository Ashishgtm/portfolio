import React,{useState} from 'react'

function Whatido() 
{

  //3D
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


    //Visual 
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

//Motion

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

//Product

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
//TUTORIAL

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
    <div className='all-about'>
                 <div className='whatcan'>What can i do</div>
                <hr className='horiline' />


  {/* 3D */}
                <div style={divStyle}
                  onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                ><div> 
        <span className='insideline1'>3D</span>
               {hovered && <div className='insideline11'>I can produce anything that my laptop can render</div>}</div>
                </div>

               <hr className='horiline' />

{/* Vision */}
                <div style={divVision}
                   onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                 ><div> 
                  <span className='insideline1'>VISUAL</span>
                  {hovered2 && <div className='insideline11'>I search the Internet for visual reference and then combine them to create my own work.</div>}</div>
                </div>
                 <hr className='horiline' />


  {/* Motion */}
                <div style={divMotion}
                   onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                 ><div> 
                  <span className='insideline1'>MOTION</span>
                  {hovered3 && <div className='insideline12'>I use fancy motion that makes my design more interesting that it actually is</div>}</div>
                </div>
                    <hr className='horiline' />

  {/* Product */}
                  <div style={divProduct}
                   onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                 ><div> 
                  <span className='insideline1'>PRODUCT</span>
                  {hovered4 && <div className='insideline13'>I utilize common design best practices,test, and re-iterate until it works (hopefully).</div>}</div>
                </div>



                      <hr className='horiline' />

 {/* TUTORIAL */}
                    
                  <div style={divTutorial}
                   onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                 ><div> 
                  <span className='insideline1'>TUTORIAL</span>
                  {hovered5 && <div className='insideline14'>I thought i'd make millions of $ from Web Design but i didn't.</div>}</div>
                </div>
                  <hr className='horiline' />


       </div>

  )
}
export default Whatido;
