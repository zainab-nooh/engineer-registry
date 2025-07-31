const React = require('react') 

function SignUp(props) {
    return (
        <div>
            <h1>Sign Up Page</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <form action="/users" method="POST">
                Name: <input type="text" name="name" /><br/>
                Email: <input type="text" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
            <input type="submit" value="Submit to Register" />
            </form>
        </div>
    )
    
} 

module.exports = SignUp

