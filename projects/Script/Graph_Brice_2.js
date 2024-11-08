google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Utilisation du 2FA (%) ', 'Piratages réussis (%) '],
        ['2016',  20, 40],
        ['2017',  30, 35],
        ['2018',  40, 30],
        ['2019',  50, 20],
        ['2020',  56, 10],
        ['2021',  60, 8],
        ['2022',  62, 6],
        ['2023',  64, 5],
        ['2024',  69, 2],
    ]);


    var options = {
        title: 'Utilisation du 2FA et taux de piratages réussis chez les particuliers (2016-2024)',
        echo : 'Google Threat Horizons' ,
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { minValue: 0, maxValue: 9 },
        pointSize: 20,
        pointShape: { type: 'star', sides: 4 },
    };


    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));


    chart.draw(data, options);
}
