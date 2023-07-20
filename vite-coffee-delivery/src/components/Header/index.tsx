import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

import { Logo } from '../Logo'

import {
  CartContainer,
  HeaderContainer,
  Geolocation,
  CartContent,
} from './styles'

export function Header() {
  const { coffees } = useContext(CartContext)

  const selectedCoffeesQtd = coffees.filter((coffee) => coffee.isSeleted).length

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      <CartContainer>
        <Geolocation>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Geolocation>

        <CartContent
          to="/checkout"
          title="Ir para o carrinho"
          selectedcoffeesqtd={selectedCoffeesQtd}
        >
          <ShoppingCart size={22} weight="fill" />
        </CartContent>
      </CartContainer>
    </HeaderContainer>
  )
}
