import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Search.css";

const Search = (props) => {
    console.log(props)
    //Reset form fields, bring in clearing function from App to reset state
    const resetForm = (e) => { 
        props.handleClear(e)
        document.getElementById("form-reset").reset();
      }
  return (
    <div className="search-container">
      <Form onSubmit={props.submit} className='form' id='form-reset'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Team</Form.Label>
          <Form.Control type="text" placeholder="Enter team"  type="text"
          name="team"
          id="team"/>
          <Form.Text className="text-muted">
          e.g. Cambridge United
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Event/League</Form.Label>
          <Form.Control type="text" placeholder="Enter event/league" />
          <Form.Text className="text-muted">
          e.g. ENGLAND: League Cup          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" type="date" name="date" id="date" >
          <Form.Label>Event/League</Form.Label>
          <Form.Control type="date" placeholder="Enter date" />
          <Form.Text className="text-muted">
          e.g. 08/25/2021          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit" className='submit'>
          Submit
        </Button>
        <Button variant="danger" type="submit" className='submit' onClick={resetForm}>
          Clear Search
        </Button>

        

      </Form>
    </div>
  );
};

export default Search;
