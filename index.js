
const labelsFirstChart = [
    '1',
    '5',
    '10',
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
];

const labelsSecondChart = [
    '1000',
    '2000',
    '3000',
    '4000',
    '5000',
    '6000',
    '7000',
    '8000',
    '9000',
    '10000'
];

const labelsThirdChart = [
    'Gatsby',
    'Hugo',
    'Jekyll',
    'Next.js',
    'Nuxt.js',
    'Hexo'
];

const dataFirstChart = {
    labels: labelsFirstChart,
    datasets: [
    {
      label: 'Gatsby',
      backgroundColor: 'rgb(255, 0, 255)',
      borderColor: 'rgb(255, 0, 255)',
      data: [17.31, 17.07, 16.87, 17.35, 17.43, 17.85, 18.21, 18.49, 18.81, 19.26, 19.25, 19.81, 20.19, 20.53],
    },
    {
        label: 'Hugo',
        backgroundColor: 'rgb(255,64,136)',
        borderColor: 'rgb(255,64,136)',
        data: [0.07, 0.08, 0.08, 0.10, 0.11, 0.14, 0.17, 0.21, 0.23, 0.26, 0.30, 0.31, 0.35, 0.36],
    },
    {
        label: 'Jekyll',
        backgroundColor: 'rgb(255,204,0)',
        borderColor: 'rgb(255,204,0)',
        data: [0.37, 0.38, 0.40, 0.45, 0.51, 0.63, 0.74, 0.86, 0.98, 1.07, 1.19, 1.34, 1.44, 1.56],
    },
    {
        label: 'Next.js',
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        data: [4.63, 4.43, 4.59, 4.70, 4.71, 4.89, 5.14, 5.46, 5.55, 5.74, 6.03, 6.17, 6.33, 6.67],
    },
    {
        label: 'Nuxt.js',
        backgroundColor: 'rgb(0,220,130)',
        borderColor: 'rgb(0,220,130)',
        data: [8.16, 8.24, 8.21, 8.50, 8.66, 8.96, 9.29, 9.59, 9.94, 10.34, 10.64, 10.87, 11.30, 11.59],
    },
    {
        label: 'Hexo',
        backgroundColor: 'rgb(14,131,205)',
        borderColor: 'rgb(14,131,205)',
        data: [1.15, 1.20, 1.25, 1.42, 1.68, 2.07, 2.43, 2.81, 3.28, 3.62, 4.03, 4.44, 4.79, 7.09],
    }
    ]
};

const dataSecondChart = {
    labels: labelsSecondChart,
    datasets: [
    {
      label: 'Gatsby',
      backgroundColor: 'rgb(255, 0, 255)',
      borderColor: 'rgb(255, 0, 255)',
      data: [20.53, 23.88, 26.96, 30.99, 33.99, 37.28, 39.93, 44.57, 52.21, 63.14],
    },
    {
        label: 'Hugo',
        backgroundColor: 'rgb(255,64,136)',
        borderColor: 'rgb(255,64,136)',
        data: [0.36, 0.69, 0.98, 1.27, 1.59, 1.90, 2.19, 2.49, 4.23, 3.32],
    },
    {
        label: 'Jekyll',
        backgroundColor: 'rgb(255,204,0)',
        borderColor: 'rgb(255,204,0)',
        data: [1.56, 2.76, 3.97, 5.14, 6.36, 7.60, 8.79, 9.94, 11.12, 12.34],
    },
    {
        label: 'Next.js',
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        data: [6.67, 8.25, 9.58, 10.47, 11.05, 13.97, 15.55, 17.12, 18.48, 19.63],
    },
    {
        label: 'Nuxt.js',
        backgroundColor: 'rgb(0,220,130)',
        borderColor: 'rgb(0,220,130)',
        data: [11.59, 14.54, 17.56, 20.68, 23.93, 27.76, 29.66, 33.99, 36.54, 41.08],
    },
    {
        label: 'Hexo',
        backgroundColor: 'rgb(14,131,205)',
        borderColor: 'rgb(14,131,205)',
        data: [7.09, 12.17, 16.57, 21.19, 25.87, 30.25, 32.69, 36.66, 39.83, 44.23],
    }
    ]
};

const dataThirdChart = {
    labels: labelsThirdChart,
    datasets: [{
        data: [20.53, 0.36, 1.56, 6.67, 11.59, 7.09],
        backgroundColor: [
            'rgb(255, 0, 255)',
            'rgb(255,64,136)', 
            'rgb(255,204,0)',
            'rgb(0,0,0)',
            'rgb(0,220,130)',
            'rgb(14,131,205)'
        ],
        borderColor: [
            'rgb(255, 0, 255)',
            'rgb(255,64,136)', 
            'rgb(255,204,0)',
            'rgb(0,0,0)',
            'rgb(0,220,130)',
            'rgb(14,131,205)'
        ],
    }]
};

const configFirstChart = {
    type: 'line',
    data: dataFirstChart,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Number of files',
                    
                },
                grid: {
                    borderColor: '#2c2e32',
                    tickColor: '#2c2e32',
                    color: '#2c2e32'
                },
            },
            y: {
                title:{
                    display: true,
                    text: 'Time Build, seconds',
                },
                grid: {
                    borderColor: '#2c2e32',
                    tickColor: '#2c2e32',
                    color: '#2c2e32'
                },
            }
        }
    }
};

const configSecondChart = {
    type: 'line',
    data: dataSecondChart,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Number of files',
                    
                },
                grid: {
                    borderColor: '#2c2e32',
                    tickColor: '#2c2e32',
                    color: '#2c2e32'
                },
            },
            y: {
                title:{
                    display: true,
                    text: 'Time Build, seconds',
                },
                grid: {
                    borderColor: '#2c2e32',
                    tickColor: '#2c2e32',
                    color: '#2c2e32'
                },
            }
        }
    }
};

const configThirdChart = {
    type: 'bar',
    data: dataThirdChart,
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                grid: {
                    borderColor: '#2c2e32',
                    tickColor: '#2c2e32',
                    color: '#2c2e32'
                },
            },
            y: {
                title:{
                    display: true,
                    text: 'Time Build, seconds',
                },
                grid: {
                    borderColor: '#2c2e32',
                    tickColor: '#2c2e32',
                    color: '#2c2e32'
                },
            }
        }
    }
};

const firstChart = new Chart(
    document.getElementById('firstChart'),
    configFirstChart
);

const secondChart = new Chart(
    document.getElementById('secondChart'),
    configSecondChart
);

const thirdChart = new Chart(
    document.getElementById('thirdChart'),
    configThirdChart
);