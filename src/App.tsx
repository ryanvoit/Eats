import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BaseLayout from './components/BaseLayout'


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout />
    </QueryClientProvider>
  )
}

export default App
