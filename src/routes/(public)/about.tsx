import { createFileRoute } from '@tanstack/react-router'

import { Heading } from '@/components/ui/heading'

export const Route = createFileRoute('/(public)/about')({
  component: About,
})

function About() {
  return <Heading as="h1">About</Heading>
}
