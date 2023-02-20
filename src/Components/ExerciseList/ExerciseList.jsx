import React from 'react'
import { useMuscleContext } from '../../Context/MuscleContext'
import './ExerciseList.css'

export default function ExerciseList() {
    const { exerciseList } = useMuscleContext();
  
    return (
    <ul className='exerciseList'>
        Exercises in your Workout
        {exerciseList.map((exercise) => 
        <li key={exercise.id}
        className='exercises'>
            {exercise.name}
        </li>)}
    </ul>
  )
}
