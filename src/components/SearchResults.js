import React from "react";
import { Container,Table } from 'react-bootstrap';
import { BiImages } from 'react-icons/bi';
import './searchresults.css';

function SearchResults(props){
    return (
        <div className="SearchResults">
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th><BiImages/></th>
                            <th><span style={{fontWeight: "bold", textDecoration: "underline"}}>Name</span></th>
                            <th><span style={{fontWeight: "bold", textDecoration: "underline"}}>Email Address</span></th>
                            <th><span style={{fontWeight: "bold", textDecoration: "underline"}}>Phone Number</span></th>
                            <th><button className="sortBtn" onClick={props.handleSort}><span style={{color: "blue"}}>State Office</span></button></th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* "map" through our getUsers results for all users */}
                        {props.results.map(result => (
                            <tr key={result}>
                                <td>
                                <img 
                                    src={result.picture.thumbnail} 
                                    className="userPhoto" alt={result.name.first}
                                />
                                </td>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.cell}</td>
                                <td>{result.location.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default SearchResults