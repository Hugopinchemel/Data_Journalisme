google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    drawComparisonChart('existing_words_chart', 'Existing Words Passwords', [
        ['Password', 'Occurrences in Data Leak', 'Occurrences on Internet'],
        ['a', 4425, 13404],
        ['football', 3038, 7024],
        ['dragon', 2511, 14484],
        ['superman', 2067, 5556],
        ['computer', 1885, 7178],
        ['internet', 1521, 3445],
        ['mustang', 1180, 3124],
        ['loulou', 1142, 1902],
        ['benjamin', 1101, 2661],
        ['hello', 1099, 2738]
    ]);

    drawComparisonChart('letters_mean_something_chart', 'Letters Mean Something Passwords', [
        ['Password', 'Occurrences in Data Leak', 'Occurrences on Internet'],
        ['q1w2e3r4t5y6', 24234, 5168],
        ['1q2w3e4r5t', 17484, 21511],
        ['1qaz2wsx3edc', 15922, 3828],
        ['abc123', 8445, 40358],
        ['password1', 7764, 33400],
        ['qwerty123', 6868, 48837],
        ['10pace', 5438, 8570],
        ['1qaz2wsx', 5180, 13555],
        ['Indya123', 4823, 4942],
        ['123qwe', 4042, 12478]
    ]);

    drawComparisonChart('numbers_ordonated_chart', 'Numbers Ordonated Passwords', [
        ['Password', 'Occurrences in Data Leak', 'Occurrences on Internet'],
        ['q1w2e3r4', 6499, 5522],
        ['1q2w3e4r', 5877, 13368],
        ['1234qwer', 3427, 8036],
        ['Abcd1234', 3382, 1111],
        ['qwer1234', 3225, 5771],
        ['abcd1234', 3189, 6763],
        ['asdf1234', 2339, 4087],
        ['a1b2c3d4', 1570, 2260],
        ['PASpass1234', 1217, 1218],
        ['1a2b3c4d', 989, 1]
    ]);

    drawComparisonChart('only_numbers_chart', 'Only Numbers Passwords', [
        ['Password', 'Occurrences in Data Leak', 'Occurrences on Internet'],
        ['123456', 90309, 225636],
        ['123456789', 46520, 183492],
        ['12345678', 24862, 69241],
        ['12345', 10625, 35105],
        ['123123', 10426, 38985],
        ['111111', 9530, 50728],
        ['1234567890', 9055, 41398],
        ['1234567', 7717, 43525],
        ['123', 6021, 17841],
        ['123321', 5281, 17549]
    ]);

    drawComparisonChart('only_text_chart', 'Only Text Passwords', [
        ['Password', 'Occurrences in Data Leak', 'Occurrences on Internet'],
        ['password', 18406, 104372],
        ['qwerty', 17459, 107163],
        ['qwertyuiop', 5050, 21195],
        ['a', 4425, 13400],
        ['NF', 4119, 7054],
        ['Password', 3720, 7118],
        ['zxcvbnm', 3656, 11020],
        ['azerty', 3500, 5538],
        ['iloveyou', 3271, 23592],
        ['football', 3038, 7024]
    ]);
}

function drawComparisonChart(elementId, title, dataArray) {
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
        title: title,
        hAxis: {title: 'Password', titleTextStyle: {color: '#333'}},
        vAxis: {title: 'Occurrences', minValue: 0},
        series: {
            0: {type: 'line', color: '#1b9e77'},
            1: {type: 'line', color: '#d95f02'}
        },
        tooltip: {isHtml: true}
    };

    var chart = new google.visualization.ComboChart(document.getElementById(elementId));
    chart.draw(data, options);
}