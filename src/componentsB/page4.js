import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
export default function Skills(){
    const navigate = useNavigate();
    return(
        <>
            <div className="page4 shadow">
            <p className='skills'>key Skills</p>
            <hr />
        <Form>    
        <Row className = "mt-5">
        <Col>
          <Form.Control placeholder="Add Skill 1" />
        </Col>
        <Col>
            <Form.Control placeholder=" Add Skill 2" />
        </Col>
        </Row>
        <Row className = "mt-4">
        <Col>
            <Form.Control placeholder="Add Skill 3" />
        </Col>
       
        <Col>
        <Form.Control placeholder="Add Additional Skill" />
      </Col>
      </Row>
      <p className='add-new'>Add New</p>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="buttons-page1">
      <Button variant="outline-primary" size="l" className='m-2' onClick={()=>navigate('/myResume/education')}>Back</Button>{' '}
      <Button variant="primary" size="l" onClick={()=>navigate('/save')}>Preview</Button>{' '}
      </div>


      </Form>
      </div>
        </>
    )
}
