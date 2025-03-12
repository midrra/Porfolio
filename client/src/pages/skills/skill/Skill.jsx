import './Skill.scss';

const Skill=({name,rate})=>{
    return (
        <div className='skill'>
            <p>{name}</p>
            <div className="progress">
                <div className='p-bar' style={{width:rate}}></div>
            </div>
        </div>
    )
    
}

export default Skill