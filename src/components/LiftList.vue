<script setup lang="ts">
import { ref, Ref } from 'vue';
import { getExercises, Exercise} from "../services/exercises";
import LiftListItem from './LiftListItem.vue'

const exercises : Ref<Exercise[]> = ref([]);

getExercises().then(res => {
    exercises.value = res;
});

</script>

<template>
 <LiftListItem v-for="lift of exercises" :lift="lift" />
</template>