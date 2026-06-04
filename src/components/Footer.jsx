export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted">
          © 2026 Señas a Voces Academy. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted transition-colors hover:text-primary">
            Privacidad
          </a>
          <a href="#" className="text-sm text-muted transition-colors hover:text-primary">
            Términos
          </a>
          <a
            href="https://www.instagram.com/senasavocesac/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            Redes
          </a>
        </div>
      </div>
    </footer>
  )
}
