import React from 'react'
import { useState } from 'react'

export default function AddProduct(props) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!name || !desc || !price || !category) {
            alert("Please Enter valid Product Details!")
        }
        props.addProduct(name, desc, price, category, brand);
    }
    return (
        <div className='container m-2'>
            <h3> Add Product</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder='Product Name' id="name" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" placeholder='Description' id="desc" />
                </div>
                <div className="form-group">
                    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" placeholder='Price $USD' id="price" />
                </div>
                <div className="form-group">
                    <select type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} className="form-control" placeholder='Price $USD' id="category">
                        <option>Laptop</option>
                        <option>Mobile</option>
                        <option>LCD</option>
                    </select>
                </div>
                <div className="form-group">
                    <select type="text" value={brand} onChange={(e) => { setBrand(e.target.value) }} className="form-control" placeholder='Price $USD' id="brand">
                        <option>Samsung</option>
                        <option>Haier</option>
                        <option>Apple</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" id="image" />
                </div>

                <button type="submit" className="btn btn-success">Add Product</button>
            </form>

        </div>
    )
}
