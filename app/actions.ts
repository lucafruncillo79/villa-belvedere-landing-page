'use server'

export type BookingState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'checkIn' | 'checkOut' | 'guests', string>>
  values?: Record<'name' | 'email' | 'checkIn' | 'checkOut' | 'guests' | 'message', string>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

export async function submitBookingRequest(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const checkIn = String(formData.get('checkIn') ?? '')
  const checkOut = String(formData.get('checkOut') ?? '')
  const guests = Number(formData.get('guests'))

  const errors: BookingState['errors'] = {}

  if (name.length < 2 || name.length > 100) errors.name = 'Inserisci il tuo nome e cognome.'
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = 'Inserisci un indirizzo email valido.'

  const today = new Date().toISOString().slice(0, 10)
  if (!DATE_RE.test(checkIn) || checkIn < today) errors.checkIn = 'Scegli una data di arrivo valida.'
  if (!DATE_RE.test(checkOut) || checkOut <= checkIn)
    errors.checkOut = 'La partenza deve essere successiva all’arrivo.'
  if (!Number.isInteger(guests) || guests < 1 || guests > 8) errors.guests = 'Seleziona il numero di ospiti.'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Controlla i campi evidenziati.',
      errors,
      values: {
        name,
        email,
        checkIn,
        checkOut,
        guests: String(formData.get('guests') ?? '2'),
        message: String(formData.get('message') ?? '').slice(0, 1000),
      },
    }
  }

  return {
    status: 'success',
    message: `Grazie ${name.split(' ')[0]}! Abbiamo ricevuto la tua richiesta e ti risponderemo entro 24 ore all’indirizzo ${email}.`,
  }
}
