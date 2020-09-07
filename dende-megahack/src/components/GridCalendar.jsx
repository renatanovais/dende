import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function GridCalendar(props) {
  const { order } = props;
  const dateFormat = order.dueDate.split('-').map((num) => Number(num));
  return (
    <Card className="calendar-card">
      <Card.Body>
        <Card.Title className="client-name">{order.client}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${order.delivery}: ${dateFormat[2]} / ${dateFormat[1]} / ${dateFormat[0]}`}</Card.Subtitle>
        {order.products.map((product) => <ListGroupItem className="list-item">{product.product} - {product.quantity} unid.</ListGroupItem>)}
        <Card.Text className="order-details">
          <p>Detalhes:</p>
          <span>{order.details}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
