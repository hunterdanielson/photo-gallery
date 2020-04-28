import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <img src={this.props.creature.url} alt={this.props.creature.description}/>

            </div>
        )
    }
}
