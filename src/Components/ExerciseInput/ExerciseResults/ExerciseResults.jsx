import { useEffect } from 'react'
import { useMuscleContext } from '../../../Context/MuscleContext'
import './ExerciseResults.css'

export default function ExerciseResults() {

    const { muscleSearchResults, handleNextPagination, 
        handlePreviousPagination, exerciseList,
        setExerciseList, exerciseArray, setExerciseArray, 
        onExerciseList, setOnExerciseList } = useMuscleContext();

        
    function handleAddExerciseToList(exercise) {
        let exerciseObj = {...exercise};
        const exerciseMap = exerciseList.map((exercise) => exercise.name)

        if (!exerciseMap.includes(exerciseObj.name)) {
            setExerciseList([...exerciseList, exerciseObj]);
            setOnExerciseList([...onExerciseList, ...exerciseObj.muscles])
        }
    }
    

    useEffect(() => {
        setExerciseArray(muscleSearchResults.results)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [muscleSearchResults.results]);
    
  return (
    <ul className='muscleSearchResultsList'>
        {exerciseArray && exerciseArray.map((exercise) => 
        <li className='exercise'
        key={exercise.id}

        onClick={(e) => handleAddExerciseToList(exercise)}
        value={exercise}>
            {exercise.name}
        </li>)}

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
