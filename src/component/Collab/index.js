import './Collab.css';

const Collab = ({name, position, img, cardColor}) => {
    return(
        <div className='collab'>
            <div className='header' style={{backgroundColor: cardColor}}>
                <img src={img} alt={name}/>
            </div>
            <div className='footnote'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>

        </div>

    )
};

export default Collab