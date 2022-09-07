

export const ItemDetail =()=>{
    const ItemDetail = ({ nombre, codigo, id, descripcion,cantidad }) => {
        const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} ${nombre}`);
        };
        return (
        <div>
            <h1>{nombre}</h1>
            <h2>{codigo}</h2>
            <h2>{descripcion}</h2>
            <img src={img} alt="" />
            <ItemCount cantidad={id} onAdd={handleOnAdd} />
        </div>
        
        );
    };
}
export default ItemDetail;