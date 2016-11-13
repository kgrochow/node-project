var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ {
        name : 'event 1',
        description : 'description 1',
        date : '2016.01.01'
    },
    {
        name : 'event 2',
        description : 'description 2',
        date : '2016.02.02'
        
    },
    {
        name : 'event 3',
        description : 'description 3',
        date : '2016.03.03'
        
    },
    {
        name : 'event 4',
        description : 'description 4',
        date : '2016.04.04'
    },
    {
        name : 'event 5',
        description : 'description 5',
        date : '2016.05.05'
    }
];


dbRouter.route('/AddEventData')
    .get( function(req, res) {
        var url = "mongodb://localhost:27017/EventsApp";
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results){
                res.send(results);
                db.close();
            });
        });
    });
    
module.exports = dbRouter;