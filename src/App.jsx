import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchMovies } from './feature/movies/movieThunk';

function App() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <h1>Movie App</h1>
      {(movies || []).map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}

export default App;
