# Vite + React + Tanstack + shadcn/ui Starter

A minimal, opinionated starter for building React apps with a modern stack.

## Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io) 10 — `npm install -g pnpm`

## Getting Started

Install project dependencies and start a local development server:

```bash
pnpm install
pnpm dev
```

## Linting & Formatting

```bash
pnpm lint
pnpm format
pnpm format:lint   # format + lint together
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
pnpm test
```

## Building For Production

```bash
pnpm build
```

## Adding shadcn/ui Components

Components are copied directly into your project (not installed as a package), so you own and can customize them freely.

```bash
# Example: add the Button component
pnpm shadcn add button
```

Components land in `src/components/ui/`. Browse the full catalog at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components).

## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

Add a new file in `./src/routes` — TanStack Router will automatically generate the route tree for you.

### Adding Links

```tsx
import { Link } from '@tanstack/react-router'
;<Link to="/about">About</Link>
```

More on `Link`: [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

## Data Fetching

Use TanStack Query for server state, or TanStack Router's `loader` for route-level data:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

More: [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).
