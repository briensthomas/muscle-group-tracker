import { createContext, useContext, useState } from "react";
import { getExerciseByMuscle, getExerciseByPagination } from "../Services/exercises";
const MuscleContext = createContext();

export default function MuscleProvider({ children }) {
    const [exerciseSearch, setExerciseSearch] = useState('');
    const [muscleSearchResults, setMuscleSearchResults] = useState([]);
    const [exerciseList, setExerciseList] = useState([]);
    const [musclesTargetedList, setMusclesTargetedList] = useState([]);

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

    async function handleSearchExercises(e) {
        if (exerciseSearch !== undefined) {
            let muscleValue = muscleGroups[exerciseSearch];
            const data = await getExerciseByMuscle(muscleValue);
            setMuscleSearchResults(data)
        }
      }

    const nextPage = muscleSearchResults.next;
    const previousPage = muscleSearchResults.previous;

    async function handleNextPagination(e) {
        if (nextPage) {
            const data = await getExerciseByPagination(nextPage);
            setMuscleSearchResults(data);
        }
    }

    async function handlePreviousPagination(e) {
        if (previousPage) {
            const data = await getExerciseByPagination(previousPage);
            setMuscleSearchResults(data);
        }
    }

    const value = {
        exerciseSearch, setExerciseSearch,
        muscleSearchResults, setMuscleSearchResults, 
        handleSearchExercises, handleNextPagination, 
        handlePreviousPagination, 
        exerciseList, setExerciseList,
        musclesTargetedList, setMusclesTargetedList,   
        muscleGroups,
    };
    
    return <MuscleContext.Provider value={value}>
        {children}
    </MuscleContext.Provider>
}

export function useMuscleContext() {
    return useContext(MuscleContext);
}