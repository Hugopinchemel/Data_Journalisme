google.charts.load('current', {'packages':['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    drawDonutChart();
    drawRegionsMap();
}

function drawDonutChart() {
    var data2 = google.visualization.arrayToDataTable([
        ['Note', 'Pourcentage'],
        ['3/5', 32.2],
        ['4/5', 67.8]
    ]);

    var options2 = {
        title: 'Répartition des notes de résistance (500 mots de passe IA)',
        pieHole: 0.4,
        colors: ['#EA4335', '#34A853']
    };

    var chart2 = new google.visualization.PieChart(document.getElementById('donut_chart'));
    chart2.draw(data2, options2);
}

function drawRegionsMap() {
    const data = google.visualization.arrayToDataTable([
        ['Country', 'Score de Fiabilité des Mots de Passe (0-5)'],
        ['France', 1.6],
        ['Germany', 1.8],
        ['United Kingdom', 1.9],
        ['Italy', 1.5],
        ['Spain', 1.6],
        ['Belgium', 1.5],
        ['Portugal', 1.4],
        ['Russia', 1.7],
        ['Ukraine', 1.1],
        ['United States', 1.9],
        ['Canada', 1.8],
        ['Japan', 1.6],
        ['Australia', 1.2],
        ['Brazil', 1.3],
        ['Mexico', 1.2],
        ['Argentina', 1.3],
        ['China', 1.7]
    ]);

    const options = {
        colorAxis: { minValue: 0, maxValue: 5, colors: ['#4285F4', '#34A853', '#FBBC05', '#EA4335'] },        legend: { position: 'bottom' },
        backgroundColor: '#e8f5ff',
        datalessRegionColor: '#f0f0f0',
        defaultColor: '#cccccc'
    };

    const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}