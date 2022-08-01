import './Card.css'


/**
 * 
 * Car berfungsi sebagai pemberi border dan shadow box pada item yang dibungkusnya
 * ini berguna agar tidak ada pengulangan pada code kita
 * 
 * 
 */
function Card(props){
    const cardClasses = 'card ' + props.className;
    return <div className={cardClasses}>{props.children}</div>
}

export default Card;