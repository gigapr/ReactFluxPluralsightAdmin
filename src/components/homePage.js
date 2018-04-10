"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (<div className="jumbotron">
            <h1>Pluralsigt Administration</h1>
            <p>Rect, React router, and Flux</p>
        </div>);
    }
});

module.exports = Home;