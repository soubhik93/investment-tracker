import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const AddMfDetails = () => 
<Container fluid="md">

<h1>Add your SIP details!!</h1>

  <Form>
    <Form.Group controlId="formSipName">
      <Form.Label>SIP Name</Form.Label>
      <Form.Control type="text" placeholder="Enter mf name" />
    </Form.Group>

    <select class="form-select" aria-label="Default select example">
        <option selected>MF Caps</option>
		<option value="large-cap">Large Cap</option>
		<option value="multi_cap">Multi Cap</option>
		<option value="flexi_cap">Flexi Cap</option>
		<option value="mid_cap">Mid Cap</option>
        <option value="small_cap">Small Cap</option>
	</select>
    <br/>

    <Form.Group controlId="formSipAmount">
      <Form.Label>SIP Amount</Form.Label>
      <Form.Control type="number" placeholder="Enter SIP amount" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>



export default AddMfDetails;