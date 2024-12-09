import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const CartIndicator = () => {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">0</span>
      </Button>
    </div>
  )
}

export default CartIndicator
