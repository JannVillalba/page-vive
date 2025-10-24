export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
        <p className="text-gray-700 mb-4">¿Quieres presentar el proyecto o contactar al equipo? Deja tus datos y un breve mensaje. (Formulario de muestra — sin envío habilitado)</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Tu nombre" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="tu@correo.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" rows="4" placeholder="Escribe tu mensaje..." />
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="px-4 py-2 bg-vive-orange text-white rounded-md font-semibold">Enviar (demo)</button>
            <a className="text-sm text-gray-500" href="mailto:contacto@viveparche.dev">O enviar por email</a>
          </div>
        </form>
      </div>
    </div>
  )
}
