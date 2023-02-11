import "styles/globals.css";
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  )
}
