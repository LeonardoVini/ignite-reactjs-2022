import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'

import { CartContext } from '../../contexts/CartContext'

import { DeliveryContainer, DeliveryContent, InfoContent } from './styles'

export function Success() {
  const { address } = useContext(CartContext)

  useEffect(() => {
    document.title = 'Coffee Delivery | Success'
  }, [])

  return (
    <DeliveryContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <DeliveryContent>
        <aside>
          <InfoContent variant="pin">
            <span>
              <MapPin size={16} weight="fill" />
            </span>

            <section>
              <p>
                Entrega em{' '}
                <strong>
                  {address.street}, {address.number}
                </strong>
              </p>
              <p>
                {address.district} - {address.city}, {address.state}
              </p>
            </section>
          </InfoContent>

          <InfoContent variant="timer">
            <span>
              <Timer size={16} weight="fill" />
            </span>

            <section>
              <p>previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </section>
          </InfoContent>

          <InfoContent variant="dollar">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>

            <section>
              <p>Pagamento na entrega</p>
              <strong>{address.method}</strong>
            </section>
          </InfoContent>
        </aside>

        <img src="deliveryman.svg" alt="Deliveryman" />
      </DeliveryContent>
    </DeliveryContainer>
  )
}
