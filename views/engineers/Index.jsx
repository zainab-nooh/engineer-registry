const React = require('react') 

function Index(props) {
    const engineers = props.engineers
    return (
        <div>
            <h1>Index Page</h1>
            <a href={`/engineers/new?token=${props.token}`}>Add a new engineer </a>
            <ul>
                {
                    engineers.map( (engineer => {
                        return (
                            <li>This is Engineer <a href={`/engineers/${engineer.id}?token=${props.token}`}>{engineer.name}</a> of specialty {engineer.specialty}. {engineer.name} has {engineer.yearsExperience} years of Experience </li>
                        )
                    }))
                    
                }
            </ul>
        </div>
    )
} 

module.exports = Index

