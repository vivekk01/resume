import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
export default function Eduaction(){
  const navigate = useNavigate();
    return(
        <>
        <div className="page3 shadow">
        <p className='edu-details'>Eduaction Details</p>
            <hr></hr>
            <br></br>
        <Form>
      <Row>
        <Col xs={6}>
        <Form.Label>Type</Form.Label>
          <Form.Control placeholder=" Enter Type" />
        </Col>
        </Row>
        <Row className = "mt-4">
        <Col>
        <Form.Label>University</Form.Label>
          <Form.Control placeholder="Enter University" />
        </Col>
        <Col>
            <Form.Label>Degree</Form.Label>
            <Form.Control placeholder="Enter Degree" />
        </Col>
        </Row>
        <Row className = "mt-4">
        <Col>
            <Form.Label>Start Year</Form.Label>
            <Form.Control placeholder="Enter Year" />
        </Col>
       
        <Col>
        <Form.Label>End Year</Form.Label>
        <Form.Control placeholder="Enter Year" />
      </Col>
      </Row>
      <br />
      <hr />
      <div className="buttons-page1">
      <Button variant="outline-primary" size="l" className='m-2' onClick={()=>navigate('/myResume/workExperience')}>Back</Button>{' '}
      <Button variant="primary" size="l" onClick={()=>navigate('/myResume/mySkills')}>Next</Button>{' '}
      </div>
      </Form>
        </div>

        </>
    )
}