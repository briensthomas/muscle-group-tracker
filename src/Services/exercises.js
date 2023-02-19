export async function getExerciseByMuscle(muscleGroupNumber) {
    console.log('muscleGroupNumber', muscleGroupNumber)
    const data = await fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${muscleGroupNumber}`);
    
    return data.json();
}