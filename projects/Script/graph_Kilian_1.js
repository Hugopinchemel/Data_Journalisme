google.charts.load('current', {'packages':['corechart', 'table']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = [
        ["Pays", "Attaques par million d'habitants"],
        ["Albania", 11493.57143],
        ["Algeria", 1295.846154],
        ["Andorra", 24650],
        ["Angola", 837.977208],
        ["Argentina", 1608.679654],
        ["Australia", 8779.070632],
        ["Austria", 5635.714286],
        ["Azerbaijan", 232.0192308],
        ["Bahamas", 10595],
        ["Bahrain", 9056.428571],
        ["Bangladesh", 538.5022779],
        ["Barbados", 10886.2069],
        ["Belarus", 4223.225806],
        ["Belgium", 5561.37931],
        ["Belize", 6620.930233],
        ["Benin", 763.1111111],
        ["Bosnia and Herzegovina", 4958.4375],
        ["Brazil", 2028.424942],
        ["British Virgin Islands", 50300],
        ["Bulgaria", 4844.461538],
        ["Cambodia", 1823.56383],
        ["Cameroon", 717.7894737],
        ["Canada", 4596.38404],
        ["Chile", 4414.663212],
        ["China", 3281.161806],
        ["China Hong Kong ", 54229.74026],
        ["China Macao ", 22037.14286],
        ["Colombia", 1797.749077],
        ["Costa Rica", 2272],
        ["Côte d'Ivoire", 818.7248322],
        ["Croatia", 10398.94737],
        ["Curacao", 34773.33333],
        ["Cyprus", 12419.16667],
        ["Czechia", 5716.481481],
        ["Democratic Republic of the Congo", 190.0490196],
        ["Denmark", 10045],
        ["Dominican Republic", 1657.117117],
        ["Ecuador", 1619.67033],
        ["Egypt", 686.6816952],
        ["El Salvador", 1421.230769],
        ["Estonia", 13414.61538],
        ["Eswatini", 3650.833333],
        ["Ethiopia", 230.0632411],
        ["Finland", 765.1785714],
        ["France", 480.8592593],
        ["Georgia", 4634.358974],
        ["Germany", 7525.041916],
        ["Ghana", 723.7883008],
        ["Greece", 4284.174757],
        ["Guam", 48276.47059],
        ["Guatemala", 644.53125],
        ["Guinea", 570.6206897],
        ["Honduras", 974.6846847],
        ["Hungary", 5182.395833],
        ["Iceland", 20312.5],
        ["India", 47.51188811],
        ["Indonesia", 876.3063063],
        ["Iran (Islamic Republic of)", 2944.543379],
        ["Iraq", 1424.63964],
        ["Ireland", 9173.137255],
        ["Isle of Man", 49623.52941],
        // ... (other data points)
    ];

    data.sort(function(a, b) {
        return b[1] - a[1];
    });

    var topCountries = data.slice(0, 15);
    var chartData = google.visualization.arrayToDataTable(topCountries);
    var tableData = google.visualization.arrayToDataTable(data);

    var options = {
        title: 'Attaques par million d\'habitants',
        hAxis: {
            title: 'Pays (Top 15)',
            slantedText: true,
            slantedTextAngle: 45,
            textStyle: {
                fontSize: 10 // Reduce font size for country names
            }
        },
        vAxis: {
            title: 'Attaques par million d\'habitants'
        },
        chartArea: {width: '70%'},
        height: 500,
        colors: ['#1b9e77']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_values'));
    chart.draw(chartData, options);

    var tableOptions = {
        showRowNumber: true,
        width: '100%',
        height: '100%',
        cssClassNames: {
            headerRow: 'header-row',
            tableRow: 'table-row',
            oddTableRow: 'odd-table-row',
            selectedTableRow: 'selected-table-row',
            hoverTableRow: 'hover-table-row',
            headerCell: 'header-cell',
            tableCell: 'table-cell',
            rowNumberCell: 'row-number-cell'
        }
    };

    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(tableData, tableOptions);
}

window.addEventListener('resize', function() {
    drawChart();
});