'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { Link, useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const registerSchema = z
  .object({
    firstName: z.string().min(2, 'Mínimo 2 caracteres'),
    lastName: z.string().min(2, 'Mínimo 2 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Mínimo 8 caracteres'),
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, { message: 'Debés aceptar los términos' }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })
type RegisterForm = z.infer<typeof registerSchema>

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-main-dark mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  )
}

const inputCls = (hasError?: boolean) =>
  `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
    hasError ? 'border-red-400 focus:ring-red-300' : 'border-secondary-gray/30 focus:border-primary'
  }`

export default function RegisterPage() {
  const t = useTranslations('nav')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) })

  const onSubmit = async (_data: RegisterForm) => {
    // TODO: conectar con POST /api/auth/register (Etapa 3)
    await new Promise((r) => setTimeout(r, 800))
    router.push('/login')
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-4 bg-slate-50">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" aria-label="Rodyna Farmacias — Inicio">
            <Image
              src="/assets/cruz_color_claro.svg"
              alt="Rodyna Farmacias"
              width={48}
              height={48}
              className="h-12 w-auto mx-auto mb-3"
              unoptimized
            />
          </Link>
          <h1 className="text-2xl font-black text-main-dark">Crear cuenta</h1>
          <p className="text-secondary-gray text-sm mt-1">Sumate a Rodyna Farmacias</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-secondary-gray/15 p-8">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field id="firstName" label="Nombre" error={errors.firstName?.message}>
                <input
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Juan"
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  aria-invalid={!!errors.firstName}
                  className={inputCls(!!errors.firstName)}
                  {...register('firstName')}
                />
              </Field>
              <Field id="lastName" label="Apellido" error={errors.lastName?.message}>
                <input
                  id="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="García"
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  aria-invalid={!!errors.lastName}
                  className={inputCls(!!errors.lastName)}
                  {...register('lastName')}
                />
              </Field>
            </div>

            <Field id="email" label="Email" error={errors.email?.message}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@ejemplo.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
                className={inputCls(!!errors.email)}
                {...register('email')}
              />
            </Field>

            <Field id="password" label="Contraseña" error={errors.password?.message}>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Mín. 8 caracteres"
                aria-describedby={errors.password ? 'password-error' : undefined}
                aria-invalid={!!errors.password}
                className={inputCls(!!errors.password)}
                {...register('password')}
              />
            </Field>

            <Field id="confirmPassword" label="Repetir contraseña" error={errors.confirmPassword?.message}>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                aria-invalid={!!errors.confirmPassword}
                className={inputCls(!!errors.confirmPassword)}
                {...register('confirmPassword')}
              />
            </Field>

            {/* Términos */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-secondary-gray/40 text-primary focus:ring-primary"
                  aria-describedby={errors.acceptTerms ? 'terms-error' : undefined}
                  aria-invalid={!!errors.acceptTerms}
                  {...register('acceptTerms')}
                />
                <span className="text-sm text-secondary-gray leading-snug">
                  Acepto los{' '}
                  <Link
                    href="/terminos-y-condiciones"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Términos y Condiciones
                  </Link>{' '}
                  y la{' '}
                  <Link
                    href="/politica-de-privacidad"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Política de Privacidad
                  </Link>
                  , incluyendo el manejo de datos de salud.
                </span>
              </label>
              {errors.acceptTerms && (
                <p id="terms-error" role="alert" className="mt-1.5 text-xs text-red-500 font-medium">
                  {errors.acceptTerms.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-main-dark text-white font-bold py-3.5 rounded-xl hover:bg-main-dark/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Creando cuenta...
                </>
              ) : (
                'Crear cuenta'
              )}
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary-gray/20" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-xs text-secondary-gray uppercase tracking-wider">
                o continuá con
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-secondary-gray/30 text-main-dark font-medium py-3 rounded-xl hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm"
            onClick={() => alert('Próximamente... gracias por tu paciencia')}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuar con Google
          </button>

          <p className="text-center text-sm text-secondary-gray mt-6">
            ¿Ya tenés cuenta?{' '}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              {t('login')}
            </Link>
          </p>
        </div>

        {/* Disclaimer sanitario */}
        <p className="text-center text-xs text-secondary-gray/60 mt-4 max-w-xs mx-auto">
          Venta responsable. Ante cualquier duda consultá a tu médico o farmacéutico.
        </p>
      </div>
    </div>
  )
}
