export async function getExerciseByMuscle(muscleGroupValue) {
    console.log('muscleGroupValue', muscleGroupValue)
    const data = await fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${muscleGroupValue}`);
    
    return data.json();
}