import { QuoteProvider } from './context/ProviderQuote'
import { SecureApp } from "./components";

export default function App() {
  return (
    <QuoteProvider>
      <SecureApp />
    </QuoteProvider>
  )
}
