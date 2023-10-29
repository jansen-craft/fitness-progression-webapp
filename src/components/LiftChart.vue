<template>
    <Line :options="chartOptions" :data="chartData" />
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
    computed: {
        chartData() { 
            // This function is called every time the chart is rendered, so it can dynamically update.
            // You could move all the logic from liftchartConfig to here. Or later, API (maybe)
            let data = liftchartConfig.data;
            data.datasets[0].data = liftchartConfig.generateRandomData(7, 20, 80);
            return data;
        },
        chartOptions() {
            return liftchartConfig.options;
        }
    }
}
</script>