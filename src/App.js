import React, { Component } from 'react';
import images from './data.js';
import ImageList from './ImageList.js';
import './App.css';



export default class App extends Component {
  state = { selected: null, filteredImages: images };

  findOptions = () => {
    const imageOptions = images.map(object => {
      return object.horns;
    })
    return imageOptions;
  }

  filterOptionsWord = (e) => {
    this.setState({ filteredImages: images.filter(image => {
      if (!e.target.value) return true;
      return image.keyword === e.target.value;
    }) });

  }
  filterOptions = (e) => {
    // apparently need to change it to a number becuase if it is a string it will break
    this.setState({ selected: Number(e.target.value) });
    this.setState({ filteredImages: images.filter(image => {
      // before I used e.target.value here it was delayed for some reason
      // I would pick option 1 and it would not update then pick option 2 and it would update with option 1 results
      if (!e.target.value) return true;
      return image.horns === Number(e.target.value);
    }) });

  }

  render() {
    return (
      <div className="App">
        <p>Can only use one filter at a time</p>
        <p>{this.findOptions()}</p>
        <section className="options">
          <select onChange={this.filterOptionsWord}>
            <option value="">All options</option>
            <option value="rhino">Rhino</option>
            <option value="narwhal">Narwhal</option>
            <option value="unicorn">Unicorn</option>
          </select>
          <select onChange={this.filterOptions}>
            <option value="">All options</option>
            <option value="1">1 horn</option>
            <option value="2">2 horn</option>
            <option value="3">3 horn</option>
          </select>
        </section>

        <div>Chosen Images:</div>
        {
            <ImageList images={this.state.filteredImages}/>
           
        }


      </div>
    );
  }
};
