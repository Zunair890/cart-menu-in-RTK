import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../features/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id)); // Dispatching the ID to the Redux action
  };
  
  

  const cards = products.map((product) => (
    <div className="col-md-12" key={product}> {/* Use product.id as the key */}
      <Card style={{ width: '18rem', margin: '10px' }}>
        <div className="self-center p-3">
          <Card.Img
            variant="top"
            src={product} // Ensure `product.image` exists
            alt={product} // Ensure `product.name` exists
            style={{ width: "180px", height: "200px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product}</Card.Title>
          <Card.Text>Price: ${product}</Card.Text> {/* Assuming price exists */}
        </Card.Body>
        <Card.Footer className="flex items-center justify-center">
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{cards}
  {JSON.stringify("tfyuj",products)}
  
  </div>;
}

export default Cart;
