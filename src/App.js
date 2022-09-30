import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

const [series, setSeries] = useState(data);
 const removeSeries = (id) => {
  let newSeries = series.filter ((series) => series.id !== id);
  setSeries (newSeries)
 }
  return (
    <div>
    <div className="container">
      <h1>Best series {series.length}- choose yours</h1>
    </div>
    {series.map ((series => {
      const { id, name, years, description, image, rating } = series
      return( <div key={id}>
        <div className="container">
      <img src = { image } width="300px" alt="series"/>
        </div>
        <div className="container">
      <h2>{id}-{name}</h2>
        </div>
        <div className="container">
      <p>{years} {rating}</p>
        </div>
        <div className="container">
      <p>{description}</p>
        </div>
        <div className="container">
      <button className="btn" onClick = {()=>removeSeries(id)}>Remove</button>
        </div>
      </div>
      )
    }))}
    <div className="container">
      <button onClick = {()=>setSeries([])}>Delete all</button>
        </div>
    </div>
  );
}

export default App;
