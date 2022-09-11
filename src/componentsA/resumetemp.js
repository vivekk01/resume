import LOGO from '../resume1.jpg'
import LOGO1 from '../resume2.jpg'
import LOGO2 from '../resume3.jpg'
import LOGO3 from '../resume4.jpg'
import React from 'react'
import { useNavigate} from 'react-router-dom'
export default function Resumetemp(){
    const navigate = useNavigate();
    const page1  = ()=>{
        navigate('/myResume/personalInfo')
      }
    const[status, setStatus] = React.useState(false)
    const[status1, setStatus1] = React.useState(false)
    const[status2, setStatus2] = React.useState(false)
    const[status3, setStatus3] = React.useState(false)
    return(
    <>
    <div>
        {
            status? <button type='button' onMouseEnter={()=>page1()} className='buttons-1'>Use Template</button> : null
        }
        {
            status1? <button type='button' onMouseEnter={()=>page1()} className='buttons-2'>Use Template</button> : null
        }
        {
            status2? <button type='button' onMouseEnter={()=>page1()} className='buttons-3'>Use Template</button> : null
        }
        {
        status3? <button type='button' onMouseEnter={()=>page1()} className='buttons-4'>Use Template</button> : null
        }
    </div>
    <div className='tempss'>
    <p className='temp'>Templates</p>
    <p className='select-temp'>Select a Template to get Started</p>
    </div>
    <div className="images">
    <img src={LOGO}  alt="#" onMouseEnter={()=>setStatus(true)} onMouseLeave={()=>setStatus(false)} className="resume-image"/>
    <img src={LOGO1} alt="#" onMouseEnter={()=>setStatus1(true)} onMouseLeave={()=>setStatus1(false)} className="resume-image"/>
    <img src={LOGO2} alt="#" onMouseEnter={()=>setStatus2(true)} onMouseLeave={()=>setStatus2(false)} className="resume-image"/>
    <img src={LOGO3} alt="#" onMouseEnter={()=>setStatus3(true)} onMouseLeave={()=>setStatus3(false)} className="resume-image"/>
    </div>
    </>
);
}
