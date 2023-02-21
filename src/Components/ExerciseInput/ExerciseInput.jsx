import { useEffect, useState } from 'react'
import './ExerciseInput.css'
import { useMuscleContext} from '../../Context/MuscleContext.jsx';
import ExerciseResults from './ExerciseResults/ExerciseResults';

export default function ExerciseInput() {
  const [userInput, setUserInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  const { handleSearchExercises, exerciseSearch, setExerciseSearch, muscleGroups } = useMuscleContext();
  
  const suggestions = Object.keys(muscleGroups);

  function handleAutoComplete(e) {
    const userInput = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) >= 0
    );
      setActive(0);
      setFiltered(newFilteredSuggestions);
      setShowSuggestions(true);
      setUserInput(e.currentTarget.value)
  }

  function onClick(e) {
    setActive(0);
    setFiltered([]);
    setShowSuggestions(false);
    setExerciseSearch(e.currentTarget.innerText);
    setUserInput('');
  }

  function onKeyDown(e) {
    // enter key
    if (e.keyCode === 13) {
      setActive(0);
      setUserInput(filtered[active]);
      setShowSuggestions(false);
      // arrow up key
    } else if (e.keyCode === 38) {
      console.log('active', active);
      return (active === 0) ? null : setActive(active - 1);
      // arrow down key
    } else if (e.keyCode === 40) {
      console.log('active', active);
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  }

  function renderAutoComplete() {
    if (showSuggestions && userInput) {
      if (filtered.length) {
        return (
          <ul className='autocomplete'>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = 'active';
              }
              return (
                <li 
                key={suggestion} 
                className={className}
                onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className='no-autocomplete'>
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  }

  useEffect(() => {
    handleSearchExercises();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseSearch])

  return (
    <div className='exerciseInput'>
      <label>
        Search for exercises by Muscle Group
        <input type={'text'}
            placeholder={'Add an exercise to your workout'} 
            onChange={handleAutoComplete}
            value={userInput}
            onKeyDown={onKeyDown}
            />
            </label>
            
            <button onClick={(e) => setExerciseSearch(userInput)}>
              Search for Exercises
            </button>
            {renderAutoComplete()}

    <ExerciseResults />
    </div>
  )
}
