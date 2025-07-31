
const viewController = {
  signUp(req, res, next) {
    res.render('auth/SignUp')
  },
  signIn(req, res, next) {
    res.render('auth/SignIn')
  },
    apiAuth(req, res, next) {
        res.json( { user: req.user, token: res.locals.token} )
    }, 
    
    redirectLogin(req, res ,next) {
        res.redirect('/users/login')
    }
}

module.exports = viewController