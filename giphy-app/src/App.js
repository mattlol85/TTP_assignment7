import './App.css';
import Footer from './Footer'
import Navbar from './Navbar';
import SearchField from './SearchField';
import GifCard from './GifCard'

function App() {
  return (
    <div>
      <Navbar />
      <br />
      {/* INSERT <SearchField /> HERE */}
      <div className='card-list'>
        <GifCard />
        <GifCard />
        <GifCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
