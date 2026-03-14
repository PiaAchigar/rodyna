import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useScrollToTop } from '../../hooks/useScrollToTop'

export default function Layout() {
  useScrollToTop()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
