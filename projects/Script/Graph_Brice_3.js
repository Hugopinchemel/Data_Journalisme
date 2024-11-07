google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Utilisation du 2FA (%) ', 'Piratages échoués (%) '],
        ['2016', 20, 60],
        ['2017', 30, 65],
        ['2018', 40, 70],
        ['2019', 50, 80],
        ['2020', 56, 90],
        ['2021', 60, 92],
        ['2022', 62, 94],
        ['2023', 64, 95],
        ['2024', 69, 98],
    ]);


    var options = {
        title: 'Utilisation du 2FA et taux de piratages échoués chez les particuliers (2016-2024)',
        echo: 'Google Threat Horizons',
        curveType: 'function',
        legend: {position: 'bottom'}
    };


    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));


    chart.draw(data, options);
}
