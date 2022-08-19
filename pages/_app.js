import '../styles/globals.css'
import {
  NavBar,
  Footer
} from 'Share'

function MyApp({ Component, pageProps }) {

  return <>
    <NavBar />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}

export default MyApp
