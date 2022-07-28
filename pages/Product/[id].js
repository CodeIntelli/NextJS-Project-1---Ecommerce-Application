import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";
const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "CAPSMASMS",
    price: [19.9, 23.9, 27.8],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={pizza.img} layout="fill" alt="product" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>$ {pizza.price[size]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div
              style={{ filter: `opacity(${size === 0 ? 1 : 0.5})` }}
              className={styles.size}
              onClick={() => setSize(0)}
            >
              <Image src="/images/size.png" layout="fill" alt="pizza size" />
              <span
                style={{
                  backgroundColor: `${size === 0 ? "#d1411e" : "teal"}`,
                }}
                className={styles.number}
              >
                Small
              </span>
            </div>
            <div
              style={{ filter: `opacity(${size === 1 ? 1 : 0.5})` }}
              className={styles.size}
              onClick={() => setSize(1)}
            >
              <Image src="/images/size.png" layout="fill" alt="pizza size" />
              <span
                style={{
                  backgroundColor: `${size === 1 ? "#d1411e" : "teal"}`,
                }}
                className={styles.number}
              >
                Medium
              </span>
            </div>
            <div
              style={{ filter: `opacity(${size === 2 ? 1 : 0.5})` }}
              className={styles.size}
              onClick={() => setSize(2)}
            >
              <Image src="/images/size.png" layout="fill" alt="pizza size" />
              <span
                style={{
                  backgroundColor: `${size === 2 ? "#d1411e" : "teal"}`,
                }}
                className={styles.number}
              >
                Large
              </span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose Additional Ingredients:</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}
              />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="spicy"
                name="spicy"
                className={styles.checkbox}
              />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="cheese"
                name="cheese"
                className={styles.checkbox}
              />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="garlic"
                name="garlic"
                className={styles.checkbox}
              />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;