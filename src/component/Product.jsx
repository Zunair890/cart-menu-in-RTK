import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";
function Product() {
    const dispatch=useDispatch();
    const [products, setProducts] = useState([]);

    // Fetch data only once when the component mounts
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(result => setProducts(result));
    }, []); // Dependency array to prevent infinite calls

  const addToCart=(product)=>{
       dispatch(add(product));
  }
  console.log(">>>>>>>>>>>>>>>>>>>>>", products)




    const cards = products.map((product) => (
        <div className="col-md-3" key={product.id}>
            <Card style={{ width: '18rem', margin: '10px' }}>
              <div className="self-center p-3">
            <Card.Img variant="top" src={product.image} alt={product.title}  style={{width:"180px", height:"200px"}}/></div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>US: {product.price}</Card.Text>
                    
                </Card.Body>
                <Card.Footer className="flex items-center justify-center">
                <Button variant="primary"onClick={()=>addToCart(product)} >Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <>
            <span className="flex justify-center border border-gray-400 p-3 rounded-md text-xl m-3 font-medium">Product Dashboard</span>
            <div className="row">{cards}</div>
        </>
    );
}

export default Product;
