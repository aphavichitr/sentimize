var UserController = require('./../controllers/UserController.js');

module.exports = function(app, passport) {

  // Pre-authentication routes
  app.get('/welcome',
  function(req, res) {
    res.render('welcome');
  });

  app.get('/login',
  function(req, res) {
    res.render('login');
  });

  app.get('/auth/github',
    passport.authenticate('github', { scope: [ 'user', 'read:org' ]}));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });
  // app.post('/login',
  // passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/login'
  // }));

  // app.get('/signup',
  // function(req, res) {
  //   res.render('signup');
  // });

  //app.post('/api/users', UserController.createUser);

  app.get('/logout',
  function(req, res) {
    req.logout();
    res.redirect('/')
  });

};