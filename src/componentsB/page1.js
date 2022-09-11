import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

function PersonalInfo(props) {
  const navigate = useNavigate();
  const navToWorkExp  = ()=>{
    navigate('/myResume/workExperience')
  }
  const [valuee,setValuee] = useState({
    fname:'', lname:'', email:'',mobile: '', address:'',city:'',state:'',postalCode:'',objective:''
  })

  const userData = (e)=>{
    const{value,name} = e.target;
    setValuee(()=>{
      return{
        ...valuee,[name]:value
      }
    })}
    const [data,setData]= useState([]);
    const submitData=(e)=>{
      e.preventDefault();
      const {fname, lname, email,mobile,objective} = valuee;
      if(fname === ''){
        alert('FirstName cant be left blank!')
      }else if(lname===""){
        alert('LastName cant be left blank!')
      }
      else if(email===''){
        alert('Email is mandatory')
      }else if(!email.includes('@gmail.com')){
        alert('Enter Valid Email!')
      }else if(objective===''){
        alert('Objective is compulsory!')
      }else if(mobile===""){
        alert('Enter mobile number!')
      }else if((mobile.length!==10)){
        alert('Mobile Number is not valid!')
      }else{
        console.log(valuee);
        alert('Personal Info Saved Successfully!')    
      }
      
      localStorage.setItem('Personal_Info', JSON.stringify([...data,valuee]));

      }
      return (
    
  
    <div className='personal-info-box shadow'>
       <Figure >
      <Figure.Image className='pic-1'  alt="image" src={props.image}/>
      <Figure.Caption style={{color:"blue", cursor:'pointer'}}>Change Your Profile Photo</Figure.Caption>
    </Figure>
    <Form>
      <Row>
        <Col>
        <Form.Label>First name</Form.Label>
          <Form.Control name="fname" onChange={userData} placeholder="First name" />
        </Col>
        <Col>
        <Form.Label>Last name</Form.Label>
          <Form.Control name="lname" onChange={userData} placeholder="Last name" />
        </Col>
      </Row>
      <Row className = "mt-4">
      <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" onChange={userData} placeholder="Enter email" />
        </Col>
        <Col>
            <Form.Label>Mobile</Form.Label>
            <Form.Control name="mobile" onChange={userData} placeholder="Enter mobile no." />
        </Col>
        <Form.Label className='mt-4'>Address</Form.Label>
        <Form.Control name="address" onChange={userData} type="address" placeholder="Enter your address" />
      </Row>
      <Row className = "mt-4">
      <Col>
            <Form.Label>City</Form.Label>
            <Form.Control name="city" onChange={userData} placeholder="Enter your city" />
        </Col>
        <Col>
            <Form.Label>State</Form.Label>
            <Form.Control name="state" onChange={userData} placeholder="Enter your state" />
        </Col>
        </Row>
        <Row>
        <Col xs={6}>
        <Form.Label className='mt-4' required>Postal Code</Form.Label>
        <Form.Control name="postalCode" onChange={userData} placeholder="Enter your postal code" />
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Label className='mt-4'>Objective</Form.Label>
        <Form.Control as='textarea' name="objective" onChange={userData} type="textarea" placeholder="Enter your objective" />
        </Col>
        </Row>
        <br />
        <br />
        <br />
        <hr></hr>
        <div className="buttons-page1">
        <Button variant="outline-primary" size="l" className='m-2' onClick={()=>navigate('/')}>Back</Button>{' '}
        <Button variant="primary" size="l"  onClick={submitData}>Next</Button>{' '}
        </div>
        </Form>
    </div>

  );
}

export default PersonalInfo;