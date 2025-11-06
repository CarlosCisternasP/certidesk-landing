export default function Footer(){
  return (
    <footer className="bg-[#0D1B2A] text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">CertiDesk</div>
          <div className="text-sm text-white/70 mt-2">Gestión segura de certificados</div>
        </div>
        <div>
          <div className="font-semibold">Enlaces</div>
          <div className="mt-3 text-sm">
            <a href="#features" className="hover:text-certiAccent">Características</a><br/>
            <a href="#how" className="hover:text-certiAccent">Cómo funciona</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Contacto</div>
          <div className="mt-3 text-sm">hola@certidesk.example</div>
        </div>
      </div>
      <div className="text-center text-sm text-white/70 mt-6">© 2025 CertiDesk. Todos los derechos reservados.</div>
    </footer>
  )
}
