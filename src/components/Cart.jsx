import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const img2 =
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmEOG7zIMyO6XMq_xzmGaovJqfM7O2akfmxmn5Bj8EurLzl8J_Xc8kj0s7C6RTfI7WYbTqgSMDdVadxModKij9sV4VsabRahqIbVh-ejWD1u1jZmaJdkPF";

const Cart = () => {

  const { cartItems } = useSelector(state=>state.cart)
  return (
    <div className="cart">
      <main>
{
  cartItems.length > 0 ? (
    cartItems.map(i=>(
      <CartItem
      imgSrc={img2}
      name={"MacBook"}
      price={120000}
      qty={1}
      id="adsd"
    />
    ))
  ) : (
    <h2 className="noItems">No Items Yet</h2>
  )
}
      </main>

      <aside>
        <h2>SubTotal: ₹{2000}</h2>
        <h2>Shipping: ₹{200}</h2>
        <h2>Tax: ₹{20}</h2>
        <h2>Total: ₹{2220}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
