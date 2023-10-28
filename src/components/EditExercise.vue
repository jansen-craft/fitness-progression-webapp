<script setup lang="ts">
import {ref} from 'vue';
import {createExercise} from '../services/exercises.ts';

const now = new Date();

const date = ref(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);
const lift = ref("");
const reps = ref(0);
const sets = ref(0);
const weight = ref(0);

async function submit() {
    await createExercise({
        movement_id:  -1,
        date: date.value,
        weight: weight.value,
        reps: reps.value,
        sets: sets.value,
        movement_name: lift.value,
        user_id: 0 // Default.
    });
}
</script>

<template>
    <h1>New Exercise</h1>
    <section>
        <label>Date: </label>
        <input v-model="date" id="exercise-date" type="date" />
    </section>
    <section>
        <label for="exercise-movement">Lift: </label>
        <select v-model="lift" id="exercise-movement">
            <option></option>
            <option>Bench</option>
            <option>Squat</option>
            <option>Deadlift</option>
            <option>Clean</option>
        </select>
    </section>
    <section>
        <label for="exercise-reps">Reps: </label>
        <input id="exercise-reps" type="number" v-model="reps" />
        <label>Sets: </label>
        <input id="exercise-sets" type="number" v-model="sets"/>
        <label>Weight: </label>
        <input id="exercise-weight" type="number" v-model="weight" />
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