import styles from "../styles/Footer.module.css";
export const Footer = () => {
  return (
    <footer className={`${styles.footer} text-white`}>
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-2 col-md-6 ">
            <div className="texas-footer-widget mb-4 ">
               <h2 className="texas-heading-2">Discover Texas</h2>
               <ul className="list-unstyled">
                  <li><a className="py-2 d-block" href="/story">our story</a></li>
                  <li><a className="py-2 d-block" href="/halal">HALAL</a></li>
               </ul>
            </div>
         </div>
         <div className="col-lg-2 col-md-6 ">
            <div className="mb-4">
               <h2 className="texas-heading-2">Work with us</h2>
               <ul className="list-unstyled">
                  <li><a className="py-2 d-block" href="/careers">Careers</a></li>
                  <li><a className="py-2 d-block" href="/franchising">Franchising</a></li>
               </ul>
            </div>
         </div>
         <div className="col-lg-2 col-md-6 ">
            <div className="texas-footer-widget mb-4 ">
               <h2 className="texas-heading-2">texas way</h2>
               <ul className="list-unstyled">
                  <li><a className="py-2 d-block" href="/birthday"> birthday package</a></li>
               </ul>
            </div>
         </div>
         <div className="col-lg-2 col-md-6 ">
            <div className="texas-footer-widget mb-4 ">
               <h2 className="texas-heading-2">{`Let's talk`}</h2>
               <ul className="list-unstyled">
                  <li><a className="py-2 d-block" href="/contact">Contact us</a></li>
                  <li><a className="py-2 d-block" href="/faq">FAQs</a></li>
               </ul>
            </div>
         </div>
         <div className="col-lg-3 col-md-6 ">
            <div className="texas-footer-widget mb-4 ">
               <h2 className="texas-heading-2">Texas Chicken | <span className="text-orange">UAE </span></h2>
            </div>
         </div>
      </div>
      <div className="justify-content-center row">
         <div className="align-items-end col-lg-3  col-md-6 d-flex">
            <div className="texas-footer-widget mb-4 col-md-12 p-0">
               <h2 className="texas-heading-2">join our community</h2>
               <div className="contact-form">
                  <div className="row">
                     <div className="col-md-12"></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-5 col-md-6 align-items-end d-flex justify-content-center">
            <div className="texas-footer-widget mb-4 ">
               <ul className="list-unstyled">
                  <li>
                     <a className="py-2 d-block" href="/halal">
                        
                     </a>
                  </li>
               </ul>
            </div>
            <div className="texas-footer-widget mb-4 ">
               <ul className="list-unstyled">
                  <li>
                     <a href="tel:8001234567" className="py-2 d-block">
                        
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-lg-3 col-md-6">
            <div className="texas-footer-widget mb-4">
               <h2 className="texas-heading-2">CONNECT WITH </h2>
               <ul className="texas-footer-social list-unstyled  float-lft">
                  <li className="texas-animate"><a href="#"><span className="fab fa-twitter"></span></a></li>
                  <li className="texas-animate"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                  <li className="texas-animate"><a href="#"><span className="fab fa-instagram"></span></a></li>
                  <li className="texas-animate"><a href="#"><span className="fab fa-youtube"></span></a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div className="copyrights">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-md-4 p-0">
               <p>All rights reserved. | Developed &amp; Designed  by<a href="http://www.paradigmegypt.com/" rel="noreferrer" target="_blank" className="paradigm"><b>PSdigital</b></a>.</p>
            </div>
            <div className="col-md-4 p-0">
               <div className="text-center terms"><a href="/privacy">privacy policy</a> |<a href="/terms">terms &amp; condition</a></div>
            </div>
            <div className="col-md-4 p-0">
               <a href="#">
               </a>
               <a href="#">
                  
               </a>
            </div>
         </div>
      </div>
   </div>
    </footer>
  );
};
