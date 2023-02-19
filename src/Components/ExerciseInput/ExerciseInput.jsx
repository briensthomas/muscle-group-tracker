import React, { useEffect, useState } from 'react'
import { useMuscleContext} from '../../Context/MuscleContext.jsx';

export default function ExerciseInput() {
  const { handleSearchExercises, setExerciseSearch, handleAutoComplete } = useMuscleContext();
  // This object should go into the Muscle Diagram component
  

  useEffect(() => {

  }, [])



  return (
    <div>
        <label>
        <input 
            type={'text'}
            placeholder={'Add an exercise to your workout'} 
            onChange={(e) => setExerciseSearch(e.target.value)}
            />
            {/* There should be a button here to take the user's input and add it to the list of exercises, passed up through Context to the ExerciseList sibling */}
            <button
            onClick={handleSearchExercises}>
              Search for Exercises
            </button>
        </label>

    </div>
  )
}
