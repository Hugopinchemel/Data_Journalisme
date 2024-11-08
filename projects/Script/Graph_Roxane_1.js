google.charts.load('current', {'packages': ['corechart', 'bar']});

// Une fois que la bibliothèque est chargée, on appelle la fonction pour dessiner les graphiques
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {

    // Données pour le graphique 1 : Mots de passe trop courts
    var dataShort = google.visualization.arrayToDataTable([
        ['Secteur', 'Pourcentage'],
        ['Banque', 11.56],
        ['Commerce', 38.91],
        ['Achat en ligne', 8.57],
        ['Jeux vidéo', 68.13]
    ]);

    var optionsShort = {
        title: 'Pourcentage de mots de passe trop courts par secteur',
        pieHole: 0.4
    };

    var chartShort = new google.visualization.PieChart(document.getElementById('chart_short'));
    chartShort.draw(dataShort, optionsShort);

    // Données pour le graphique 2 : Mots de passe pas assez complexes
    var dataComplexity = google.visualization.arrayToDataTable([
        ['Secteur', 'Pourcentage'],
        ['Banque', 16.35],
        ['Commerce', 22.23],
        ['Achat en ligne', 29.99],
        ['Jeux vidéo', 41.57]
    ]);

    var optionsComplexity = {
        title: 'Pourcentage de mots de passe pas assez complexes par secteur',
        pieHole: 0.4
    };

    var chartComplexity = new google.visualization.PieChart(document.getElementById('chart_complexity'));
    chartComplexity.draw(dataComplexity, optionsComplexity);

    // Données pour le graphique 3 : Mots de passe dans le dictionnaire
    var dataInDictionary = google.visualization.arrayToDataTable([
        ['Secteur', 'Pourcentage'],
        ['Banque', 4.17],
        ['Commerce', 4.19],
        ['Achat en ligne', 5.72],
        ['Jeux vidéo', 9.54]
    ]);

    var optionsInDictionary = {
        title: 'Pourcentage de mots de passe présents dans le dictionnaire par secteur',
        pieHole: 0.4
    };

    var chartInDictionary = new google.visualization.PieChart(document.getElementById('chart_in_dictionary'));
    chartInDictionary.draw(dataInDictionary, optionsInDictionary);

    // Graphique 4 : Pourcentage de mot de passe complexe par secteur
    var dataComplexite = google.visualization.arrayToDataTable([
        ['Secteur', 'Pourcentage de mot de passe complexe (%)'],
        ['Banque', 29.13],
        ['Commerce', 24.98],
        ['Jeux vidéo', 11.24],
        ['Achat en ligne', 9.04]
    ]);

    var optionsComplexite = {
        title: 'Complexité moyenne des mots de passe par secteur',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Secteur',
            minValue: 0
        },
        vAxis: {
            title: 'Complexité Moyenne (%)'
        },
        bars: 'vertical',
        legend: {position: 'none'},
        backgroundColor: 'transparent'
    };

    var chartComplexite = new google.visualization.BarChart(document.getElementById('chart_complexite'));
    chartComplexite.draw(dataComplexite, optionsComplexite);
}
