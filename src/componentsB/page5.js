import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LOGO from '../resume1.jpg'
import { useNavigate } from 'react-router';
import { useState } from 'react';
export default function Save(){
    <meta name = "viewport" content="width=device-width, initial-scale=1.0" />
    const navigate  = useNavigate();
    const [data,setData] = useState(false)
    const valuee=()=>{
        alert('Resume Saved!')
    }
    const unvalue = ()=>{
        alert('First Create File Name. Resume not Saved!')
    }
    return(
        <>
         <div className="page-5 ">
        <p className='preview'>Resume Preview</p>
        <img src={LOGO}  alt="#" className="preview-image"/>
        <Form>    
        <Row className = "mt-5">
        <Col xs={5}>
        <Form.Label>Create File Name</Form.Label>
        <Form.Control className="mt-2" onChange={()=>setData(true)} placeholder="Enter File Name" />
        </Col>
        </Row>
        <div className="mt-3">
      <Button variant="outline-primary" size="l" className='m-2' onClick={()=>navigate('/myResume/mySkills')} >Back</Button>{' '}
        {
        data? <Button variant="primary" onClick={valuee} size="l">Save</Button> : <Button variant="primary"  onClick={unvalue} size="l">Save</Button> 
        }
      </div>
    </Form>
    </div>
        </>
    )
}