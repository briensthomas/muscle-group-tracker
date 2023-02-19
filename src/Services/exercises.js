export async function getExerciseByMuscle(muscleGroupValue) {
    console.log('muscleGroupValue', muscleGroupValue)
    const data = await fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${muscleGroupValue}`);
    
    console.log('data.url', data.url)
    return data.json();
}

// Instead of trying to create a new fetch for pagination, find a way to pass the
// object values for the next or previous key up through context, and back to this fetch
// file

export async function getExerciseByPagination(url) {
    console.log('url', url)
    const data = await fetch(`${url}`)

    return data.json();
}