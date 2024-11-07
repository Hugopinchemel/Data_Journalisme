google.charts.load('current', {'packages': ['bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Méthode', 'Efficacité (%)', 'Utilisation (%)',],
        ['SMS', 76, 50,],
        ['Email', 85, 35,],
        ['Google Authentificator', 99.9, 60,],
        ['Keepass', 99, 80,],
        ['Biométrie', 90, 70],
    ]);


    var options = {
        chart: {
            title: 'Types de 2FA utilisés en France et leur efficacité',
            subtitle: 'Source : Google Threat Horizons, Cybermalveillance.gouv',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };


    var chart = new google.charts.Bar(document.getElementById('barchart_material'));


    chart.draw(data, google.charts.Bar.convertOptions(options));
}
