import { Container } from './styles'
import { useContext, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'

interface QuantityButtonProps {
  size: 'small' | 'large'
  coffeeId: number
}

export function QuantityButton({
  size = 'small',
  coffeeId,
}: QuantityButtonProps) {
  const { increaseCoffeeQuantity, decreaseCoffeeQuantity, coffees } =
    useContext(CartContext)

  const [quantity, setQuantity] = useState(() => {
    const coffee = coffees.find((coffee) => coffee.id === coffeeId)

    if (coffee) {
      return coffee.quantity
    }

    return 1
  })

  function handleIncreaseQuantity(coffedId: number) {
    setQuantity(quantity + 1)
    increaseCoffeeQuantity(coffedId)
  }

  function handleDecreaseQuantity(coffedId: number) {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      decreaseCoffeeQuantity(coffedId)
    }
  }

  return (
    <Container size={size}>
      <button type="button" onClick={() => handleDecreaseQuantity(coffeeId)}>
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button>
        <Plus
          size={14}
          type="button"
          onClick={() => handleIncreaseQuantity(coffeeId)}
        />
      </button>
    </Container>
  )
}
