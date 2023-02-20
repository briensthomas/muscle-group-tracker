import logo from './logo.svg';
import './App.css';
import ExerciseInput from './Components/ExerciseInput/ExerciseInput.jsx';
import MuscleProvider from './Context/MuscleContext';
import ExerciseList from './Components/ExerciseList/ExerciseList';
import MuscleDiagram from './Components/MuscleDiagram/MuscleDiagram';

function App() {
  return (
    <div className="App">
      <MuscleProvider>
        <ExerciseInput />
        <ExerciseList />
        <MuscleDiagram />
      </MuscleProvider>
    </div>
  );
}

export default App;
