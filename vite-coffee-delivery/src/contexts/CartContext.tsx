import { createContext, ReactNode, useCallback, useState } from 'react'
import { initialCoffees } from './coffees'

export interface Coffee {
  id: number
  name: string
  description: string
  imageURL: string
  bagdes: string[]
  price: number
  quantity: number
  isSeleted: boolean
}

export interface Address {
  street: string
  number: number
  complement?: string
  district: string
  city: string
  state: string
  method: string
}

interface CartContextType {
  coffees: Coffee[]
  address: Address
  increaseCoffeeQuantity: (coffeId: number) => void
  decreaseCoffeeQuantity: (coffeId: number) => void
  onAddToCart: (coffeId: number) => void
  onRemoveFromCart: (coffeId: number) => void
  onSetAddressData: (address: Address) => void
  resetCart: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(initialCoffees)
  const [address, setAddress] = useState({} as Address)

  const increaseCoffeeQuantity = useCallback(
    (coffeeId: number) => {
      const newCoffees = coffees.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          }
        }

        return coffee
      })

      setCoffees(newCoffees)
    },
    [coffees],
  )

  const decreaseCoffeeQuantity = useCallback(
    (coffeeId: number) => {
      const newCoffees = coffees.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          }
        }

        return coffee
      })

      setCoffees(newCoffees)
    },
    [coffees],
  )

  const onAddToCart = useCallback(
    (coffeeId: number) => {
      const newCoffees = coffees.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffee,
            isSeleted: true,
          }
        }

        return coffee
      })

      setCoffees(newCoffees)
    },
    [coffees],
  )

  const onRemoveFromCart = useCallback(
    (coffeeId: number) => {
      const newCoffees = coffees.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffee,
            isSeleted: false,
          }
        }

        return coffee
      })

      setCoffees(newCoffees)
    },
    [coffees],
  )

  const onSetAddressData = useCallback((data: Address) => {
    setAddress(data)
  }, [])

  const resetCart = useCallback(() => {
    setCoffees(initialCoffees)
  }, [])

  return (
    <CartContext.Provider
      value={{
        coffees,
        address,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        onAddToCart,
        onRemoveFromCart,
        onSetAddressData,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
