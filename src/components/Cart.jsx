import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'

const Cart = ({ cart = [] }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: 'none' }}>
        {cart.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => {}}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="fw-bold mb-3 ms-4">
        TOTALE:{' '}
        {cart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
        $
      </Col>
    </Row>
  </Row>
)

export default Cart
