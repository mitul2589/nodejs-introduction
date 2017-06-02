var app = require('express')();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/admin';
var str = '';

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/test', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var cursor = db.collection('Employee').find();

    cursor.each(function (err, doc) {
      if (doc !== null) {
        str += doc.firstName + '<br/>';
      }
    });
  });

  var strobj = {
    name: str
  }

  res.render('index.html', strobj);
  //res.json({ name: "example" });
});

app.route('/Employee').get(function (req, res) {

  MongoClient.connect(url, function (err, db) {
    var cursor = db.collection('Employee').find();

    cursor.each(function (err, doc) {
      if (doc !== null) {
        str += doc.firstName + '<br/>';
      }
    });

  });
  res.send(str);
});

var server = app.listen(3000, function () {
  console.log("Listening to 3000 port");
});

/*MongoClient.connect(url, function(err, db) {
   if (err) {
     console.log("err");
   }
   console.log("Connected");

   db.collection('Employee').insertOne({
       'firstName': 'Suchit',
       'lastName': 'Gandhi',
       'age': 30
   });

   db.collection('Employee').deleteOne({
         'firstName': 'Suchit'
    });

    var cursor = db.collection('Employee').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });

    var findEmployee = db.collection('Employee').find({'firstName': 'Prachi'});

    findEmployee.each(function(err, doc) {

        console.log("FindEmployee:-------" + doc);

    });

   db.close();
});*/

