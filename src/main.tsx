import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routeTree } from '@/routeTree.gen'
import {
  DefaultErrorComponent,
  DefaultNotFoundComponent,
  DefaultPendingComponent,
} from '@/routes/-components'
import './index.css'

const rootEl = document.getElementById('root')

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  defaultStructuralSharing: true,
  scrollRestoration: true,
  defaultErrorComponent: DefaultErrorComponent,
  defaultNotFoundComponent: DefaultNotFoundComponent,
  defaultPendingComponent: DefaultPendingComponent,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition="bottom-right" />
      </QueryClientProvider>
    </StrictMode>,
  )
}
