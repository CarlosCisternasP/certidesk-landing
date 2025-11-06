import '../styles/globals.css'
import LoadingScreen from '../components/LoadingScreen'
export default function App({ Component, pageProps }) {
  return (
    <>
      <LoadingScreen />
      <Component {...pageProps} />
    </>
  )
}
