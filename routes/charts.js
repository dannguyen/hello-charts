var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
  res.render('charts/index', {title: 'Index o Charts'});
})

router.get('/draw', function(req, res){
    res.render('charts/draw', {title: 'Bar Test', chart: 'bar' })
})

router.get('/bar', function(req, res){

  var highopts = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    }

    res.json(highopts);
    // res.render('charts/draw', {title: 'Pie Chart', arr: JSON.stringify([1,2,3]),  chart: { kind: 'pie', options: JSON.stringify(highopts) } } );

})



module.exports = router;
