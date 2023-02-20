export async function getExerciseByMuscle(muscleGroupValue) {
    console.log('muscleGroupValue', muscleGroupValue)
    const data = await fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${muscleGroupValue}`);
    
    console.log('data.url', data.url)
    return data.json();
}

export async function getExerciseByPagination(url) {
    const data = await fetch(`${url}`)

    return data.json();
}