import React, { Component } from 'react';

export default class ContextWrapper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
