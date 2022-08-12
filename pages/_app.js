import '../styles/globals.css'
import { NavBar } from 'Share'

function MyApp({ Component, pageProps }) {

  return <>
    <NavBar />
    <main>
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
