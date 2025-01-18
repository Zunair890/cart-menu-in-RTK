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
    <div className="col-md-12" key={product.id}> {/* Use unique `product.id` */}
      <Card style={{ width: '18rem', margin: '10px' }}>
        <div className="self-center p-3">
          <Card.Img
            variant="top"
            src={product.image} // Access the correct property
            alt={product.name} // Access the correct property
            style={{ width: "180px", height: "200px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title> {/* Access the correct property */}
          <Card.Text>Price: ${product.price}</Card.Text> {/* Access the correct property */}
        </Card.Body>
        <Card.Footer className="flex items-center justify-center">
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
}

export default Cart;
