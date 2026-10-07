import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
  align?: 'center' | 'left'
  tone?: 'default' | 'inverse'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'center',
  tone = 'default',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
      )}
    >
      <p
        className={cn(
          'text-xs font-medium uppercase tracking-[0.3em]',
          tone === 'inverse' ? 'text-accent' : 'text-primary',
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'font-serif text-4xl leading-tight text-balance md:text-5xl',
          tone === 'inverse' ? 'text-secondary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-base leading-relaxed text-pretty md:text-lg',
            tone === 'inverse' ? 'text-secondary-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
