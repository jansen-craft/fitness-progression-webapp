let temp_exercises : Exercise[] = [
    {movement_id: 0, movement_name: "Bench", reps: 8, sets: 3, weight: 195, date: "2023-10-28" }
];

export interface Exercise {
    movement_id?: number,
    movement_name: string,
    reps: number,
    sets: number,
    weight: number,
    date: string
}

/**
 * Retrieve all exercises for the user
 * @returns A list of Exercises
 */
export async function getExercises() {
    return temp_exercises;
}

/**
 * Retrieve a list of exercises for the user by the type of lift.
 * @param type Type of movement in exercise
 * @returns List of exercises that match the filter
 */
export async function getExercisesByLift(type: string) {
    return temp_exercises.filter(x => x.movement_name == type);
}

/**
 * Retrieves a single exercise by its ID
 * @param id ID of exercise to find
 * @returns Single exercise with the matching ID
 */
export async function getExercise(id: number) {
    const found = temp_exercises.find(i => i.movement_id==id);
    if(found)
        return found;
    throw "Could not find exercise " + id + ".";
}

/**
 * Create a new exercise
 * @param exercise New exercise. If movement_id is set, it will be replaced. (For now)
 */
export async function createExercise(exercise: Exercise) {
    exercise.movement_id = temp_exercises.length;
    temp_exercises.push(exercise);
}

/**
 * Replaces an exercise with new attributes
 * @param id ID of exercise to replace
 * @param exercise New exercise to replace with
 */
export async function editExercise(id: number, exercise: Exercise) {
    const i = temp_exercises.findIndex(j => j.movement_id == id);
    temp_exercises[i] = exercise;
}