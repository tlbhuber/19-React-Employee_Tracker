import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,FormControl,InputGroup, Button } from 'react-bootstrap'
import { FiRefreshCcw } from "react-icons/fi";

function SearchBar(props){
    return(
        <div className="searchbar">
            <Container className="searchForm">
            <InputGroup className="mb-3">
              <FormControl
                onChange={props.handleInputChange}
                placeholder="Start typing Employee's name to search"
                className="inputFull"
              />
                  <InputGroup.Append>
                    <Button onClick={props.handleRefresh}><span>Refresh </span><FiRefreshCcw/></Button>
                  </InputGroup.Append>
            </InputGroup>
            <div style={{fontWeight: "bold", textAlign: "right"}}>Click Refresh to start again</div>
            </Container>
        </div>
    )
}
export default SearchBar;