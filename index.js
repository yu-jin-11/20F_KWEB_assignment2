const http = require('http');
const axios = require('axios');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   try {
        //res.statusCode = 200;
        //res.setHeader('Content-Type', 'text/plain');
        axios.get('https://api.github.com/repos/nodejs/node')
        .then((response) => {
            const {stargazers_count, forks_count, open_issues_count} = response.data;
            
            const msg = `Stargazers: ${stargazers_count}
Forks: ${forks_count}
Open Issues: ${open_issues_count}`;

            res.end(msg);
        })
   } catch (err) {
        res.statusCode = 500;
        res.end('Internet error issued.');
   }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});