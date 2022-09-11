import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import {useState} from 'react'
export default function WorkExp(){
 const  navigate = useNavigate();
  const per = ()=>{
    navigate('/myResume/personalInfo')
  }

  const [valuee,setValuee] = useState({
    job:'', orgName:'', stYear:'',endYear: ''})

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
      const {job, orgName , stYear , endYear} = valuee;
      if(job === ''){
        alert('Must fill job details!')}
        else{
          console.log(valuee);
          alert('Work Experience Saved Successfully!')
        }}
        localStorage.setItem('Work Experience', JSON.stringify([...data,valuee]));
  

    return(
        <>
            <div className="page2 shadow">
            <p className='workexp'>Work Experience</p>
            <p className='exp'>Experience 1</p>
            <hr></hr>
            <br></br>
            <br></br>
            <Form>
      <Row>
        <Col>
        <Form.Label >Job Title</Form.Label>
          <Form.Control onChange={userData} name='job' placeholder="Enter Job Title" />
        </Col>
        <Col>
        <Form.Label>Organisation Name</Form.Label>
          <Form.Control onChange={userData} name='orgName' placeholder="Enter Organisation Name" />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
      
        <Form.Label>Start Year</Form.Label>
        <Form.Select onChange={userData} name='stYear' >
        <option>Select Year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2023">2023</option>
        </Form.Select>
        </Col>
        <Col>
        <Form.Label>End Year</Form.Label>
        <Form.Select onChange={userData} name='endYear' >
        <option>Select Year</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        </Form.Select>
        </Col>
      </Row>
      <p className='addRow'>Add Row</p>
      <br/>
      <hr></hr>
      <div className="buttons-page1">
      <Button variant="outline-primary" size="l" className='m-2' onClick={per}>Back</Button>{' '}
      <Button variant="primary" size="l" onClick={submitData}>Next</Button>{' '}
      </div>
      </Form>



            </div>

        </>
    )
}