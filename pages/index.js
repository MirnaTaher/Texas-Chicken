/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://task-api-eosin.vercel.app/api/categories");
  const data = await res.json();
  return {
    props: { categories: data },
  };
};

export default function Home({ categories }) {
  return (      
      <div>
        {console.log(categories)}
        {categories.map((item) => (
          <div key={item.id}>
          <Link passHref href={"/categories/"+item.ID}>
            <div className={styles.categoriesItem}>
              <img
                className={styles.img}
                src={item.ImagePath}
                alt={item.Name}
                width={250}
                height={250}
              />
              <button className={styles.btn}>{item.Name}</button>
            </div>
          </Link>
          </div>
        ))}
      </div>
  );
}
