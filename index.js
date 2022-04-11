// First Block

var xValuesDoughnut = ["PSU Banks", "Pvt Banks", "Foreign Banks", "RRBs", "SFBs",];
var yValuesDoughnut = [56, 36, 4, 3, 1];
var barColors = [
  "#094780",
  "#0f69bf",
  "#42a6fa",
  "#a1d0fb",
  "#babbe2"
];

new Chart("doughnutChart", {
  type: "doughnut",
  data: {
    labels: xValuesDoughnut,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesDoughnut
    }]
  }
});

var depAndCredGrowthChart_xValues = ["", "Oct 2020", "Jan 2021", "Apr 2021", "Jul 2021", "Oct 2021", ""];

new Chart("depAndCredGrowthChart", {
  type: "line",
  data: {
    labels: depAndCredGrowthChart_xValues,
    datasets: [{
      label: "Credit Growth",
      data: [11.1, 12, 11.5, 12.1, 9.7, 10.6, 9.3, 11.4, 9.4, 9.3, 10.3],
      lineTension: 0,
      borderColor: "rgba(99,95,95,255)",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Deposit Growth",
      data: [1, 4.3, 2, 3, 5, 3, 2, 5, 2.5, 3.1],
      lineTension: 0,
      borderColor: "rgba(212,194,77,255)",
      fill: false,
      pointRadius: 0,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 14 } }],
    }
  }
}
);

// Second Block

var secondBlockChart1_xValues = ["", "September 2020", "December 2020", "March 2021", "June 2021", "September 2021", ""];

new Chart("secondBlockChart1", {
  type: "line",
  data: {
    labels: secondBlockChart1_xValues,
    datasets: [{
      label: "PSU Banks",
      data: [{ x: "September 2020", y: 6 }, { x: "December 2020", y: 7 }, { x: "March 2021", y: 4 }, { x: "June 2021", y: 3 }, { x: "September 2021", y: 5 }],
      lineTension: 0,
      borderColor: "#084780",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Private Banks",
      data: [{ x: "September 2020", y: 7 }, { x: "December 2020", y: 6 }, { x: "March 2021", y: 9 }, { x: "June 2021", y: 10 }, { x: "September 2021", y: 11 }],
      lineTension: 0,
      borderColor: "#0e6abf",
      fill: false,
      pointRadius: 0,
    }, {
      label: "SFBs",
      data: [{ x: "September 2020", y: 18 }, { x: "December 2020", y: 15 }, { x: "March 2021", y: 19 }, { x: "June 2021", y: 17 }, { x: "September 2021", y: 22 }],
      lineTension: 0,
      borderColor: "#a4d1f7",
      fill: false,
      pointRadius: 0,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { 
          min: 0,
          max: 30,
          stepSize: 10,
        }
      },
    }
  }
}
);

var xValuesDoughnut2 = ["PSU Banks", "Pvt Banks", "Foreign Banks", "RRBs", "SFBs",];
var yValuesDoughnut2 = [56, 36, 4, 3, 1];
var barColors = [
  "#094780",
  "#0f69bf",
  "#42a6fa",
  "#a1d0fb",
  "#babbe2"
];

new Chart("doughnutChart2", {
  type: "doughnut",
  data: {
    labels: xValuesDoughnut2,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesDoughnut2
    }]
  }
});

var secondBlockChart1B_xValues = ["", "September 2020", "December 2020", "March 2021", "June 2021", "September 2021", ""];

new Chart("secondBlockChart1B", {
  type: "line",
  data: {
    labels: secondBlockChart1B_xValues,
    datasets: [{
      label: "PSU Banks",
      data: [{ x: "September 2020", y: 7 }, { x: "December 2020", y: 7 }, { x: "March 2021", y: 4 }, { x: "June 2021", y: 3 }, { x: "September 2021", y: 5 }],
      lineTension: 0,
      borderColor: "#084780",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Private Banks",
      data: [{ x: "September 2020", y: 7 }, { x: "December 2020", y: 8 }, { x: "March 2021", y: 9 }, { x: "June 2021", y: 8 }, { x: "September 2021", y: 8 }],
      lineTension: 0,
      borderColor: "#0e6abf",
      fill: false,
      pointRadius: 0,
    }, {
      label: "SFBs",
      data: [{ x: "September 2020", y: 18 }, { x: "December 2020", y: 15 }, { x: "March 2021", y: 19 }, { x: "June 2021", y: 17 }, { x: "September 2021", y: 22 }],
      lineTension: 0,
      borderColor: "#a4d1f7",
      fill: false,
      pointRadius: 0,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 24 } }],
    }
  }
}
);


