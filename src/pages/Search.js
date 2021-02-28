import React, { Component } from "react";
import API from "../utils/API"
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"
import NavBar from "../components/Navbar"

// Our Search component will handle the passdown of props to our child components.
class Search extends Component {
    // build our state values.
    state = {
        search: "",
        users: [],
        results: []
    }
    
    // When the component "mounts" perform an API call and fill in users and results states.
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            // set users for later filtering.
            users: res.data.results,
            // set results the same as users to be changed by filtering.
            results: res.data.results
        })).catch(err => console.log(err))
    }

    // When the users types in a name start changing the search results
    handleInputChange = event => {
        // Set our search state on the users input
        this.setState({search: event.target.value})
        // Deconstruct state for our filtering method
        const { search, users } = this.state;
        
        // if search is empty do nothing.
        if (search === "" ){
            return;
        }
        // if search is not empty start the filtering.
        else {
            const results = users.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));
            // Set our results state for use later.
            this.setState({results});
        }
      };

      // Refreshes the window so the user can search again
      handleRefresh() {
          // Simply refreshes the window
          window.location.reload();
      }

      // Sorts the states alphabetically
      handleSort = () => {
        // pull in our results from state so we can sort
        const { results } = this.state;
        // store the results of our sort method in sort variable
        const sort = results.sort((a,b) => {
            if (a.location.state > b.location.state) { return 1 } // return 1 for a to b to the right of b (Alphabetical)
            else { return -1 } // return -1 for a to be to the left of b (Not Alphabetical)
        })
        // Push our newly sorted sort variable into our results state
        this.setState({ results: sort })
      }

    // what we are going to push to the UI.
    render(){
        return(
            <div>
            <NavBar />
            <SearchBar
                 handleInputChange={this.handleInputChange}
                 handleRefresh={this.handleRefresh}
                />
            <SearchResults 
            results={this.state.results}
            handleSort={this.handleSort}
            />
        </div >
        )
    }
}

export default Search