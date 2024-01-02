import { ProviderWrapper as CountersProviderWrapper } from "./contexts/countersContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <CountersProviderWrapper >
        <App />
    </CountersProviderWrapper >
  )
}

export default AppLoader