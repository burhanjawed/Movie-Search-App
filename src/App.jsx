import './App.scss';
import { SearchMovies } from './pages';

function App() {
  return (
    <div className='container'>
      <h1 className='app__title'>Movie Search</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
