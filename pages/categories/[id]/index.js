/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import styles from "../../../styles/Products.module.css";
//how many paths it needs to generate and saving its ids
export const getStaticPaths = async () => {
  const res = await fetch("https://task-api-eosin.vercel.app/api/categories");
  const data = await res.json();
  const paths = data.map((category) => {
    return {
      params: { id: category.ID.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
//each path, what data needs to be displayed
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://task-api-eosin.vercel.app/api/products?catID=" + id
  );
  const resCategories = await fetch(
    "https://task-api-eosin.vercel.app/api/categories"
  );
  const catData = await resCategories.json();
  const data = await res.json();
  return {
    props: { products: data, categories: catData, id: id },
  };
};

const Products = ({ products, categories, id }) => {
  return (
    <>
      <ul className="nav flex-column">
      {categories.map((category) => (
        <li key={category.ID}>
          <Link href={"/categories/" + category.ID.toString()} passHref>
            <a
              className={`text-decoration-none ${
                category.ID == id ? `${styles.selected}` : `${styles.normal}`
              }`}
            >
              {category.Name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
      <div>
        {categories.map((category) => {
          if (category.ID == id) {
            return <h2>{category.Name}</h2>;
          }
        })}
        {Object.values(products).map((product) => (
          <div key={product.ID}>
            <a href={`/categories/${id}/products/${product.ID}`}>
              <>
                <img src={product.ImagePath} alt={product.Description}></img>
                <button>
                  {product.Name} SAR{product.DefaultPrice}
                </button>
              </>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
