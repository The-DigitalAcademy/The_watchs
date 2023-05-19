import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardMusic() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Buy an Apple device</Card.Title>
          <Card.Text>
            <h4>6 MONTH FREE</h4>
            Get 6 month of Apple Music
            the purchase of eligible audio
            devices.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Freee 1-month trial</Card.Title>
          <Card.Text>
            <h4>Apple Music</h4>
            New subscribers get 1month of Apple Music
            free, then pay R299.99 per month
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Freee 1-month trial</Card.Title>
          <Card.Text>
            Bundle Apple Music with up to 5 other great
            service for 1 low monthly price.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardMusic;