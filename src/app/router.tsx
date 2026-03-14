import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Sucursales from '../pages/Sucursales'
import TerminosCondiciones from '../pages/TerminosCondiciones'
// import Catalogo from '../pages/Catalogo' // TODO: descomentar en Etapa 2
import Proximamente from '../pages/Proximamente'
import Producto from '../pages/Producto'
import Carrito from '../pages/Carrito'
import Checkout from '../pages/Checkout'
import Cuenta from '../pages/Cuenta'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Nosotros from '../pages/Nosotros'
import CatalogoPlaceholder from '../pages/CatalogoPlaceholder'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sucursales', element: <Sucursales /> },
      { path: 'terminos-y-condiciones', element: <TerminosCondiciones /> },
      { path: 'catalogo', element: <Proximamente /> }, // TODO: reemplazar con <Catalogo /> cuando esté listo
      { path: 'producto/:slug', element: <Producto /> },
      { path: 'carrito', element: <Carrito /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'cuenta', element: <Cuenta /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      // Stubs — se implementan en Etapa 3
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'politica-de-privacidad', element: <CatalogoPlaceholder /> },
      { path: 'politica-de-devoluciones', element: <CatalogoPlaceholder /> },
      { path: 'recuperar-contrasena', element: <CatalogoPlaceholder /> },
      // Retorno de pago MP
      { path: 'mp/success', element: <CatalogoPlaceholder /> },
      { path: 'mp/failure', element: <CatalogoPlaceholder /> },
      { path: 'mp/pending', element: <CatalogoPlaceholder /> },
      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
])
