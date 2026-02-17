import { Outlet, createRootRoute } from '@tanstack/react-router'
import { LocaleProvider } from '../i18n/LocaleContext'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <LocaleProvider>
      <Outlet />
    </LocaleProvider>
  )
}
