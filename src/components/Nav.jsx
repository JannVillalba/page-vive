export default function Nav() {
  const gitbookUrl = 'https://vive-parche.gitbook.io/vive-parche.dev'

  return (
    <nav className="w-full bg-white border-b shadow-sm" id="top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center"> 
            <div className="text-xl font-bold text-vive-orange">Vive Parche</div>
            <div className="ml-4 text-sm text-gray-600">Plataforma de eventos</div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#top" className="px-3 py-2 rounded-md text-sm font-medium text-vive-orange hover:bg-vive-orange/10">Inicio</a>
            <a href={gitbookUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm font-medium bg-vive-orange text-white">Documentación</a>
            <a href="#project" className="px-3 py-2 rounded-md text-sm font-medium text-vive-orange hover:bg-vive-orange/10">Proyecto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
