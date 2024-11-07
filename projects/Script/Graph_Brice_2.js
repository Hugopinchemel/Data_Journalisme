google.charts.load('current', {'packages': ['bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Année', 'Taux de piratages réussis sur les organisations (%) ', 'Taux de piratages échoués sur les organisations (%)', 'Taux de piratages réussis sur les organisations avec A2F (%)', 'Taux de piratages échoués sur les organisations avec A2F (%)'],
        ['2016', 90, 10, 0, 0],
        ['2017', 89, 11, 0, 0],
        ['2018', 88, 12, 70, 38],
        ['2019', 88, 12, 63, 47],
        ['2020', 85, 15, 50, 50],
        ['2021', 80, 20, 48, 52],
        ['2022', 78, 22, 49, 53],
        ['2023', 75, 25, 45, 55],
        ['2024', 70, 30, 31, 69],
    ]);


    var options = {
        chart: {
            title: 'Taux de piratages sur les organisations : 2016-2024',
        }
    };


    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));


    chart.draw(data, google.charts.Bar.convertOptions(options));
}
