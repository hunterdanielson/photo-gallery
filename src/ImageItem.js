import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.creature.title}</h1>
                <img src={this.props.creature.url} alt={this.props.creature.title}/>
                <p>{this.props.creature.description}</p>
            </div>
        )
    }
}
