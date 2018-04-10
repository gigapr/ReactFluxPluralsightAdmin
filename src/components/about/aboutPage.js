"use strict";

var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>Rect, React router, and Flux</p>
                <p>
                    This application uses
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>.....</li>
                    </ul>
                </p>
            </div>);
    }
});

module.exports = About;