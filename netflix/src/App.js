import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NaveBar/NavBar';
import RowPost from './Components/RowPost/Rowpost';
import {originals,action,comedyMovies,HorrorMovies} from './urls'

function App() {
  return (
    <div className="App">
   <NavBar/>
   <Banner/>
   <RowPost url={originals} title="NETFLIX_ORIGNALS" /> 
   <RowPost url={action} title="ACTION" isSmall />
   <RowPost url={comedyMovies} title="COMEDY" isSmall />
   <RowPost url={HorrorMovies} title="HORROR" isSmall />


   

    </div>
  );
}

export default App;
