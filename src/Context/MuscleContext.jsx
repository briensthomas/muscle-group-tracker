import { createContext, useContext, useState } from "react";
import { getExerciseByMuscle } from "../Services/exercises";
const MuscleContext = createContext();

export default function MuscleProvider({ children }) {
    const [exerciseSearch, setExerciseSearch] = useState('');

    let muscleGroups = {
        'Biceps brachii': '1',
        'Anterior deltoid': '2',
        'Serratus anterior': '3',
        'Pectoralis major': '4',
        'Triceps brachii': '5',
        'Rectus abdominis': '6',
        'Gastrocnemius': '7',
        'Gluteus maximus': '8',
        'Trapezius': '9',
        'Quadriceps femoris': '10',
        'Biceps femoris': '11',
        'Latissimus dorsi': '12',
        'Brachialis': '13',
        'Obliquus externus abdominis': '14',
        'Soleus': '15',
      };

    //   console.log('muscleGroups[15]', muscleGroups[])


    async function handleSearchExercises(e) {
        console.log('exerciseSearch', exerciseSearch)
        let objectValue = muscleGroups[exerciseSearch];
        console.log('objectValue', objectValue)
        // 1) Take the user's input
        // 2) compare it to the list of items in the muscleGroups Object and access that key
        // 3) Add the
        // 4) place the value of that corresponding object into the fetch function
        const results = await getExerciseByMuscle(objectValue);
        console.log('results', results);
      }

    const value = {
        exerciseSearch, setExerciseSearch,
        handleSearchExercises,
        muscleGroups,
    };
    
    return <MuscleContext.Provider value={value}>
        {children}
    </MuscleContext.Provider>
}

export function useMuscleContext() {
    return useContext(MuscleContext);
}