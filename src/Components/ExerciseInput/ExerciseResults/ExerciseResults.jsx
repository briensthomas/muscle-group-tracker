import React, { useState, useEffect } from 'react'
import { useMuscleContext } from '../../../Context/MuscleContext'
import './ExerciseResults.css'

export default function ExerciseResults() {
    const [exerciseArray, setExerciseArray] = useState();

    const { muscleSearchResults, handleNextPagination, handlePreviousPagination, exerciseList,
    setExerciseList } = useMuscleContext();

    useEffect(() => {
        setExerciseArray(muscleSearchResults.results)
    }, [muscleSearchResults.results]);

    function handleAddExerciseToList(exercise) {
        let exerciseObj = {...exercise};
        // Stumped on how to prevent duplicates from being added to the array
        if (!exerciseList.includes(exerciseObj)) {
            console.log('e.target.value', exerciseObj);
            setExerciseList([...exerciseList, exerciseObj]);
            console.log('exerciseList', exerciseList);
        }
    }

  return (
    <ul className='muscleSearchResultsList'>
        {exerciseArray && exerciseArray.map((exercise) => 
        <li className='exercise'
        key={exercise.id}
        // without the onClick using a parameter of e and an arrow function, it infinitely passes exercises to the list
        onClick={(e) => handleAddExerciseToList(exercise)}
        value={exercise}>
            {exercise.name}
        </li>)}
        {/* Is there data in the exercise array, and are there enough 
        exercises to warrant pagination? */}
        { exerciseArray && muscleSearchResults.count > 30 ? 
        <section className='paginationButtons'>
            
                <button onClick={handlePreviousPagination}
                disabled={muscleSearchResults.previous ? false : true}>
                    Prev
                </button>

                <button onClick={handleNextPagination}
                disabled={muscleSearchResults.next ? false : true}>
                    Next
                </button>
        </section>
         :  <></>
        }
    </ul>
  )
}
