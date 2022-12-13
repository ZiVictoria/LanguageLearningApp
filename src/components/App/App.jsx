import Header from '../Header/header.jsx';
import Words from '../Words/words.jsx';
import Card from '../Card/card.jsx';
import data from '../../data/data.json';
import CardsGallery from '../Gallery/gallery.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Words/>    
      <CardsGallery/> 
    </div>
  );
}

export default App;
