import React from "react";
import { AiFillDelete } from "react-icons/ai";

const img1 =
  "data:image/jpeg;base64,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";
const img2 =
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmEOG7zIMyO6XMq_xzmGaovJqfM7O2akfmxmn5Bj8EurLzl8J_Xc8kj0s7C6RTfI7WYbTqgSMDdVadxModKij9sV4VsabRahqIbVh-ejWD1u1jZmaJdkPF";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          imgSrc={img2}
          name={"MacBook"}
          price={120000}
          qty={1}
          id="adsd"
        />
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

const CartItem = (
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
) => {
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
      <button></button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>;
};

export default Cart;