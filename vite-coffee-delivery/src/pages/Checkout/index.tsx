import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SmileySad,
  Trash,
} from 'phosphor-react'

import { Address, CartContext } from '../../contexts/CartContext'

import { QuantityButton } from '../../components/QuantityButton'

import { priceFormatter } from '../../utils/priceFormatter'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'

import * as zod from 'zod'

import {
  ActionButton,
  ButtonsContainer,
  CartListContainer,
  CartListContent,
  CheckoutContainer,
  FormContainer,
  AddressForm,
  ListItem,
  NoItems,
  OrderContent,
  PaymentContainer,
  PaymentMethod,
  RemoveButton,
  Summary,
} from './styles'

const addressFormSchema = zod.object({
  zip_code: zod.string().min(8).max(8),
  district: zod.string(),
  street: zod.string(),
  number: zod.number(),
  complement: zod.string().optional(),
  city: zod.string(),
  state: zod.string(),
})

type AddressFormSchemaType = zod.infer<typeof addressFormSchema>

interface AddressData {
  bairro: string
  localidade: string
  logradouro: string
  uf: string
  erro?: boolean
}

export function Checkout() {
  const { coffees, onRemoveFromCart, resetCart, onSetAddressData } =
    useContext(CartContext)

  const navigate = useNavigate()

  const {
    register,
    setValue,
    watch,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<AddressFormSchemaType>({
    resolver: zodResolver(addressFormSchema),
    mode: 'onChange',
  })
  const [method, setMethod] = useState('')

  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

  const zipCode: string = watch('zip_code')

  if (zipCode?.length === 8) {
    getAddrees()
  }

  if (zipCode?.length < 8) {
    reset({
      city: '',
      district: '',
      state: '',
      street: '',
      complement: '',
      number: 0,
    })
  }

  async function getAddrees() {
    const { data } = await api.get<AddressData>(`${zipCode}/json`)

    const { erro } = data

    if (erro) {
      // alert('CEP inválido')

      return
    }

    const { bairro, localidade, logradouro, uf } = data

    setValue('district', bairro)
    setValue('street', logradouro)
    setValue('city', localidade)
    setValue('state', uf)
  }

  function handleRemoveFromCart(coffeeId: number) {
    onRemoveFromCart(coffeeId)
  }

  function handleSale(data: AddressFormSchemaType) {
    const { city, district, number, state, street, complement } = data

    const address: Address = {
      city,
      district,
      number,
      state,
      street,
      complement,
      method,
    }

    onSetAddressData(address)
    resetCart()
    setMethod('')
    navigate('/success')
  }

  const selectedCoffees = coffees.filter((coffee) => coffee.isSeleted)

  const total = selectedCoffees.reduce((acc, coffee) => {
    const { quantity, price } = coffee

    acc += quantity * price

    return acc
  }, 0)

  return (
    <CheckoutContainer>
      <OrderContent>
        <strong>Complete o seu pedido</strong>

        <FormContainer>
          <section>
            <MapPinLine size={22} />

            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </section>

          <AddressForm>
            <input
              {...register('zip_code')}
              className="cep"
              placeholder="CEP"
              maxLength={8}
            />

            <input
              {...register('street')}
              className="rua"
              placeholder="Rua"
              disabled
            />

            <input
              {...register('number', { valueAsNumber: true })}
              className="numero"
              placeholder="Número"
              type="number"
            />

            <input
              {...register('complement')}
              className="complemento"
              placeholder="Complemento"
            />

            <input
              {...register('district')}
              className="bairro"
              placeholder="Bairro"
              disabled
            />

            <input
              {...register('city')}
              className="cidade"
              placeholder="Cidade"
              disabled
            />

            <input
              {...register('state')}
              className="uf"
              placeholder="UF"
              disabled
            />
          </AddressForm>
        </FormContainer>

        <PaymentContainer>
          <section>
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </section>

          <PaymentMethod>
            <button
              className={`${method === 'Cartão de Crédito' && 'active'}`}
              onClick={() => setMethod('Cartão de Crédito')}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>

            <button
              className={`${method === 'Cartão de Débito' && 'active'}`}
              onClick={() => setMethod('Cartão de Débito')}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>

            <button
              className={`${method === 'Dinheiro' && 'active'}`}
              onClick={() => setMethod('Dinheiro')}
            >
              <Money size={16} />
              DINHEIRO
            </button>
          </PaymentMethod>
        </PaymentContainer>
      </OrderContent>

      <CartListContainer>
        <strong>Complete o seu pedido</strong>

        <CartListContent>
          {selectedCoffees.length ? (
            <>
              <ul>
                {selectedCoffees.map((coffee, index, self) => {
                  return (
                    <div key={coffee.id}>
                      <ListItem>
                        <img
                          src={coffee.imageURL}
                          alt={`Foto de um ${coffee.name}`}
                        />

                        <section>
                          <span>{coffee.name}</span>

                          <ButtonsContainer>
                            <QuantityButton size="small" coffeeId={coffee.id} />

                            <RemoveButton
                              onClick={() => handleRemoveFromCart(coffee.id)}
                            >
                              <Trash size={16} />
                              <span>REMOVER</span>
                            </RemoveButton>
                          </ButtonsContainer>
                        </section>

                        <strong>{priceFormatter.format(coffee.price)}</strong>
                      </ListItem>

                      <hr />
                    </div>
                  )
                })}
              </ul>

              <Summary>
                <div>
                  <span className="reduced-font-size">Total de itens</span>
                  <span>{priceFormatter.format(total)}</span>
                </div>

                <div>
                  <span className="reduced-font-size">Entrega</span>
                  <span>{priceFormatter.format(3.5)}</span>
                </div>

                <div>
                  <strong>Total</strong>
                  <strong>{priceFormatter.format(total + 3.5)}</strong>
                </div>

                <ActionButton
                  type="button"
                  disabled={!isValid || method.length === 0}
                  onClick={handleSubmit(handleSale)}
                >
                  CONFIRMAR PEDIDO
                </ActionButton>
              </Summary>
            </>
          ) : (
            <NoItems>
              <SmileySad size={48} />

              <p>Seu carrinho de compras está vazio</p>

              <Link to="/">Ver catálogo</Link>
            </NoItems>
          )}
        </CartListContent>
      </CartListContainer>
    </CheckoutContainer>
  )
}
