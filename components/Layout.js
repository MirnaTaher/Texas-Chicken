import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "next/head";
const Layout = ({children}) => {
    
    return ( <>
    <Head>
        <title>Texas Chicken</title>
        <link rel="icon" href="/assets/img/logo-EN.webp" />
      </Head>
    <Navbar/>
        {children}
    <Footer/>
    </> );
}
 
export default Layout;