import React, { Component } from 'react';

class SearchBox extends Component {

    state = {
        terms: ''
    }

    handleSearch = (e) => {
        e.preventDefault();
        // console.log(this.state.terms);
        this.props.submitter(this.state.terms, 1);
        //this.props.Submit(this.state.terms);
    }



    render() {


        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input type="text" onChange={(e) => { this.setState({ terms: e.target.value }) }} />
                    <button type="submit">søg</button>
                </form>
            </div>
        )
    }
}

export default SearchBox;