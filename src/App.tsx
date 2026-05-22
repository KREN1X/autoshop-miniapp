import { useState } from "react"

const categories = [
  {
    id: 1,
    name: "Интерьер",
    emoji: "🪑"
  },

  {
    id: 2,
    name: "Экстерьер",
    emoji: "✨"
  },

  {
    id: 3,
    name: "Электроника",
    emoji: "🔌"
  },

  {
    id: 4,
    name: "Аксессуары",
    emoji: "🎁"
  },

  {
    id: 5,
    name: "Химия",
    emoji: "🧴"
  }
]

const products: any = {

  Интерьер: [

    {
      id: 1,
      name: "EVA коврики",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },

    {
      id: 2,
      name: "Чехлы экокожа",
      price: 800000,
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
    },

    {
      id: 3,
      name: "Оплетка на руль",
      price: 180000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    },

    {
      id: 4,
      name: "Накидки на сидения",
      price: 550000,
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    }

  ],

  Экстерьер: [

    {
      id: 5,
      name: "Lip спойлер",
      price: 950000,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },

    {
      id: 6,
      name: "JDM крюки",
      price: 220000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    },

    {
      id: 7,
      name: "Накладки на суппорта",
      price: 400000,
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
    }

  ],

  Электроника: [

    {
      id: 8,
      name: "HUD дисплей",
      price: 650000,
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    },

    {
      id: 9,
      name: "Инвертор 12V",
      price: 350000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    },

    {
      id: 10,
      name: "Колонки Pioneer",
      price: 1200000,
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
    }

  ],

  Химия: [

    {
      id: 11,
      name: "Чернитель шин",
      price: 90000,
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    },

    {
      id: 12,
      name: "Антидождь",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    },

    {
      id: 13,
      name: "Автошампунь",
      price: 110000,
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
    }

  ]

}

