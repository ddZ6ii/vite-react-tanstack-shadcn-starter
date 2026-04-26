import { Link, type LinkComponentProps } from '@tanstack/react-router'

import { CustomLink } from '@/routes/-components'
import { cn } from '@/utilities'

const NAV_LINKS: LinkComponentProps[] = [
  {
    to: '/',
    children: 'Home',
  },
  {
    to: '/about',
    children: 'About',
  },
]

export default function Navbar({
  className,
  ...props
}: React.ComponentProps<'nav'>) {
  return (
    <nav {...props} className={cn('items-centers flex gap-4', className)}>
      <Link to="/">
        <img src="/vite.svg" alt="" />
      </Link>

      <div className="flex flex-1 items-center justify-center gap-4">
        {NAV_LINKS.map((navlink) => (
          <CustomLink key={navlink.to} to={navlink.to}>
            {navlink.children}
          </CustomLink>
        ))}
      </div>
    </nav>
  )
}
