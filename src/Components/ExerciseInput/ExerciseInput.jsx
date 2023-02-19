import React, { useEffect, useState } from 'react'
import './ExerciseInput.css'
import { useMuscleContext} from '../../Context/MuscleContext.jsx';

export default function ExerciseInput() {
  const [userInput, setUserInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  const { handleSearchExercises, exerciseSearch, setExerciseSearch, muscleGroups } = useMuscleContext();
  
  const suggestions = Object.keys(muscleGroups);
  // console.log('suggestions', suggestions);

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
  console.log('userInput', userInput);
    // setExerciseSearch(e.currentTarget.value);
  }

  async function onClick(e) {
    // reset state to remove the list of suggestions
    setActive(0);
    setFiltered([]);
    setShowSuggestions(false);
    // fill the input with the selected suggestion
    setUserInput(e.currentTarget.innerText);
    // set the state we use for searching with the full name from the suggestion
    setExerciseSearch(e.currentTarget.innerText);
    // search for exercises that target the selected muscle
    handleSearchExercises(exerciseSearch);
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      setActive(0);
      setUserInput(filtered[active]);
      setShowSuggestions(false);
      handleSearchExercises(exerciseSearch)
    } else if (e.keyCode === 38) {
      return (active === 0) ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
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
                className={className} 
                key={suggestion} 
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

  return (
    <div>
        <input 
            type={'text'}
            placeholder={'Add an exercise to your workout'} 
            onChange={handleAutoComplete}
            value={userInput}
            onKeyDown={onKeyDown}
            />
            {/* There should be a button here to take the user's input and add it to the list of exercises, passed up through Context to the ExerciseList sibling */}
            <button
            onClick={handleSearchExercises}>
              Search for Exercises
            </button>
            {renderAutoComplete()}

    </div>
  )
}
