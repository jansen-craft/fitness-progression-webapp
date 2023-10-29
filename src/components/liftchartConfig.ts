export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            /*data: [40, 39, 10, 40, 39, 80, 40]*/
            data: new Array(7)
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}

/**
 * Generates a random array of numbers. Useful for testing chart series.
 * @param len Length of array
 * @param min Minimum value of items
 * @param max Max value of items
 */
export function generateRandomData(len: number, min: number, max: number) {
    let result = [];
    for(let i = 0; i < len; i++){
        result.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return result;
}