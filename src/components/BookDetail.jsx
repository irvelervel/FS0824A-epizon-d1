import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              <Button
                className="d-flex align-items-center"
                onClick={() => {
                  // da questo onClick scaturiremo un cambio di stato!
                  // per farlo dobbiamo fare il "dispatch" di una "action"
                  // in modo da "risvegliare" il reducer!
                  dispatch({
                    // dobbiamo come minimo specificare il "tipo" dell'azione
                    // con una proprietà "type"
                    type: 'ADD_TO_CART',
                    payload: bookSelected,
                    // qua il payload serve, altrimenti il reducer non saprebbe quale libro aggiungere all'array cart.content!
                  })
                }}
              >
                <span className="me-2">AGGIUNGI AL</span>
                <FaShoppingCart />
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
