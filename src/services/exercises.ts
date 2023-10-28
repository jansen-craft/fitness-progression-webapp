let temp_exercises = [
    {movement_id: 0, user_id: 0, movement_name: "Bench", reps: 8, sets: 3, weight: 195, date: "2023-10-28" }
];

interface Exercise {
    movement_id: number,
    user_id: number,
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
    return temp_exercises.find(i => i.movement_id=id);
}
export async function createExercise(exercise: Exercise) {
    exercise.movement_id = temp_exercises.length;
    temp_exercises.push(exercise);
}
