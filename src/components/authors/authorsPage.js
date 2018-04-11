"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorsPage = React.createClass({

    getInitialState: function() {
        return { authors: AuthorApi.getAllAuthors() };
    },

    componentWillMount: function(){
        if(this.isMounted()){
            // var authors = AuthorApi.getAllAuthors();
            // this.setState({ authors: authors});
        }
    },

    render: function () {

        return (
        <div>
            <h1>Authors</h1>

            <AuthorList authors={this.state.authors}/>
        </div>
       );
   }
});

module.exports = AuthorsPage;