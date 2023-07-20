import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { QuantityButton } from '../../components/QuantityButton'
import { CartContext } from '../../contexts/CartContext'

import { toast } from 'react-toastify'

import {
  AdvantageItem,
  AdvantageList,
  BadgeContent,
  BannerContainer,
  BannerContent,
  CoffeeContainer,
  CoffeeItemContainer,
  CoffeeItemContent,
  CoffeeItemFooter,
  CoffeeList,
  IconBox,
  PriceInfo,
  QuantityContainer,
} from './styles'

export function Home() {
  const { coffees, onAddToCart } = useContext(CartContext)

  useEffect(() => {
    document.title = 'Coffee Delivery | Home'
  }, [])

  function handleAddToCart(coffeeId: number, coffeeName: string) {
    toast.success(`${coffeeName} adicionado ao carrinho!`, {
      toastId: coffeeId,
    })

    onAddToCart(coffeeId)
  }

  return (
    <>
      <BannerContainer>
        <BannerContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>

          <AdvantageList>
            <AdvantageItem>
              <IconBox variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </IconBox>

              <p>Compra simples e segura</p>
            </AdvantageItem>
            <AdvantageItem>
              <IconBox variant="base-text">
                <Package size={16} weight="fill" />
              </IconBox>

              <p>Embalagem mantém o café intacto</p>
            </AdvantageItem>
            <AdvantageItem>
              <IconBox variant="yellow">
                <Timer size={16} weight="fill" />
              </IconBox>

              <p>Entrega rápida e rastreada</p>
            </AdvantageItem>
            <AdvantageItem>
              <IconBox variant="purple">
                <Coffee size={16} weight="fill" />
              </IconBox>

              <p>O café chega fresquinho até você</p>
            </AdvantageItem>
          </AdvantageList>
        </BannerContent>

        <img src="banner.png" alt="banner" />
      </BannerContainer>

      <CoffeeContainer>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map((coffee) => {
            return (
              <CoffeeItemContainer
                key={coffee.id}
                isSelected={coffee.isSeleted}
              >
                <CoffeeItemContent>
                  <img
                    src={coffee.imageURL}
                    alt={`Foto de um ${coffee.name}`}
                  />

                  <BadgeContent>
                    {coffee.bagdes.map((badge) => {
                      return <span key={badge}>{badge}</span>
                    })}
                  </BadgeContent>

                  <strong>{coffee.name}</strong>

                  <p>{coffee.description}</p>

                  <CoffeeItemFooter>
                    <PriceInfo>
                      <small>R$ &nbsp;</small>
                      <span></span>
                      <span>{coffee.price.toFixed(2).replace('.', ',')}</span>
                    </PriceInfo>

                    <QuantityContainer>
                      <QuantityButton size="large" coffeeId={coffee.id} />

                      <button
                        type="button"
                        title="Adicionar ao carrinho"
                        onClick={() => handleAddToCart(coffee.id, coffee.name)}
                      >
                        <ShoppingCart size={22} weight="fill" />
                      </button>
                    </QuantityContainer>
                  </CoffeeItemFooter>
                </CoffeeItemContent>
              </CoffeeItemContainer>
            )
          })}
        </CoffeeList>
      </CoffeeContainer>
    </>
  )
}
