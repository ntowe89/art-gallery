
import ButtonBar from './Components/ButtonBar';
import Gallery from './Components/Gallery';
import { useState, useEffect } from 'react';

function App() {
  const [artId , setArtId] = useState(12720)
  const [data, setData] = useState({})

  useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
    console.log(data)
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div>
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
        <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
