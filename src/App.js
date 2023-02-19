import logo from './logo.svg';
import './App.css';
import ExerciseInput from './Components/ExerciseInput/ExerciseInput.jsx';
import MuscleProvider from './Context/MuscleContext';

function App() {
  return (
    <div className="App">
      <MuscleProvider>
        <ExerciseInput />
      </MuscleProvider>
    </div>
  );
}

export default App;
