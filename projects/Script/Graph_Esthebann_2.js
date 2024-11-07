google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Source", "Résistance minimale", "Résistance maximale", "Résistance moyenne"],
        ["IA", 3, 4, 4],
        ["Humains", 1, 1, 1]
    ]);


    var options = {
        title: "Résistance des mots de passe (500 mots de passe par IA et Humains)",
        vAxis: {title: "Valeurs"},
        hAxis: {title: "Source"},
        seriesType: "bars",
        colors: ['#98FB98', '#FFD700', '#87CEEB']
    };


    var chart = new google.visualization.ComboChart(document.getElementById("combo_chart"));
    chart.draw(data, options);
}
