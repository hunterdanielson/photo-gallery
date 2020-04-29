import React, { Component } from 'react';
import images from './data.js';

export default class Options extends Component {

    render() {
        return (
            <div>
                <option value={this.props.filterOption}>{this.props.filterOption}</option>
                
            </div>
        )
    }
}
