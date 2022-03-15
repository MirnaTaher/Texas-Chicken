import Image from "next/image";
import { useState, useEffect } from "react";

//how many paths it needs to generate and saving its ids
export const getStaticPaths = async () => {
  const categories = await fetch(
    "https://task-api-eosin.vercel.app/api/categories"
  );
  const catData = await categories.json();
  const ids = catData.map((category) => {
    return category.ID;
  });
  let res;
  let data = [];
  for (let id of ids) {
    res = await fetch(
      "https://task-api-eosin.vercel.app/api/products?catID=" + id
    );
    data.push(await res.json());
  }
  let paths = [];
  for (let products of data) {
    for (let prod of products) {
      paths.push({
        params: { prodId: prod.ID.toString(), id: prod.CategoryID.toString() },
      });
    }
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const prodId = context.params.prodId;
  const res = await fetch(
    "https://task-api-eosin.vercel.app/api/products?catID=" + id
  );
  const data = await res.json();
  const product = data.filter((prod)=>{
    if(prod.ID == prodId){
      return prod
    }});
  return {
    props: { products: data, id: id, prodId: prodId, product: product[0] },
  };
};
const Ingredients = ({ prodId, product }) => {
  return (
    <>
    <div>
      <h2>{product.Name}</h2>
      <p>{product.Description}</p>
    </div>
    <ul>
      {/* {console.log(product.Ingridents)} */}
      {product.Ingridents.map((ingredient) => (
        <li key={ingredient.ID}>
          <Image src={ingredient.ImagePath} alt={ingredient.Name} width={70} height={70}></Image>
          <h5>{ingredient.Name}</h5>
          <p>SAR {ingredient.Price}</p>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
};
export default Ingredients;
