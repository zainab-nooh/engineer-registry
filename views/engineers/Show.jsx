const React = require('react') 

function Show(props) {
    const engineer = props.engineer
    return (
        <div>
            <h1>{props.engineer.name}</h1>
            <a href={`/engineers/?token=${props.token}`}>Go Back to Index Page</a>
            <form action={`/engineers/${props.engineer._id}?_method=DELETE&token=${props.token}`}  method='POST'>
                <input type='submit' value={`Delete this ${props.engineer.name}`} />
            </form>
            <div>
                <a href={`/engineers/${props.engineer._id}/edit?token=${props.token} `}> <button>{`Edit this ${props.engineer.name}`}</button></a>
            </div>
        </div>
    )
}


module.exports = Show

