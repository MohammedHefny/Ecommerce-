import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Card style={{ minHeight: "500px" }} className="my-2">
      <Card.Img
        style={{ height: "200px" }}
        className="img-fluid"
        variant="top"
        src={props.image}
      />
      <Card.Body>
        <Card.Title>{props.category}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price Is: ${props.price}</ListGroup.Item>
        <ListGroup.Item>{props.title}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link>
          <Link to={`/shop/${props.title}/${props.id}`}>More Details</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
