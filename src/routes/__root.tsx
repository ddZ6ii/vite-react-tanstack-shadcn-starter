import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { TooltipProvider } from '@/components/ui/tooltip'
import { useSystemModeSync } from '@/hooks'
import { Navbar, SelectMode } from '@/routes/-components'

export const Route = createRootRoute({ component: RootLayout })

function RootLayout() {
  // Ensures the app reacts to system theme changes when mode is 'system'
  useSystemModeSync()

  return (
    <>
      <TooltipProvider>
        <div className="container mx-auto flex min-h-screen flex-col gap-8 p-3">
          <header className="flex items-center justify-between gap-4">
            <Navbar className="flex-1" />
            <SelectMode />
          </header>

          <main className="relative flex-1 space-y-4 p-8">
            <Outlet />
          </main>
        </div>
      </TooltipProvider>

      <TanStackDevtools
        config={{ position: 'bottom-left' }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
