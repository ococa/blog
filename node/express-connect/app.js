// middle learning
const express = require('express');

// http request instance
const app = express();

app.use((req, res, next) => {
    console.log('start request', req.method, req.url);
    next(); 
});

app.use((req, res, next) => {
    // assume  parse cookie
    console.log ('assume  parse cookie');

    req.cookies = {
        userId: 'abc123'
    };
    next();
});

app.use((req, res, next) => {
    // assume deal with post data
    console.log ('assume deal with post data');
    setTimeout(() => {
        req.body = {
            a: 100,
            b: 200
        }
    }, 0)
    next();
});


app.use('/api', (req, res, next) => {
    console.log ('deal with router "/api"');
    next();
});

app.get('/api', (req, res, next) => {
    console.log ('get router "/api"');
    next();
});

app.post('/api', (req, res, next) => {
    console.log ('post router "/api"');
    next();
});

// mock login check
function loginCheck(req, res, next) {
    console.log('mock login success');
    setTimeout(() => {
        next();
    }, 10000);
}

app.get('/api/getcookie', loginCheck, (req, res, next) => {
    console.log ('get router "/api/getcookie"');
    res.json({
        errno: 0,
        data: req.cookies
    })
});

app.post('/api/postdata', (req, res, next) => {
    console.log ('post router "/api/postdata"');
    res.json({
        errno: 0,
        data: req.body
    })
});

app.use((req, res, next) => {
    console.log('deal with 404');
    res.json({
        errno: -1,
        msg: '404 not found'
    })
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});