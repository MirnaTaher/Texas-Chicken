import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logoEn from "../public/assets/img/logo-EN.webp";
import logoAr from "../public/assets/img/logo-AR.webp";
import cart from "../public/assets/img/shopping-bag.png"

export const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container">
        <Image src={logoEn} alt="texas chicken" className={styles.logo} width={106} height={92}></Image>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item me-4">
              <a
                className={`nav-link text-uppercase py-1 px-0 ${styles.a}`}
                href="#"
              >
                story
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                className={`nav-link text-uppercase py-1 px-0 ${styles.a}`}
                href="#"
              >
                food
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                className={`nav-link text-uppercase py-1 px-0 ${styles.a}`}
                href="#"
              >
                locations
              </a>
            </li>
            <li className="nav-item me-4">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item me-4">
                  <i className="fa-solid fa-circle-user"></i>
                </li>
                <li>
                    <i><Image src={cart} alt="shopping bag" /></i>
                </li>
                <li className="nav-item me-4">
                  <i className="fa-solid fa-earth-americas"></i>
                </li>
                <li className="nav-item me-4">
                  <a className={`text-decoration-none ${styles.a}`}>عربي</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
