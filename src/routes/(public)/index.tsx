import { createFileRoute } from '@tanstack/react-router'

import { Heading } from '@/components/ui/heading'

export const Route = createFileRoute('/(public)/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Heading as="h1">Welcome to TanStack Router</Heading>
      <p>
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </>
  )
}