// Third Block

var thirdBlockChart1_xValues = ["", "July", "August", "September 2021", "October", "November", ""];

new Chart("thirdBlockChart1", {
  type: "line",
  // labels: thirdBlockChart1_xValues,
  data: {
    labels: thirdBlockChart1_xValues,
    datasets: [{
      label: "Non-Food Credit",
      data: [{ x: "July", y: 6 }, { x: "August", y: 7 }, { x: "September 2021", y: 7 }, { x: "October", y: 7 }, { x: "November", y: 7 }],
      lineTension: 0,
      borderColor: "#1d4360",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Agriculture",
      data: [{ x: "July", y: 12 }, { x: "August", y: 11 }, { x: "September 2021", y: 10 }, { x: "October", y: 10 }, { x: "November", y: 10 }],
      lineTension: 0,
      borderColor: "#cfc065",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Industry",
      data: [{ x: "July", y: 1 }, { x: "August", y: 2 }, { x: "September 2021", y: 2.5 }, { x: "October", y: 2.8 }, { x: "November", y: 3.5 }],
      lineTension: 0,
      borderColor: "#b3ccdd",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Services",
      data: [{ x: "July", y: 2 }, { x: "August", y: 3 }, { x: "September 2021", y: 1 }, { x: "October", y: 2 }, { x: "November", y: 3 }],
      lineTension: 0,
      borderColor: "#ca9779",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Personal Loans",
      data: [{ x: "July", y: 11 }, { x: "August", y: 12 }, { x: "September 2021", y: 12 }, { x: "October", y: 12 }, { x: "November", y: 12 }],
      lineTension: 0,
      borderColor: "#c6c0d2",
      fill: false,
      pointRadius: 0,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 14 } }],
    }
  }
}
);


var thirdBlockChart2_xValues = ["", "July", "August", "September 2021", "October", "November", ""];

new Chart("thirdBlockChart2", {
  type: "line",
  data: {
    labels: thirdBlockChart2_xValues,
    datasets: [{
      label: "NBFCs",
      data: [{ x: "July", y: 1 }, { x: "August", y: -3 }, { x: "September 2021", y: -2 }, { x: "October", y: 1 }, { x: "November", y: 5 }],
      lineTension: 0,
      borderColor: "#1a3f63",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Trade",
      data: [{ x: "July", y: 7 }, { x: "August", y: 7 }, { x: "September 2021", y: 4 }, { x: "October", y: 7 }, { x: "November", y: 9 }],
      lineTension: 0,
      borderColor: "#5b9fd5",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Power",
      data: [{ x: "July", y: 0 }, { x: "August", y: 3 }, { x: "September 2021", y: 4 }, { x: "October", y: 6 }, { x: "November", y: 5 }],
      lineTension: 0,
      borderColor: "#635d23",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Textiles",
      data: [{ x: "July", y: 26 }, { x: "August", y: 29 }, { x: "September 2021", y: 30 }, { x: "October", y: 31 }, { x: "November", y: 32 }],
      lineTension: 0,
      borderColor: "#dbd28a",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Metals",
      data: [{ x: "July", y: -14 }, { x: "August", y: -15 }, { x: "September 2021", y: -16 }, { x: "October", y: -16 }, { x: "November", y: -17 }],
      lineTension: 0,
      borderColor: "#60412c",
      fill: false,
      pointRadius: 0,
    }, {
      label: "Roads",
      data: [{ x: "July", y: 30 }, { x: "August", y: 29 }, { x: "September 2021", y: 25 }, { x: "October", y: 24 }, { x: "November", y: 23 }],
      lineTension: 0,
      borderColor: "#e7cabc",
      fill: false,
      pointRadius: 0,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        align: 'start'
      }
    },
    scales: {
      yAxes: [{ ticks: { min: -20, max: 35 } }],
    }
  }
}
);

var thirdBlockChart3_xValues = ["", "Jan 2021", "Apr 2021", "Jul 2021", "Oct 2021"];

