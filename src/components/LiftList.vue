<script setup lang="ts">
import { ref, Ref , nextTick} from 'vue';
import { getExercises, deleteExercise, Exercise} from "../services/exercises";
import LiftListItem from './LiftListItem.vue'

const exercises : Ref<Exercise[]> = ref([]);

getExercises().then(res => {
    exercises.value = res;
});

async function delEx(id: number) {
    await deleteExercise(id)
    nextTick(async () => {
        exercises.value = await getExercises();
    });
}

</script>

<template>
    <div class="LiftList">
        <LiftListItem v-for="lift of exercises" :lift="lift" @update="delEx"/>
    </div>
</template>

<style scoped>
.LiftList {
    
}
</style>