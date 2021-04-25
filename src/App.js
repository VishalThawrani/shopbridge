import React, {useState} from "react";
import "./App.css";
import Table from './table'

export default function App() {
  const [values,setValues] = useState({
    prodId:"",
    prodName:"",
    description:"",
    price:""
  });

  const [items, setItems] = useState([]);

  const [submitted, setSubmitted] = useState(false);

    const [modifier, setModifier] = useState(false);

  const productHandler = (event) => {
    setValues({...values, prodName: event.target.value, prodId: items.length});
  }

  const descriptionHandler = (event) => {
    setValues({...values, description: event.target.value});
  }

  const priceHandler = (event) => {
    setValues({...values, price: event.target.value});
  }

  const addItem = (event) => {
    event.preventDefault();
    let result = items.filter(item=> item.prodId === values.prodId);
    if(modifier){
      if(result[0]){
        // let result2 = items.filter
        let duplicate = items.slice();
        duplicate.splice(result[0].prodId,1,values);
        setItems([...duplicate]);
        setModifier(false);
      }
    }
    else {
      setItems([...items, values]);
      setSubmitted(true);
    }
  }

  const [displayTable, setDisplay] = useState(false);

  const listHandler = (event) => {
    event.preventDefault();
    setDisplay(!displayTable);
  }
  
  const deleteHandler = (prodId) => {
    let delFilter = items.filter(item => item.prodId !== prodId);
    setItems(delFilter);
  }


  const modifyHandler = (prodId) => {
    setModifier(true);
    let modFilter = items.filter(item => item.prodId === prodId);
    setValues(modFilter[0]);
  }


  return (
    <div className="form-container">
      <h1>Welcome to shopbridge</h1>
      {submitted && <div className="success-message">Item added successfully!</div>}
      <form className="register-form" onSubmit={addItem}>
        <input
          id="product-name"
          value={values.prodName}
          className="form-field"
          type="text"
          placeholder="Product Name"
          name="productName"
          required={true}
          onChange={productHandler}
        />
        <input
          id="description"
          value={values.description}
          className="form-field"
          type="text"
          placeholder="Description"
          name="description"
          required={true}
          onChange={descriptionHandler}
        />
        <input
          id="price"
          value={values.price}
          className="form-field"
          type="number"
          placeholder="Price"
          name="price"
          required={true}
          onChange={priceHandler}
        />
        <button className="form-field" type="submit">
          Add Item
        </button>
      </form>
      <span className="NormalButton">
        <button onClick={(event)=>listHandler(event)} className="Button">List Items</button>
      </span>
      {displayTable && <Table data={items} deleteItem={deleteHandler} modifyHandler={modifyHandler}/>}
    </div>
  );
}