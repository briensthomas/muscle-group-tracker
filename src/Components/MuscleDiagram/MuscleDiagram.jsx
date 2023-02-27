import { useState, useEffect } from 'react'
import { useMuscleContext } from '../../Context/MuscleContext'
import './MuscleDiagram.css'

export default function MuscleDiagram() {
  const { setExerciseSearch, getAllMuscles, onExerciseList } = useMuscleContext();
  
  const [muscleList, setMuscleList] = useState([])
  
  function compareLists() {
    muscleList.forEach((muscle) => {
      if (onExerciseList.some((exercise) => exercise === muscle.id)) {
        muscle.active = true;
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
      fetchMuscles();

      const newMuscleList = muscleList.map((muscle) => ({
        ...muscle, active : false}))
        setMuscleList(newMuscleList);
        compareLists();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [compareLists()])
      
  return (
    <ul className='muscleDiagram'>
        Are you missing any muscle groups from your exercise?
        {muscleList.map((muscle) => 
        <li key={muscle.id}
        value={muscle.name}
        onClick={(e) => setExerciseSearch(muscle.name)}
        className={muscle.active ? 'onList' : 'offList'}
            >
            {muscle.name}            
            </li>)}
        </ul>
  )
}
