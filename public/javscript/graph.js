
const CHART = document.getElementById("lineChart");
CHART.height = 120;
const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;

let data = {

    sleep: [5.1, 6.3, 5.2, null, 7.8, 7, 2.1, null, 4.8, 5.5, 6.7, 7.2, 8.3, 8.1, 7.6, 7.1, 8.3, 5.3, 2.4, 6.1, 4.8, 4.7, 5.8, 6.4, 6.6,],
    exercise: [1.1, 0.2, 0, null, 1.7, 0.5, 1.2, null, 0.8, 0, 0, 3, 0.8, 1.1, 0.2, 0.4, 0, 0, 0.3, 1.1, 1.9, 2.1, 0, 0, 0, 0.4, 1.1, 0,],
    water: [2, 1, 2, null, 3, 3, 4, null, 4, 1, 1, 3, 4, 2, 3, 2, 1, 2, 2, 1, 4, 5, 7, 8, 8, 6, 2, 3, 3, 4, 1],
    overallMood: [5, 6, 6, 5, 4, 4, 5, 4, 6, 6, 8, 9, 8, 10, 7, 7, 8, 5, 3, 5, 4, 8, 7, 8, 9, 5, 4, 3, 6, 4]
    // emoji: [1, 2, 3, etc. ]
}

// let emojis = ["😁", "😂", "😍", "😔"];

drawGraph();


function drawGraph() {
    let lineChart = new Chart(CHART, {
        type: 'line',
        data: {

            // labels: [1 + emojis[0], 2 + emojis[1], 3 + emojis[2], 4 + emojis[3], 5 + emojis[1], 6 + emojis[2], 7 + emojis[0], 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],

            datasets: [
                {
                    label: "Glasses of water drunk",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(113, 72, 249, 0.4)",
                    borderColor: "rgba(113, 72, 249, 0.8)",
                    borderJoinStyle: 'miter',
                    pointBorderWidth: 1,
                    borderWidth: 3,
                    pointRadius: 6,
                    data: data.water,
                    segment: {
                        borderDash: ctx => skipped(ctx, [6, 6]),
                    },
                    // xAxisID: "test?"
                },
                {
                    label: "Hours of sleep",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(0, 0, 255, 0.9)",
                    borderColor: "rgba(0, 200, 255, 0.9",
                    borderJoinStyle: 'miter',
                    pointBorderWidth: 1,
                    pointRadius: 6,
                    pointColor: "rgba(200, 0, 255, 0.9",
                    data: data.sleep,
                    segment: {
                        borderDash: ctx => skipped(ctx, [6, 6]),
                    },
                },
                {
                    label: "Hours of exercise",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(240, 120, 60, 0.9)",
                    borderColor: "rgba(240, 120, 60, 0.9)",
                    borderJoinStyle: 'miter',
                    pointBorderWidth: 1,
                    pointRadius: 6,
                    pointColor: "rgba(240, 200, 60, 0.9)",
                    data: data.exercise,
                    segment: {
                        borderDash: ctx => skipped(ctx, [6, 6]),
                    },
                },
                {
                    label: "Overall mood",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(249, 225, 72, 0.9)",
                    borderColor: "rgba(249, 225, 72, 0.9)",
                    borderJoinStyle: 'miter',
                    pointBorderWidth: 1,
                    borderWidth: 6,
                    pointRadius: 6,
                    pointColor: "rgba(249, 225, 72, 0.9)",
                    data: data.overallMood,
                    segment: {
                        borderDash: ctx => skipped(ctx, [6, 6]),
                    },
                }
            ]


        },
        options: {
            scales: {
                xAxes: {
                    ticks: {
                        font: {
                            size: 25
                        }
                    },
                    weight: -2
                },
                yAxes: {
                    ticks: {
                        font: {
                            size: 25
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 28
                        }
                    }
                }
            }
        },

    })
};
