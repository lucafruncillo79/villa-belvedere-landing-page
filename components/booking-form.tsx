'use client'

import { useActionState, useState } from 'react'
import { CircleCheck, LoaderCircle } from 'lucide-react'
import { submitBookingRequest, type BookingState } from '@/app/actions'
import { cn } from '@/lib/utils'

const initialState: BookingState = { status: 'idle', message: '' }

const inputClass =
  'h-12 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/25 focus-visible:outline-none aria-invalid:border-destructive'

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string
  label: string
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        /* Ottimizzazione 1: Animazione di comparsa fluida per l'errore */
        <p id={`${id}-error`} className="text-sm font-medium text-destructive animate-in slide-in-from-top-1 fade-in duration-200">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBookingRequest, initialState)
  const [checkIn, setCheckIn] = useState('')
  const today = new Date().toISOString().slice(0, 10)
  const errors = state.errors ?? {}
  const values = state.values

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10 text-center shadow-sm md:p-14 animate-in zoom-in-95 fade-in duration-300"
      >
        <CircleCheck className="size-12 text-secondary" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-foreground">Richiesta inviata</h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form
      key={JSON.stringify(values ?? {})}
      action={formAction}
      noValidate
      className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 md:p-10"
    >
      <Field id="name" label="Nome e cognome" error={errors.name} className="sm:col-span-2">
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Mario Rossi"
          autoCapitalize="words"
          defaultValue={values?.name}
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          placeholder="mario@esempio.it"
          defaultValue={values?.email}
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="guests" label="Ospiti" error={errors.guests}>
        <select
          id="guests"
          name="guests"
          defaultValue={values?.guests ?? '2'}
          aria-invalid={errors.guests ? true : undefined}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          className={inputClass}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'ospite' : 'ospiti'}
            </option>
          ))}
        </select>
      </Field>

      <Field id="checkIn" label="Check-in" error={errors.checkIn}>
        <input
          id="checkIn"
          name="checkIn"
          type="date"
          min={today}
          required
          defaultValue={values?.checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          aria-invalid={errors.checkIn ? true : undefined}
          aria-describedby={errors.checkIn ? 'checkIn-error' : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="checkOut" label="Check-out" error={errors.checkOut}>
        <input
          id="checkOut"
          name="checkOut"
          type="date"
          min={checkIn || today}
          defaultValue={values?.checkOut}
          required
          aria-invalid={errors.checkOut ? true : undefined}
          aria-describedby={errors.checkOut ? 'checkOut-error' : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="message" label="Messaggio (facoltativo)" className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          defaultValue={values?.message}
          placeholder="Raccontaci le tue preferenze: camera desiderata, occasioni speciali, orario di arrivo…"
          className={cn(inputClass, 'h-auto py-3 resize-none')}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Nessun pagamento richiesto. Riceverai una risposta entro 24 ore.
        </p>
        
        {/* Ottimizzazione 2: Feedback visivo sul cursore e micro-interazione sul bottone */}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 [&:not(:disabled)]:active:scale-95 shadow-md shadow-primary/10"
        >
          {pending ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : null}
          {pending ? 'Invio in corso…' : 'Invia Richiesta'}
        </button>
      </div>

      {state.status === 'error' ? (
        <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2 animate-in fade-in">
          {state.message}
        </p>
      ) : null}
    </form>
  )
}