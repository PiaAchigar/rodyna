import { useTranslation } from 'react-i18next'
import { SEO } from '../components/SEO'

export default function TerminosCondiciones() {
  const { t } = useTranslation()

  return (
    <section className="py-16" aria-labelledby="terms-title">
      <SEO
        canonical="/terminos-y-condiciones"
        title="Términos y Condiciones"
        description="Términos y condiciones de uso de Rodyna Farmacias. Política de compra, envíos y devoluciones."
      />
      <div className="container-page max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-secondary-gray">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-main-dark font-medium" aria-current="page">{t('footer.terms')}</li>
          </ol>
        </nav>

        <h1 id="terms-title" className="text-4xl font-black text-main-dark mb-2">{t('terms.title')}</h1>
        <p className="text-sm text-secondary-gray mb-10">{t('terms.lastUpdated')}</p>

        {/* Aviso de documento en construcción */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-10 flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-main-dark">
            <strong>Documento en elaboración.</strong> Los Términos y Condiciones completos serán publicados previo al lanzamiento de la tienda online.
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-secondary-gray leading-relaxed space-y-6">
          <p>{t('terms.content')}</p>

          {/* Secciones stub */}
          {[
            { title: '1. Aceptación de los Términos', body: 'Al acceder y utilizar este sitio web, el usuario acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice el sitio. [Contenido completo pendiente]' },
            { title: '2. Descripción del Servicio', body: 'Rodyna Farmacias opera como plataforma de venta online de productos de venta libre (OTC), dermocosmética, perfumería y afines, dentro del territorio de CABA y AMBA. [Contenido completo pendiente]' },
            { title: '3. Registro y Cuenta de Usuario', body: 'Para realizar compras, el usuario deberá crear una cuenta proporcionando información veraz y actualizada. La contraseña es personal e intransferible. [Contenido completo pendiente]' },
            { title: '4. Precios y Facturación', body: 'Los precios expresados en el sitio son en pesos argentinos (ARS) e incluyen IVA. Rodyna Farmacias emite factura tipo A. [Contenido completo pendiente]' },
            { title: '5. Política de Envíos', body: 'Se realizan envíos en el día dentro de CABA y AMBA mediante servicio de moto. También se puede retirar el pedido en cualquiera de las sucursales habilitadas. [Contenido completo pendiente]' },
            { title: '6. Devoluciones y Cambios', body: 'Ver Política de Devoluciones. [Contenido completo pendiente]' },
            { title: '7. Venta Responsable', body: 'Los productos ofrecidos son de venta libre. Rodyna Farmacias no reemplaza la consulta médica profesional. Ante cualquier duda, consultá a tu médico o farmacéutico. Leé siempre el prospecto del producto.' },
            { title: '8. Protección de Datos Personales', body: 'Ver Política de Privacidad. Los datos del usuario son tratados conforme a la Ley 25.326 de Protección de Datos Personales de la República Argentina. [Contenido completo pendiente]' },
            { title: '9. Jurisdicción', body: 'Para cualquier controversia derivada del uso de este sitio, las partes acuerdan someterse a los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción. [Contenido completo pendiente]' },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-main-dark mb-2">{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer sanitario */}
        <div className="mt-12 p-5 bg-slate-50 rounded-xl border border-secondary-gray/20 text-xs text-secondary-gray leading-relaxed">
          <strong className="text-main-dark block mb-1">Aviso sanitario</strong>
          Venta responsable de medicamentos y productos de parafarmacia. Ante cualquier duda sobre el uso de un producto, consultá a tu médico o farmacéutico. Leé siempre el prospecto antes de usar cualquier medicamento.
        </div>
      </div>
    </section>
  )
}
