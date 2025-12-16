'use client'

import { useState } from 'react'

interface Book {
  id: number
  title: string
  author: string
  category: string
  price: number
  description: string
  icon: string
}

const books: Book[] = [
  {
    id: 1,
    title: "The Digital Revolution",
    author: "Sarah Chen",
    category: "Technology",
    price: 12.99,
    description: "Explore how technology is reshaping our world and the future of digital innovation.",
    icon: "💻"
  },
  {
    id: 2,
    title: "Tales of Adventure",
    author: "Marcus Rivera",
    category: "Fiction",
    price: 9.99,
    description: "Epic stories of brave heroes, mysterious lands, and thrilling quests that will captivate your imagination.",
    icon: "⚔️"
  },
  {
    id: 3,
    title: "The Science of Success",
    author: "Dr. Emily Watson",
    category: "Self-Help",
    price: 14.99,
    description: "Evidence-based strategies for achieving your goals and living your best life.",
    icon: "🎯"
  },
  {
    id: 4,
    title: "Cooking Masterclass",
    author: "Chef Antonio Rossi",
    category: "Cooking",
    price: 11.99,
    description: "Master the art of cooking with professional techniques and delicious recipes from around the world.",
    icon: "👨‍🍳"
  },
  {
    id: 5,
    title: "Mystery at Midnight",
    author: "Detective Harper",
    category: "Mystery",
    price: 10.99,
    description: "A gripping thriller that will keep you guessing until the very last page.",
    icon: "🔍"
  },
  {
    id: 6,
    title: "The Art of Mindfulness",
    author: "Zen Master Lin",
    category: "Self-Help",
    price: 13.99,
    description: "Discover peace and clarity through ancient mindfulness practices adapted for modern life.",
    icon: "🧘"
  },
  {
    id: 7,
    title: "Space Chronicles",
    author: "Dr. Neil Tyson Jr.",
    category: "Science",
    price: 15.99,
    description: "Journey through the cosmos and discover the wonders of space exploration and astronomy.",
    icon: "🚀"
  },
  {
    id: 8,
    title: "Love in Paris",
    author: "Claire Dubois",
    category: "Romance",
    price: 8.99,
    description: "A heartwarming tale of love, passion, and second chances in the city of lights.",
    icon: "💕"
  },
  {
    id: 9,
    title: "Financial Freedom",
    author: "Warren Matthews",
    category: "Finance",
    price: 16.99,
    description: "Learn proven strategies for building wealth and achieving financial independence.",
    icon: "💰"
  },
  {
    id: 10,
    title: "The Dragon's Legacy",
    author: "Fantasy Master Lee",
    category: "Fantasy",
    price: 12.99,
    description: "An epic fantasy saga of dragons, magic, and destiny in a world beyond imagination.",
    icon: "🐉"
  },
  {
    id: 11,
    title: "History Untold",
    author: "Professor James Wright",
    category: "History",
    price: 13.99,
    description: "Discover forgotten stories and hidden truths from the annals of human history.",
    icon: "📜"
  },
  {
    id: 12,
    title: "The Wellness Guide",
    author: "Dr. Rachel Green",
    category: "Health",
    price: 14.99,
    description: "A comprehensive guide to holistic health, nutrition, and wellness for a vibrant life.",
    icon: "🌱"
  }
]

const categories = ["All", "Fiction", "Technology", "Self-Help", "Mystery", "Science", "Romance", "Fantasy", "History", "Health", "Finance", "Cooking"]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<Book[]>([])
  const [showCart, setShowCart] = useState(false)

  const filteredBooks = selectedCategory === "All"
    ? books
    : books.filter(book => book.category === selectedCategory)

  const addToCart = (book: Book) => {
    setCart([...cart, book])
  }

  const removeFromCart = (bookId: number) => {
    const index = cart.findIndex(item => item.id === bookId)
    if (index > -1) {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, book) => total + book.price, 0).toFixed(2)
  }

  const handleCheckout = () => {
    alert(`Thank you for your purchase! Total: $${getTotalPrice()}`)
    setCart([])
    setShowCart(false)
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">📚 Ebook Store</div>
          <button className="cart-button" onClick={() => setShowCart(true)}>
            🛒 Cart
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </div>
      </header>

      <div className="container">
        <div className="hero">
          <h1>Welcome to Ebook Store</h1>
          <p>Discover amazing stories and valuable information across all genres. Your next favorite book is just a click away!</p>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="books-grid">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-cover">{book.icon}</div>
              <div className="book-info">
                <span className="book-category">{book.category}</span>
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">by {book.author}</p>
                <p className="book-description">{book.description}</p>
                <div className="book-footer">
                  <span className="book-price">${book.price}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(book)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCart && (
        <div className="cart-modal" onClick={() => setShowCart(false)}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div style={{ fontSize: '64px' }}>🛒</div>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cart.map((book, index) => (
                  <div key={`${book.id}-${index}`} className="cart-item">
                    <div className="cart-item-info">
                      <h3>{book.title}</h3>
                      <p>${book.price}</p>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(book.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="cart-total">
                  <span>Total:</span>
                  <span>${getTotalPrice()}</span>
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
