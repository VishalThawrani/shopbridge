import React from 'react';

const tableData = (props) => {
    var products = props.data;

    return(
        <table className="tableData">
            <thead>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
            </thead>
            <tbody>
                {products.map(prod=><tr><td>{prod.prodName}</td><td>{prod.description}</td><td>{prod.price}</td><td><span className="NormalButton"><button onClick={()=>props.deleteItem(prod.prodId)} className="Button">Delete</button></span></td><td><button className="Button" onClick={()=>props.modifyHandler(prod.prodId)}>Modify</button></td></tr>)}
            </tbody>
        </table>
    );
}

export default tableData;