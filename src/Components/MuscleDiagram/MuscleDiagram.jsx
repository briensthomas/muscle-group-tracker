import React, { useState, useEffect } from 'react'
import { useMuscleContext } from '../../Context/MuscleContext'
import './MuscleDiagram.css'

export default function MuscleDiagram() {
  const { muscleGroups, exerciseList, setExerciseSearch, getAllMuscles, exerciseArray, onExerciseList } = useMuscleContext();
  
  const [muscleList, setMuscleList] = useState([])
  
  function compareLists() {
    muscleList.forEach((muscle) => {
      if (onExerciseList.some((exercise) => exercise === muscle.id)) {
        muscle.active = true;
        console.log('muscle', muscle)
        return muscle;
      }
      return muscle;
    })
  }

    useEffect(() => {
      const fetchMuscles = async () => {
          const data = await getAllMuscles();
          setMuscleList(data.results);
      }
      const newMuscleList = muscleList.map((muscle) => ({
        ...muscle, active : false}))
        console.log('newMuscleList', newMuscleList)
        setMuscleList(newMuscleList);
        console.log('muscleList', muscleList)
        fetchMuscles();
        compareLists();
      }, [compareLists()])
      
      console.log('muscleList', muscleList);
  return (
    <ul className='muscleDiagram'>
        Are you missing any muscle groups from your exercise?
        {muscleList.map((muscle) => 
        <li key={muscle.id}
        value={muscle.name}
        onClick={(e) => setExerciseSearch(muscle.name)}
        style={ muscle.active 
            ? { background: 'chartreuse' } 
            : { background: 'red' }} >
            {muscle.name}, 
            
            {muscle.active ? 'true' : 'false'}
            </li>)}
        </ul>
  )
}