export default function App() {

  const [currentCategory, setCurrentCategory] =
    useState<string | null>(null)

  const [showCart, setShowCart] =
    useState(false)

  const [cart, setCart] = useState<any[]>([])

  // ДОБАВИТЬ В КОРЗИНУ

  const addToCart = (product: any) => {

    const existing = cart.find(
      (item) => item.id === product.id
    )

    if (existing) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])

    }

  }

  // УМЕНЬШИТЬ КОЛИЧЕСТВО

  const decreaseQuantity = (productId: number) => {

    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )

  }

  // ИТОГО

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >

        <h1
          onClick={() => {
            setCurrentCategory(null)
            setShowCart(false)
          }}

          style={{
            cursor: "pointer"
          }}
        >
          🚘 Auto Shop
        </h1>

        <div

          onClick={() => setShowCart(true)}

          style={{
            background: "#2ea6ff",
            padding: "10px 15px",
            borderRadius: "12px",
            cursor: "pointer"
          }}
        >
          🛒 {cart.length}
        </div>

      </div>

      {/* ГЛАВНАЯ */}

      {!showCart && (

        <>

          {/* КАТЕГОРИИ */}

          {!currentCategory && (

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px"
              }}
            >

              {categories.map((category) => (

                <div
                  key={category.id}

                  onClick={() =>
                    setCurrentCategory(category.name)
                  }

                  style={{
                    background: "#1e1e1e",
                    borderRadius: "20px",
                    padding: "30px 20px",
                    textAlign: "center",
                    cursor: "pointer"
                  }}
                >

                  <div
                    style={{
                      fontSize: "40px",
                      marginBottom: "10px"
                    }}
                  >
                    {category.emoji}
                  </div>

                  <h2>{category.name}</h2>

                </div>

              ))}

            </div>

          )}

          {/* ТОВАРЫ */}

          {currentCategory && (

            <>

              <button
                onClick={() =>
                  setCurrentCategory(null)
                }

                style={{
                  background: "#2ea6ff",
                  border: "none",
                  color: "white",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                  cursor: "pointer"
                }}
              >
                ⬅️ Назад
              </button>

              <h2
                style={{
                  marginBottom: "20px"
                }}
              >
                {currentCategory}
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "20px"
                }}
              >

                {(products[currentCategory] || []).map(
                  (product: any) => (

                    <div
                      key={product.id}
                      style={{
                        background: "#1e1e1e",
                        borderRadius: "20px",
                        overflow: "hidden"
                      }}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover"
                        }}
                      />

                      <div style={{ padding: "15px" }}>

                        <h2>{product.name}</h2>

                        <p
                          style={{
                            color: "#2ea6ff",
                            fontSize: "20px"
                          }}
                        >
                          {product.price.toLocaleString()} сум
                        </p>

                        {cart.find((item) => item.id === product.id) ? (

  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      marginTop: "15px"
    }}
  >

    <button
      onClick={() =>
        decreaseQuantity(product.id)
      }

      style={{
        background: "#333",
        border: "none",
        color: "white",
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "20px"
      }}
    >
      -
    </button>

    <span
      style={{
        fontSize: "20px"
      }}
    >
      {
        cart.find(
          (item) => item.id === product.id
        )?.quantity
      }
    </span>

    <button
      onClick={() =>
        addToCart(product)
      }

      style={{
        background: "#2ea6ff",
        border: "none",
        color: "white",
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "20px"
      }}
    >
      +
    </button>

  </div>

) : (

  <button
    onClick={() =>
      addToCart(product)
    }

    style={{
      width: "100%",
      background: "#2ea6ff",
      border: "none",
      padding: "14px",
      borderRadius: "12px",
      color: "white",
      fontSize: "16px",
      cursor: "pointer"
    }}
  >
    🛒 В корзину
  </button>

)}

                      </div>

                    </div>

                  )
                )}

              </div>

            </>

          )}

        </>

      )}

      {/* КОРЗИНА */}

      {showCart && (

        <div
          style={{
            background: "#1e1e1e",
            padding: "20px",
            borderRadius: "20px"
          }}
        >

          <button
            onClick={() => setShowCart(false)}

            style={{
              background: "#2ea6ff",
              border: "none",
              color: "white",
              padding: "10px 15px",
              borderRadius: "12px",
              marginBottom: "20px",
              cursor: "pointer"
            }}
          >
            ⬅️ Назад
          </button>

          <h2>🛒 Корзина</h2>

          {cart.length === 0 ? (

            <p>Корзина пуста</p>

          ) : (

            <>

              {cart.map((item, index) => (

                <div
                  key={index}
                  style={{
                    marginTop: "20px",
                    borderBottom: "1px solid #333",
                    paddingBottom: "15px"
                  }}
                >

                  <h3>{item.name}</h3>

                  <p>
                    {item.price.toLocaleString()} сум
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }

                      style={{
                        background: "#333",
                        border: "none",
                        color: "white",
                        width: "35px",
                        height: "35px",
                        borderRadius: "10px",
                        cursor: "pointer"
                      }}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        addToCart(item)
                      }

                      style={{
                        background: "#2ea6ff",
                        border: "none",
                        color: "white",
                        width: "35px",
                        height: "35px",
                        borderRadius: "10px",
                        cursor: "pointer"
                      }}
                    >
                      +
                    </button>

                  </div>

                </div>

              ))}

              <h2
                style={{
                  marginTop: "20px",
                  color: "#2ea6ff"
                }}
              >
                Итого:
                {" "}
                {totalPrice.toLocaleString()}
                {" "}
                сум
              </h2>

              {/* ОПЛАТА */}

              <div
                style={{
                  marginTop: "30px"
                }}
              >

                <h2>💳 Способ оплаты</h2>

                <div
                  style={{
                    display: "grid",
                    gap: "10px",
                    marginTop: "15px"
                  }}
                >

                  <button
                    style={{
                      background: "#333",
                      border: "none",
                      color: "white",
                      padding: "14px",
                      borderRadius: "12px",
                      cursor: "pointer"
                    }}
                  >
                    💵 Наличные
                  </button>

                  <button
                    style={{
                      background: "#333",
                      border: "none",
                      color: "white",
                      padding: "14px",
                      borderRadius: "12px",
                      cursor: "pointer"
                    }}
                  >
                    💳 Click
                  </button>

                  <button
                    style={{
                      background: "#333",
                      border: "none",
                      color: "white",
                      padding: "14px",
                      borderRadius: "12px",
                      cursor: "pointer"
                    }}
                  >
                    💙 Payme
                  </button>

                </div>

                <button
                  style={{
                    width: "100%",
                    background: "#2ea6ff",
                    border: "none",
                    color: "white",
                    padding: "16px",
                    borderRadius: "14px",
                    fontSize: "18px",
                    marginTop: "25px",
                    cursor: "pointer"
                  }}
                >
                  ✅ Оформить заказ
                </button>

              </div>

            </>

          )}

        </div>

      )}

    </div>
  )
}