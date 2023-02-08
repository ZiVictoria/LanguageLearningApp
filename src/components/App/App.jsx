import Header from '../Header/header.jsx';
import Words from '../Words/words.jsx';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../Main/main.jsx';
import Gallery from '../Gallery/gallery.jsx';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element= {<Main />} />
        <Route path='/words' element= {<Words />} />
        <Route path='/gallery' element= {<Gallery />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
