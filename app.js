
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/*
  /
  
  /products
  /services
  /events
  /articles
  
  /shop
  /stock
  /orders
  /deliveries
  
  /relations
    /prospects
    /customers/:id    telecom, address, account, contract, discounts,
                      communications, registrations
    /suppliers/:id    telecom, address, account, contract, discounts,
                      communications, registrations
    /employees/:id    personal, contact, account, contract, assessment, comms
                      photo, role, profile, identity
    /alliances        comms

  /company
    /contact          telecom, social-media, address, opening-hours
    /about            logo, name, profile, method, identity, history, future
    /legal            terms, privacy, intellectual property, certifications
    /team 
    /job-openings
    /network
    /portafolio
    
  /communication
    /website
    /social-media
    /newsletters
    /brochures
    /slides
    /videos
    /advertisement
    /trade-shows

  /configuration
  
  /admin
    /accounts
    /bills
    /offers
    /payments
  
  /analysis
*/

app.get('/', routes.index);
app.get('/users', user.list);



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
