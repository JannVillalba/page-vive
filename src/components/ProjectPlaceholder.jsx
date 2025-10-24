export default function ProjectPlaceholder() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Proyecto — Sin despliegue aún</h2>
        <p className="text-gray-600 mb-6">Este proyecto aún no está desplegado. Estamos trabajando en la preparación para el lanzamiento. Vuelve pronto.</p>
        <div className="inline-flex items-center gap-3">
          <span className="inline-block px-4 py-2 rounded bg-vive-orange text-white font-semibold">En desarrollo</span>
          <button className="px-4 py-2 rounded border text-vive-orange hover:bg-vive-orange/10">Contactar al equipo</button>
        </div>
      </div>
    </div>
  )
}
