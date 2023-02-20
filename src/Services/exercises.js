export async function getExerciseByMuscle(muscleGroupValue) {
    const data = await fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${muscleGroupValue}`);
    
    return data.json();
}

export async function getExerciseByPagination(url) {
    const data = await fetch(`${url}`)

    return data.json();
}

export async function getAllMuscles() {
    const data = await fetch('https://wger.de/api/v2/muscle/?language=2');

    return data.json();
}