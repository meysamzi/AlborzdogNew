import '../styles/globals.css'
import {
  NavBar,
  Footer,
  SubFooter
} from 'Share'

function MyApp({ Component, pageProps }) {

  return <>
    <NavBar />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
    <SubFooter />
  </>
}

export default MyApp
