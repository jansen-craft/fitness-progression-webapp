<template>
    <Line :options="options" :data="data" />
</template>

<script lang="ts">
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import * as liftchartConfig from './liftchartConfig'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default {
    name: 'LineChart',
    components: { Line },
    data() {
        return liftchartConfig
    }
}
</script>