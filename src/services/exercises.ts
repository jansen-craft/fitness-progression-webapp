let temp_exercises : Exercise[] = [
    {movement_id: 0, movement_name: "Bench", reps: 8, sets: 3, weight: 195, date: "2023-10-28" }
];

export interface Exercise {
    movement_id: number | undefined,
    movement_name: string,
    reps: number,
    sets: number,
    weight: number,
    date: string
}

export async function getExercises() {
    return temp_exercises;
}

export async function getExercise(id: number) {
    const found = temp_exercises.find(i => i.movement_id==id);
    if(found)
        return found;
    throw "Could not find exercise " + id + ".";
}

export async function createExercise(exercise: Exercise) {
    exercise.movement_id = temp_exercises.length;
    temp_exercises.push(exercise);
}

export async function editExercise(id: number, exercise: Exercise) {
    const i = temp_exercises.findIndex(j => j.movement_id == id);
    temp_exercises[i] = exercise;
}