import React, { Component } from 'react';
import images from './data.js';
import ImageList from './ImageList.js';
import Options from './Options.js';
import './App.css';



export default class App extends Component {
  state = { selected: null, filteredImages: images, filter: null };

  findOptions = () => {
    // garb all keys from an object
    const objectKeys = Object.keys(images[0]);
    
    console.log(objectKeys);

    let optionsUnique = objectKeys.filter(function(item, index){
      return objectKeys.indexOf(item) >= index;
    });
   
    return optionsUnique;
  }

  filterBy = (e) => {
    const selected = e.target.value;
    if(!selected) {
      this.setState({filter: null})
    } else {
      this.setState({filter: selected});
    }

  }

  filterOptionsWord = (e) => {
    this.setState({ filteredImages: images.filter(image => {
      if (!e.target.value) return true;
      return image.keyword === e.target.value;
    }) });

  }
  filterOptionsHorn = (e) => {
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
        <p>Can only use one filter at a time... for now</p>
        <p>Options to filter by: {this.findOptions().map(thing => thing + ' ')}</p>
        <section className="options">
          <select onChange={this.filterBy}>
            <option value="">None</option>
            {this.findOptions().map(option => {
              return <option value={option}>{option}</option>
            })}
          </select>
          {console.log(this.state)}
          <select onChange={this.filterOptionsWord}>
            <option value="">All options</option>
            <option value="rhino">Rhino</option>
            <option value="narwhal">Narwhal</option>
            <option value="unicorn">Unicorn</option>
          </select>
          <select onChange={this.filterOptionsHorn}>
            <option value="">All options</option>
            <option value="1">1 horn</option>
            <option value="2">2 horn</option>
            <option value="3">3 horn</option>
          </select>
        </section>

        <div>Dynamic options:
          <Options filterOption={this.state.filter}/>
        </div>

        <div>Chosen Images:</div>
        {
            <ImageList images={this.state.filteredImages}/>
           
        }


      </div>
    );
  }
};
