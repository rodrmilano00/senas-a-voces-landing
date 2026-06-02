export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted">
          © 2026 Señas a Voces Academy. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          {['Privacidad', 'Términos', 'Redes'].map((label) => (
            <a key={label} href="#" className="text-sm text-muted transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