new Chart("thirdBlockChart3", {
  type: "line",
  labels: [0, 10, 20],
  data: {
    labels: thirdBlockChart3_xValues,
    datasets: [{
      label: "All Loans",
      data: [6, 7, 4, 3, 5,],
      lineTension: 0,
      borderColor: "#084780",
      fill: false,
      pointRadius: 0,
    }, {
      label: "All Term Deposits",
      data: [7, 6, 9, 10, 11],
      lineTension: 0,
      borderColor: "#0e6abf",
      fill: false,
      pointRadius: 0,
    }, {
      label: "New Loans",
      data: [18, 15, 19, 17, 22],
      lineTension: 0,
      borderColor: "#a4d1f7",
      fill: false,
      pointRadius: 0,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
    scales: {
      y:
        [0, 10, 20]

    }
  }
}
);

// Fourth Block

var fourthBlockChart1_xValues = ["2018", "2019", "2020", "2021"];

new Chart("fourthBlockChart1", {
  type: "bar",
  data: {
    labels: fourthBlockChart1_xValues,
    datasets: [{
      label: "Qtr 1",
      data: [{ x: "2018", y: 1 }, { x: "2019", y: 3 }, { x: "2020", y: 2 }, { x: "2021", y: 1 }],
      backgroundColor: "#f2c5ad",
    }, {
      label: "Qtr 2",
      data: [{ x: "2018", y: 7 }, { x: "2019", y: 7 }, { x: "2020", y: 4 }, { x: "2021", y: 7 }],
      backgroundColor: "#f2c5ad",
    }, {
      label: "Qtr 3",
      data: [{ x: "2018", y: 5 }, { x: "2019", y: 3 }, { x: "2020", y: 4 }, { x: "2021", y: 6 }],
      backgroundColor: "#f2c5ad",
    }, {
      label: "Qtr 4",
      data: [{ x: "2018", y: 6 }, { x: "2019", y: 9 }, { x: "2020", y: 10 }],
      backgroundColor: "#f2c5ad",
    },]
  },
  options: {
    plugins: {
      title: {
        display: false
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 12 } }],
    }
  }
}
);

var fourthBlockChart2_xValues = ["2018", "2019", "2020", "2021"];

new Chart("fourthBlockChart2", {
  type: "bar",
  data: {
    labels: fourthBlockChart2_xValues,
    datasets: [{
      label: "Qtr 1",
      data: [{ x: "2018", y: 1 }, { x: "2019", y: 3 }, { x: "2020", y: 2 }, { x: "2021", y: 1 }],
      backgroundColor: "#717bc5",
    }, {
      label: "Qtr 2",
      data: [{ x: "2018", y: 7 }, { x: "2019", y: 7 }, { x: "2020", y: 4 }, { x: "2021", y: 7 }],
      backgroundColor: "#717bc5",
    }, {
      label: "Qtr 3",
      data: [{ x: "2018", y: 5 }, { x: "2019", y: 3 }, { x: "2020", y: 4 }, { x: "2021", y: 6 }],
      backgroundColor: "#717bc5",
    }, {
      label: "Qtr 4",
      data: [{ x: "2018", y: 6 }, { x: "2019", y: 9 }, { x: "2020", y: 10 }],
      backgroundColor: "#717bc5",
    },]
  },
  options: {
    plugins: {
      title: {
        display: false
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 12 } }],
    }
  }
}
);

var fourthBlockChart3_xValues = ["2018", "2019", "2020", "2021"];

new Chart("fourthBlockChart3", {
  type: "bar",
  data: {
    labels: fourthBlockChart3_xValues,
    datasets: [{
      label: "Qtr 1",
      data: [{ x: "2018", y: 1 }, { x: "2019", y: 3 }, { x: "2020", y: 2 }, { x: "2021", y: 1 }],
      backgroundColor: "#f2c5ad",
    }, {
      label: "Qtr 2",
      data: [{ x: "2018", y: 7 }, { x: "2019", y: 7 }, { x: "2020", y: 4 }, { x: "2021", y: 7 }],
      backgroundColor: "#f2c5ad",
    }, {
      label: "Qtr 3",
      data: [{ x: "2018", y: 5 }, { x: "2019", y: 3 }, { x: "2020", y: 4 }, { x: "2021", y: 6 }],
      backgroundColor: "#f2c5ad",
    }, {
      label: "Qtr 4",
      data: [{ x: "2018", y: 6 }, { x: "2019", y: 9 }, { x: "2020", y: 10 }],
      backgroundColor: "#f2c5ad",
    },]
  },
  options: {
    plugins: {
      title: {
        display: false
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 12 } }],
    }
  }
}
);
