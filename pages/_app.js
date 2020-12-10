import "../styles/globals.css";
import "../scss/gloable.scss";
import "../scss/header.scss";
import "../scss/main.scss";
import "../scss/article.scss";
import "../scss/footer.scss";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
