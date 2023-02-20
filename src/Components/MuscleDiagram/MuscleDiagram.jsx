import React, { useState } from 'react'
import { useMuscleContext } from '../../Context/MuscleContext'
import './MuscleDiagram.css'

export default function MuscleDiagram() {
    const [onExerciseList, setOnExerciseList] = useState(false);
    const { muscleGroups, exerciseList, handleSearchExercises, setMuscleSearch } = useMuscleContext();

    const list = Object.keys(muscleGroups);

    // function here to list out all of the Muscle Groups from the API
    // then check that list against the exercise.muscle property to dynamically update the color of the muscle name
    function compareLists() {

    }

  return (
    <ul className='muscleDiagram'>
        Are you missing any muscle groups from your exercise?
        {list.map((muscle, index) => 
        <li key={index}
        value={muscle}
        onClick={(e) => handleSearchExercises(muscle)}
        style={ onExerciseList 
            ? { background: 'chartreuse' } 
            : { background: 'red' }} >
            {muscle}
            </li>)}
        </ul>
  )
}
