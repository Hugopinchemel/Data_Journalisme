google.charts.load('current', {'packages':['corechart', 'table']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Remplacez les données actuelles par les cyberattaques par milliard de dollars de PIB
    var data = [
        ["Pays", "Attaques par milliard de PIB"],
        ["Albania", 1500.676148],
        ["Algeria", 285.5821253],
        ["Andorra", 599.3920973],
        ["Angola", 304.9401275],
        ["Argentina", 117.1575489],
        ["Australia", 138.2190955],
        ["Austria", 99.34679266],
        ["Azerbaijan", 41.2351755],
        ["Bahamas", 314.2285163],
        ["Bahrain", 605.8969703],
        ["Bangladesh", 193.2691698],
        ["Barbados", 525.6410256],
        ["Belarus", 586.5591398],
        ["Belgium", 86.95992096],
        ["Belize", 1325.418994],
        ["Benin", 570.4634808],
        ["Bosnia and Herzegovina", 580.9108882],
        ["Brazil", 219.531557],
        ["British Virgin Islands", 1427.625355],
        ["Bulgaria", 320.9626126],
        ["Cambodia", 935.0844175],
        ["Cameroon", 439.4346229],
        ["Canada", 78.81566333],
        ["Chile", 215.1074868],
        ["China", 262.0707194],
        ["China Hong Kong ", 979.2893996],
        ["China Macao ", 668.6605982],
        ["Colombia", 265.8434373],
        ["Costa Rica", 162.8058473],
        ["Côte d'Ivoire", 297.9144281],
        ["Croatia", 448.4085106],
        ["Curacao", 1662.205226],
        ["Cyprus", 449.0343186],
        ["Czechia", 195.1554118],
        ["Democratic Republic of the Congo", 269.026868],
        ["Denmark", 153.582745],
        ["Dominican Republic", 172.713615],
        ["Ecuador", 267.4202357],
        ["Egypt", 143.0320856],
        ["El Salvador", 281.3461246],
        ["Estonia", 417.7906615],
        ["Eswatini", 799.5984669],
        ["Ethiopia", 184.6519891],
        ["Finland", 13.59872803],
        ["France", 11.69552714],
        ["Georgia", 870.7004528],
        ["Germany", 123.0307167],
        ["Ghana", 299.5929944],
        ["Greece", 117.1384733],
        ["Guam", 1128.575358],
        ["Guatemala", 119.6091319],
        ["Guinea", 464.8836948],
        ["Honduras", 411.134334],
        ["Hungary", 212.0673487],
        ["Iceland", 261.7590206],
        ["India", 18.21780713],
        ["Indonesia", 174.5012533],
        ["Iran (Islamic Republic of)", 307.1710804],
        ["Iraq", 258.2048854],
        ["Ireland", 66.39842175],
        ["Isle of Man", 629.176611],
        ["Israel", 167.5575154],
        ["Italy", 101.4300354],
        ["Jamaica", 430.3533097],
        ["Japan", 12.05807175],
        ["Jersey", 514.4444444],
        ["Jordan", 475.6842439],
        ["Kazakhstan", 149.228985],
        ["Kenya", 266.0435268],
        ["Kuwait", 212.8646732],
        ["Lao People's Democratic Republic", 902.4774452],
        ["Latvia", 460.6929863],
        ["Lebanon", 863.4035287],
        ["Lesotho", 1222.661397],
        ["Liberia", 605.6985294],
        ["Libya", 312.8689941],
        ["Liechtenstein", 135.9108781],
        ["Lithuania", 313.6261924],
        ["Luxembourg", 165.3724414],
        ["Macedonia", 744.5250703],
        ["Malaysia", 325.0527136],
        ["Maldives", 824.727917],
        ["Mali", 337.2444536],
        ["Malta", 418.082464],
        ["Mauritius", 629.6368511],
        ["Mexico", 184.4566491],
        ["Mongolia", 959.391702],
        ["Morocco", 29.27477058],
        ["Mozambique", 285.3697373],
        ["Myanmar", 339.9664679],
        ["Namibia", 619.9388031],
        ["Nepal", 312.1549051],
        ["Netherlands", 14.31356276],
        ["New Zealand", 262.4677441],
        ["Nigeria", 12.07497674],
        ["Northern Mariana ", 1858.885017],
        ["Norway", 76.10373515],
        ["Oman", 212.2790698],
        ["Pakistan", 316.9106092],
        ["Panama", 228.3675055],
        ["Paraguay", 434.9455975],
        ["Peru", 181.8486191],
        ["Philippines", 293.8911018],
        ["Poland", 214.4026833],
        ["Portugal", 143.2121758],
        ["Puerto Rico", 89.40970817],
        ["Qatar", 77.12587],
        ["Republic of Korea", 284.1461355],
        ["Republic of Moldova", 941.6771129],
        ["Reunion", 435.7435897],
        ["Romania", 173.0016259],
        ["Russian Federation", 557.3439967],
        ["Rwanda", 655.6525087],
        ["Saint Lucia", 508.3410565],
        ["Saint Vincent and the Grenadines", 683.8124054],
        ["Saudi Arabia", 113.0973282],
        ["Senegal", 439.1860162],
        ["Serbia", 361.9894211],
        ["Seychelles", 1629.040278],
        ["Singapore", 139.0651289],
        ["Slovakia", 221.502938],
        ["Slovenia", 331.180243],
        ["South Africa", 330.98283],
        ["Spain", 129.6612386],
        ["Sri Lanka", 506.3636123],
        ["State of Palestine", 407.3813898],
        ["Sweden", 96.61290298],
        ["Switzerland", 52.0615291],
        ["Thailand", 23.6609215],
        ["Trinidad and Tobago", 295.5418731],
        ["Tunisia", 557.051017],
        ["Turkey", 179.9460543],
        ["Turkmenistan", 66.23870005],
        ["Uganda", 364.2900173],
        ["Ukraine", 802.4739268],
        ["United Arab Emirates", 114.1967003],
        ["United Kingdom of Great Britain and Northern Ireland", 122.2620336],
        ["United Republic of Tanzania", 259.2145228],
        ["United States of America", 74.23574344],
        ["Uruguay", 159.616876],
        ["Uzbekistan", 345.7122228],
        ["Venezuela ", 1062.376368],
        ["Viet Nam", 483.9904187],
        ["Yemen", 607.3532484],
        ["Zambia", 479.4592626],
        ["Zimbabwe", 283.1595196]
    ];
    data.sort(function(a, b) {
        return b[1] - a[1];
    });

    var topCountries = data.slice(0, 15);
    var chartData = google.visualization.arrayToDataTable(topCountries);
    var tableData = google.visualization.arrayToDataTable(data);

    var options = {
        title: 'Attaques par milliard de PIB',
        hAxis: {
            title: 'Pays (Top 15)',
            slantedText: true,
            slantedTextAngle: 45,
            textStyle: {
                fontSize: 10 // Reduce font size for country names
            }
        },
        vAxis: {
            title: 'Attaques par milliard de PIB'
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