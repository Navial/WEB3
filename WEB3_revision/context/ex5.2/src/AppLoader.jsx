import { ProviderWrapper as OpinionsProviderWrapper } from "./contexts/opinionsContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <OpinionsProviderWrapper >
        <App />
    </OpinionsProviderWrapper >
  )
}

export default AppLoader