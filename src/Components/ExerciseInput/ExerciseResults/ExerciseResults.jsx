import React, { useState, useEffect } from 'react'
import { useMuscleContext } from '../../../Context/MuscleContext'
import './ExerciseResults.css'

export default function ExerciseResults() {
    const [exerciseArray, setExerciseArray] = useState();

    const { muscleSearchResults, handleNextPagination, handlePreviousPagination } = useMuscleContext();

    useEffect(() => {
        setExerciseArray(muscleSearchResults.results)
    }, [muscleSearchResults.results]);



    // const results = muscleSearchResults.results;
    console.log('muscleSearchResults', muscleSearchResults);

  return (
    <ul className='muscleSearchResultsList'>
        {exerciseArray && exerciseArray.map((exercise) => 
        <li className='exercise'
        key={exercise.id}>
            {exercise.name}
        </li>)}
        
        { exerciseArray && exerciseArray.length ? 
        <section>
                <button onClick={handlePreviousPagination}>
                    Prev
                </button>

                <button onClick={handleNextPagination}>
                    Next
                </button>
        </section>
         :  <></>
        }
    </ul>
  )
}
