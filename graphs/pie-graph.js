/*
https://youtu.be/8ZY4-SpNXc8
*/


google.charts.load('current', { 'packages' :['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable({
        ['Task', 'Hours Per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
    });

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('Piehart'));

    chart.draw(data.options);

}