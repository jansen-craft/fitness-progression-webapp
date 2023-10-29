<script setup lang="ts">
const props = defineProps(["lift"]);
</script>
<template>
    <div>
        <h3>{{ props.lift?.date }}</h3>
        <p>{{  props.lift?.movement_name }} - {{ props.lift?.weight }} lbs ({{ props.lift?.sets }} sets of {{ props.lift?.reps }} reps)</p>
        <router-link :to="`/edit-exercise/${ props.lift.movement_id }`"><button>Edit</button></router-link>
    </div>
</template>

<style scoped>
h3, p {
    display: inline;
    margin: 10px;
}
</style>