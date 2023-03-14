import { useState } from "react";
import { IProduct } from "../class/IProduct";

export type StockFormProps = {
    onSubmit: (product: IProduct) => void;
};

export const StockForm = ({onSubmit}: StockFormProps) => {
    const [product, setProduct] = useState({
        id: "-1",
        name: "",
        description: "",
        price: "",
        keywords: "",
        url: "",
        category: "",
        subcategory: "",
        stock: 0
    } as IProduct);

    // const handleChange = (fieldName: string, event: any) => {
    //     const keys = Object.keys(product);
    //     let key = keys["fieldName"];
    //     let newProduct = {...product};
    //     newProduct[fieldName] = event.target.value;
    //     setProduct({...product, name: event.target.value })
    //     //setProduct(event.target.value);
    // };
  
    const handleSubmit = (event: any) => {
        console.log(product);
      event.preventDefault();
      onSubmit(product);
      // TODO raise event to add to basket and reset the form!
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-3">
        <label>
          Name:
          <input type="text" value={product.name} onChange={e => { setProduct({...product, name: e.target.value }) }} 
            />
        </label>
        <label>
          Description:
          <input type="text" value={product.description} onChange={e => setProduct({...product, description: e.target.value })} />
        </label>
        <label>
          Price:
          <input type="number" value={product.price} onChange={e => setProduct({...product, price: e.target.value })} />
        </label>
        <label>
          Quantity:
          <input type="number" value={product.stock} onChange={e => setProduct({...product, stock: Number(e.target.value) })} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
}

export default StockForm;