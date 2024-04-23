// Import Chart.js from a CDN or local source
const ctx = document.getElementById('itineraryChart').getContext('2d');

const itineraryData = {
    labels: ["Requesting New Itinerary", "Using Existing Itinerary"],
    datasets: [{
        label: 'Number of Users',
        data: [55, 45],
        backgroundColor: ['skyblue', 'coral'],
        borderColor: ['#1f78b4', '#e31a1c'],
        borderWidth: 1,
        barThickness: 20
    }]
};

const config = {
    type: 'bar',
    data: itineraryData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    borderDash: [5, 5], // Dashed grid
                },
                ticks: {
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Comparison of Users Requesting New vs. Using Existing Itineraries',
                font: {
                    size: 12,
                    weight: 'bold'
                }
            }
        }
    }
};

const itineraryChart = new Chart(ctx, config); // Create the chart





//location request Chart
// Importing Chart.js
const ctx02 = document.getElementById('locationRequestsChart').getContext('2d');

// Data for the bar chart
const locations = ["New York", "Miami", "Los Angeles", "Paris", "Tokyo", "Other Locations"];
const requests = [80, 75, 70, 65, 60, 50];

// Define the bar chart data and configuration
const data = {
    labels: locations, // X-axis labels
    datasets: [{
        label: 'Number of Requests',
        data: requests, // Y-axis data
        backgroundColor: 'skyblue', // Bar color
        borderColor: '#1f78b4', // Bar border color
        borderWidth: 1, // Bar border width
        barThickness: 30 // Thickness of the bars
    }]
};

const configReq = {
    type: 'bar', // Bar chart type
    data: data, // Chart data
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Light grid lines
                    borderDash: [5, 5], // Dashed grid lines
                },
                ticks: {
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10,
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Histogram of Requests per Location', // Title of the chart
                font: {
                    size: 12,
                    weight: 'bold'
                }
            }
        }
    }
};

// Create the bar chart with the given configuration
const locationRequestsChart = new Chart(ctx02, configReq);




//Budget request Chart
// Importing Chart.js
const ctx03 = document.getElementById('budgetChart').getContext('2d');

// Data for the bar chart
const budgetLabels = ["Below $1000", "$1000 to $2500", "Above $2500"];
const budgetValues = [65, 25, 10]; // Corresponding user numbers


// Define the bar chart data and configuration
const budgetdata = {
    labels: budgetLabels, // X-axis labels
    datasets: [{
        label: 'Number of Requests',
        data: budgetValues, // Y-axis data
        backgroundColor: 'skyblue', // Bar color
        borderColor: '#1f78b4', // Bar border color
        borderWidth: 1, // Bar border width
        barThickness: 30 // Thickness of the bars
    }]
};

const budgetReq = {
    type: 'bar', // Bar chart type
    data: budgetdata, // Chart data
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Light grid lines
                    borderDash: [5, 5], // Dashed grid lines
                },
                ticks: {
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10,
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Histogram of Requests per Location', // Title of the chart
                font: {
                    size: 12,
                    weight: 'bold'
                }
            }
        }
    }
};

// Create the bar chart with the given configuration
const budgetChart = new Chart(ctx03, budgetReq);