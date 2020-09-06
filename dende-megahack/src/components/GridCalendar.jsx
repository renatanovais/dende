import React from 'react';
// import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function GridCalendar(props) {
  const { order } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{order.client}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{order.dueDate}</Card.Subtitle>
        Lista de produtos:
        <ListGroup className="list-group-flush">
          {order.products.map((product) => <ListGroupItem>{product.product} - {product.quantity}</ListGroupItem>)}
        </ListGroup>
        <Card.Text>
          {order.details}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

// const mapStateToProps = (state) => ({
//   orders: state.orderReducer.orders,
// })

// export default connect(mapStateToProps)(GridCalendar);
