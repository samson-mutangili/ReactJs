import profilePic from './assets/samson.jpeg'


function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile picture" />
            <h2 className='card-title'>Samson Mutangili</h2>
            <p className='card-text'>I'm a software engineer and this year I want to change my role in software engineering</p>
        </div>
    );
}

export default Card