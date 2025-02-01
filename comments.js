// create web server
// create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');

// create server
http.createServer((req, res) => {
    // parse the url
    const parsedUrl = url.parse(req.url, true);

    // extract the comments
    if (parsedUrl.pathname === '/comments') {
        // read the comments from the file
        fs.readFile('comments.json', (err, data) => {
            if (err) {
                // send an error response
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'An error occurred' }));
                return;
            }

            // send the comments as a JSON array
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        // send a 404 response
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
}).listen(3000);
// Output:
// When you run the server and navigate to http://localhost:3000/comments, you should see the comments that were saved in the comments.json file.
// If you navigate to any other URL, you should see a 404 error.