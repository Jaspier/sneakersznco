import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = () => {
  const match = useParams();
  const product = products.find(p => p._id === match.id);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            className="productImage"
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 className="productTitle">{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Enquire for purchase
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
