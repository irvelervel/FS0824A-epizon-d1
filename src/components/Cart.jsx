import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  // hooks di react-redux

  // cardArray sarà l'array di libri nel carrello in Redux
  const cartArray = useSelector((reduxState) => {
    return reduxState.cart.content
  })

  // otteniamo la funzione di dispatch
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cartArray.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: i, // 0 per il primo libro, 1 per il secondo etc.
                  })
                }}
              >
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
          {cartArray.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
