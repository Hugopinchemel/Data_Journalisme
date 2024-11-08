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
        ["China Hong Kong Special Administrative Region", 54229.74026],
        ["China Macao Special Administrative Region", 22037.14286],
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
        ["Israel", 9138.877551],
        ["Italy", 3919.933884],
        ["Jamaica", 2557.931034],
        ["Japan", 406.2818471],
        ["Jersey", 30009.25926],
        ["Jordan", 1991.769912],
        ["Kazakhstan", 1634.879227],
        ["Kenya", 540.9929078],
        ["Kuwait", 3810],
        ["Lao People's Democratic Republic", 2455.324675],
        ["Latvia", 9838.947368],
        ["Lebanon", 3123.235294],
        ["Lesotho", 1210.434783],
        ["Liberia", 621.6981132],
        ["Libya", 2321.267606],
        ["Liechtenstein", 26589.74359],
        ["Lithuania", 7608.571429],
        ["Luxembourg", 23748.48485],
        ["Macedonia", 5423.333333],
        ["Malaysia", 3972.745098],
        ["Maldives", 11637.5],
        ["Mali", 282.4892704],
        ["Malta", 15879.24528],
        ["Mauritius", 9936.153846],
        ["Mexico", 2214.583658],
        ["Mongolia", 4974.857143],
        ["Morocco", 117.8457447],
        ["Mozambique", 359.4985251],
        ["Myanmar", 453.9082569],
        ["Namibia", 3226.666667],
        ["Nepal", 380.9538462],
        ["Netherlands", 833.258427],
        ["New Zealand", 13907.30769],
        ["Nigeria", 25.75067024],
        ["Northern Mariana Islands", 42680],
        ["Norway", 7547.636364],
        ["Oman", 3444.528302],
        ["Pakistan", 495.1718427],
        ["Panama", 3853.777778],
        ["Paraguay", 1235.584416],
        ["Peru", 1538.640227],
        ["Philippines", 1418.022071],
        ["Poland", 4263.717277],
        ["Portugal", 4689.117647],
        ["Puerto Rico", 3452.5],
        ["Qatar", 7707.241379],
        ["Republic of Korea", 11776.15679],
        ["Republic of Moldova", 5709.2],
        ["Reunion", 9766.666667],
        ["Romania", 3480.691489],
        ["Russian Federation", 5705.82357],
        ["Rwanda", 729.9285714],
        ["Saint Lucia", 6094.444444],
        ["Saint Vincent and the Grenadines", 8218.181818],
        ["Saudi Arabia", 3283.268698],
        ["Senegal", 951.0734463],
        ["Serbia", 3732.878788],
        ["Seychelles", 32760],
        ["Singapore", 17980.87719],
        ["Slovakia", 5354.259259],
        ["Slovenia", 10230],
        ["South Africa", 2380.973597],
        ["Spain", 4174],
        ["Sri Lanka", 1693.539823],
        ["State of Palestine", 1422.45283],
        ["Sweden", 6203.653846],
        ["Switzerland", 6452.5],
        ["Thailand", 210.0686813],
        ["Trinidad and Tobago", 4560],
        ["Tunisia", 2429.016393],
        ["Turkey", 2436.134259],
        ["Turkmenistan", 838.5714286],
        ["Uganda", 404.8812095],
        ["Ukraine", 6835.950413],
        ["United Arab Emirates", 5729.1],
        ["United Kingdom of Great Britain and Northern Ireland", 5667.377778],
        ["United Republic of Tanzania", 327.9525223],
        ["United States of America", 5832.933216],
        ["Uruguay", 3258.888889],
        ["Uzbekistan", 813.3424658],
        ["Venezuela (Bolivarian Republic of)", 1620.45977],
        ["Viet Nam", 1950.8867],
        ["Yemen", 467.7096774],
        ["Zambia", 747.8588235],
        ["Zimbabwe", 1063.99357]
    ];

    data.sort(function(a, b) {
        return b[1] - a[1];
    });

    var topCountries = data.slice(0, 15);
    var chartData = google.visualization.arrayToDataTable(topCountries);
    var tableData = google.visualization.arrayToDataTable(data);

    var options = {
        title: 'Attaques par million d\'habitants',
        hAxis: {title: 'Country', slantedText: true, slantedTextAngle: 45},
        vAxis: {title: 'Attacks'},
        chartArea: {width: '70%'},
        height: 500,
        colors: ['#1b9e77']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_values'));
    chart.draw(chartData, options);

    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(tableData, {showRowNumber: true, width: '100%', height: '100%'});
}

window.addEventListener('resize', function() {
    drawChart();
});