import './ItemMenu.css'

const ItemMenu = (props) =>{

    return (
        <div className='itemMenu'>
            <ul>{props.name}</ul>
        </div>
    )
}

export default ItemMenu