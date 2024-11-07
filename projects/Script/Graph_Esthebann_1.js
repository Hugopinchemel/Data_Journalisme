google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Note', 'Pourcentage'],
        ['3/5', 32.2],
        ['4/5', 67.8]
    ]);


    var options = {
        title: 'Répartition des notes de résistance (500 mots de passe IA)',
        pieHole: 0.4,
        colors: ['#87CEEB', '#FFA500']
    };


    var chart = new google.visualization.PieChart(document.getElementById('donut_chart'));
    chart.draw(data, options);
}
