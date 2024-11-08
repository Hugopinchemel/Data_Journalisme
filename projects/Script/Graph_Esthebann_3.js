google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Source", "Distance d'édition maximale"],
        ["IA", 12],
        ["Humains", 6]
    ]);


    var options = {
        title: "Distance d'édition maximale (500 mots de passe par IA et Humains)",
        vAxis: {title: "Valeurs"},
        hAxis: {title: "Source"},
    };


    var chart = new google.visualization.ColumnChart(document.getElementById("column_chart"));
    chart.draw(data, options);
}
