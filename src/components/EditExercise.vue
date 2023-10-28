<script setup lang="ts">
import {ref, Ref} from 'vue';
import { useRoute } from 'vue-router';
import {createExercise, getExercise, Exercise} from '../services/exercises.ts';

const route = useRoute();
const now = new Date();

const exercise : Ref<Exercise> = ref({
    movement_id: -1,
    date: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,
    movement_name: "",
    reps: 0,
    sets: 0,
    weight: 0,
});

async function submit() {
    console.log(exercise.value);
    await createExercise(exercise.value);
}

if(route.params.id) {
    getExercise(Number(route.params.id)).then(val => {
        exercise.value = val;
    }).catch(err => {
        alert("Could not find exercise.");
        console.error(err);
    });
}

</script>

<template>
    <h1>{{ $route.params.id ? "Edit" : "New" }} Exercise</h1>
    <section>
        <label>Date: </label>
        <input v-model="exercise.date" id="exercise-date" type="date" />
    </section>
    <section>
        <label for="exercise-movement">Lift: </label>
        <select v-model="exercise.movement_name" id="exercise-movement">
            <option></option>
            <option>Bench</option>
            <option>Squat</option>
            <option>Deadlift</option>
            <option>Clean</option>
        </select>
    </section>
    <section>
        <label for="exercise-reps">Reps: </label>
        <input id="exercise-reps" type="number" v-model="exercise.reps" />
        <label>Sets: </label>
        <input id="exercise-sets" type="number" v-model="exercise.sets"/>
        <label>Weight: </label>
        <input id="exercise-weight" type="number" v-model="exercise.weight" />
    </section>
    <section>
        <button>Cancel</button>
        <button class="button-green" @click="submit()">Submit</button>
    </section>
</template>

<style scoped>
input[type=number] {
    width: 50px;
}

input, select {
    margin: 5px 10px 5px 0;
    padding: 5px;
    font-size: 12pt;
}

button {
    margin: 10px;
}

.button-green {
    background-color: green;
}
</style>