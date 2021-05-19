import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

const AddMfDetails = () => (
  <div>
    <h1 className="page-header-style">Add your SIP details!!</h1>
    <Container className="form-container-style">
      <Form>
        <Form.Group
          as={Row}
          controlId="formAMCName"
          className="form-group-style"
        >
          <Form.Label column sm="2">
            AMC
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter AMC name" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="formSipName"
          className="form-group-style"
        >
          <Form.Label column sm="2">
            SIP Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter mf name" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="formMFCategory"
          className="form-group-style"
        >
          <Form.Label column sm="2">
            MF category
          </Form.Label>
          <Col sm="10">
            <Form.Control as="select">
              <option value="large-cap">Large Cap</option>
              <option value="multi_cap">Multi Cap</option>
              <option value="flexi_cap">Flexi Cap</option>
              <option value="mid_cap">Mid Cap</option>
              <option value="small_cap">Small Cap</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formSipAmount"
          className="form-group-style"
        >
          <Form.Label column sm="2">
            SIP Amount
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter SIP amount" />
          </Col>
        </Form.Group>

        <Button className="buttonStyle" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  </div>
);

export default AddMfDetails;
