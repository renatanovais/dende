import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function GridCalendar(props) {
  const { order } = props;
  const dateFormat = order.dueDate.split('-').map((num) => Number(num));
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{order.client}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${dateFormat[2]} / ${dateFormat[1]} / ${dateFormat[0]}`}</Card.Subtitle>
        <ListGroup className="list-group-flush">
          {order.products.map((product) => <ListGroupItem>Produto: {product.product}<br/> Quantidade: {product.quantity}</ListGroupItem>)}
        </ListGroup>
        <Card.Text>
          Detalhes:<br/>
          {order.details}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
