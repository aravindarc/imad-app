var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Aravinda Kumar',
        heading: 'Article One',
        date: 'Sep 17, 2017',
        content:`   <p>
                        This is the content for my first article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>
                    <p>
                        This is the content for my first article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>
                    <p>
                        This is the content for my first article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>`
    },
    'article-two': {
        title: 'Article Two | Aravinda Kumar',
        heading: 'Article Two',
        date: 'Sep 17, 2017',
        content:`   <p>
                        This is the content for my second article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>
                    <p>
                        This is the content for my second article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>
                    <p>
                        This is the content for my second article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>`
    },
    'article-three': {
        title: 'Article Three | Aravinda Kumar',
        heading: 'Article Three',
        date: 'Sep 17, 2017',
        content:`   <p>
                        This is the content for my third article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>
                    <p>
                        This is the content for my third article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>
                    <p>
                        This is the content for my third article, nothing significant just what got into my mind got typed in here, I think I'll have no problem in clearing the IMAD course, but the Data Analytics course is a wee bit harder than I hoped it to be, I'll try clearing it, if could'nt then let me clear it in the next semester.
                    </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            <title>
                ${title}
            </title>
    	    <meta name="viewport" content="width=device-width, initial-scale" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
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

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/profile-picture.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile-picture.jpg'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
