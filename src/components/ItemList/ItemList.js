import Item from '../Item/Item'

const ItemList = (props) =>  (

    <>
    <h1>Contenedor ItemList</h1>
    <ul>
        {props.items.map((x, index) => (
            <Item key={index} item={x} />
        ))}
    </ul>
    </>

)


export default ItemList;