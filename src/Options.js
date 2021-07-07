import React, { Component } from 'react';
import images from './data.js';

export default class Options extends Component {
    // generateOptions = () => {
        
        // }
        render() {
            
            console.log(this.props.filterOption)
            return (
            <div> 
                {images.map(thing => {
                    return <option value={thing[this.props.filterOption]}>{thing[this.props.filterOption]}</option>
                })}
            </div>
        )
    }
}
