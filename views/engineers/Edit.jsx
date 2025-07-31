const React = require('react') 

function Edit(props) {
 const { name, _id, specialty, yearsExperience, available } = props.engineer
    return (
        <div>
            <h1>{name}age</h1>
            <a href={`/engineers?token=${props.token}`}>Go Back to Index Page</a>
            <form action={`/engineers/${_id}?_method=PUT&token=${props.token}`} method='POST'>
                Name: <input type='text' name='name' defaultValue={name} /> <br/>
                Speciality: <input type='text' name='specialty' defaultValue={specialty} /><br/>
                Years of Experience: <input type='number' name='yearsExperience' defaultValue={yearsExperience} /><br/>
                Available: {available? <input type='checkbox' name='available' defaultChecked/>: <input type='checkbox' name='yearsExperience'/>}<br/>        
                <input type='submit' value='Update Engineer' />
            </form>
        </div>
    )

} 

module.exports = Edit

