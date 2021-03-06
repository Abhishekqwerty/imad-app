var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articles={
    article1 :{
    title: 'Article One', 
    heading : 'ARTICLE ONE',
    content: `<p>
                    This is my first IMAD nptel project feeling good This is my first IMAD nptel project feeling good This is my first IMAD nptel project feeling good This is my first IMAD nptel project feeling good
                </p>`
    },
    article2 :{
        title: 'Article Two | Abhishek',
        heading: 'ARTICLE TWO',
        content: `<p> This is my Second Page</p>`
    },
    article3:{
        title: 'Article Three | Abhishek',
        heading: 'ARTICLE THREE',
        content: `<p> This is my Third Page</p>`}
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = 
    `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
    </head>
    
    <body>
        <div class="main">
            <h1>
                ${heading}
            </h1>
            
            <a href="/">
                Home
            </a>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:article', function(req,res){
    var articleName = req.params.article;
    res.send(createTemplate(Articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
