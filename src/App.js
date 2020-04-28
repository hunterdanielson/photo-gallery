import React from 'react';
import images from './data.js';
import ImageList from './ImageList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>My stuff here</div>
      {
        images.map(image => {
          return <ImageList creature={image}/>
        })
      }

     
    </div>
  );
}

export default App;
