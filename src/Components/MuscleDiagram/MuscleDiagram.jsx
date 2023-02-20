import React, { useState, useEffect } from 'react'
import { useMuscleContext } from '../../Context/MuscleContext'
import './MuscleDiagram.css'

export default function MuscleDiagram() {
  const { muscleGroups, exerciseList, handleSearchExercises, exerciseSearch, setExerciseSearch } = useMuscleContext();
  
  const [onExerciseList, setOnExerciseList] = useState(exerciseList);

  // const muscleList = Object.entries(muscleGroups).map((key, value) => ({[key[0]]: [value], Active: false}))

  // console.log('Object.entries(muscleGroups', Object.entries(muscleGroups));
  
  const muscleList = Object.keys(muscleGroups);
  // console.log('muscleList', muscleGroups);
  
  // console.log('muscleList', muscleList);

    // function here to muscleList out all of the Muscle Groups from the API
    // then check that muscleList against the exercise.muscle property to dynamically update the color of the muscle name
    function compareLists() {
      if (exerciseList.includes(Object.values(muscleGroups))) {
        setOnExerciseList(true);
        // in the ExerciseList, if there is an object with a property of exerciseList.muscle[number]
        // set the key for that muscle as true
      }
    }

    // useEffect(() => {
    //   setOnExerciseList(exerciseList.map((exercise) => {
    //     if (muscleGroups.some((muscle) => muscle === exercise.muscle)) {
    //       console.log('exercise', exercise)
    //       return exercise;
    //     }
    //     return exercise;
    //   })
    //   );
    // }, [exerciseList])

    function handleMissingMuscles(e) {
      // Only searches for the last item clicked?
      // ie: click on Biceps, does not search, click on Pecs, searches
      // biceps
      console.log('e.target.innerText', e.target.innerText);
      setExerciseSearch(e.currentTarget.innerText);
      // console.log('exerciseSearch', exerciseSearch);
      handleSearchExercises(e.currentTarget.innerText);
    }

  return (
    <ul className='muscleDiagram'>
        Are you missing any muscle groups from your exercise?
        {muscleList.map((muscle, index) => 
        <li key={index}
        value={muscle}
        onClick={handleMissingMuscles}
        style={ muscle.Active 
            ? { background: 'chartreuse' } 
            : { background: 'red' }} >
            {muscle}
            </li>)}
        </ul>
  )
}
