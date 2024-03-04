import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Profession: {props.profession}</p>
            <p>Has Masters: {props.hasMasters ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    profession: PropTypes.string,
    hasMasters: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    profession: "Unknown",
    hasMasters: false,
}

export default Student