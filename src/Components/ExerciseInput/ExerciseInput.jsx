import React from 'react'

export default function ExerciseInput() {
  return (
    <div>
        <label>
        <input 
            type={Text}
            placeholder={'Add an exercise to your workout'} 
            // onChange={(e) => setExerciseSearch(e.target.value)}
            />
        </label>
    </div>
  )
}
