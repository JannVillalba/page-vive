import Nav from './components/Nav'
import ProjectPlaceholder from './components/ProjectPlaceholder'
import Contact from './components/Contact'
import Developers from './components/Developers'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <Nav />

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-vive-orange/10 text-vive-orange px-6 py-3 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-vive-orange rounded-full animate-pulse"></span>
              Plataforma de gestión y participación en eventos
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Vive Parche
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre, crea y participa en eventos increíbles. Conecta con tu comunidad y vive experiencias únicas.
            </p>
          </div>

          {/* Features Grid - Rediseñado */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ Características Principales</h2>
              <p className="text-gray-600 text-lg">Todo lo que necesitas para una experiencia completa de eventos</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Columna Izquierda */}
              <div className="space-y-8">
                {/* Autenticación */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-vive-orange/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Autenticación y Autorización</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Registro de usuarios con validación
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Sistema de login con JWT tokens
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Gestión de roles y permisos
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Refresh tokens para sesiones extendidas
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gestión de Eventos */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-vive-orange/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📅</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestión de Eventos</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Creación y edición completa de eventos
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Categorización y etiquetado
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Gestión de imágenes y multimedia
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Control de estado y visibilidad
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Búsqueda y Filtrado */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-vive-orange/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Búsqueda y Filtrado</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Búsqueda por texto libre
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Filtros por categoría, fecha, precio y ubicación
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Eventos próximos y recomendados
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Paginación optimizada
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="space-y-8">
                {/* Interacción Social */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-vive-orange/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Interacción Social</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Sistema de comentarios y reseñas (1-5 estrellas)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Favoritos y lista de deseos
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Validación anti-spam
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Moderación de contenido
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analytics y Estadísticas */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-vive-orange/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics y Estadísticas</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Contador de visualizaciones en tiempo real
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Métricas por evento y organizador
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Dashboard de control personalizado
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vive-orange rounded-full"></div>
                          Exportación de datos (en desarrollo)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-vive-orange to-orange-500 rounded-2xl p-8 text-white text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-3">¡Gracias por usar Vive Parche!</h3>
                  <p className="text-orange-100 mb-6">Únete a la comunidad y comienza a vivir experiencias únicas</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://vive-parche.gitbook.io/vive-parche.dev" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-3 bg-white text-vive-orange rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Ver Documentación
                    </a>
                    <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                      Ver Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developers + Contact section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-200" id="developers">
              <Developers />
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200" id="contact">
              <Contact />
            </div>
          </div>

          {/* Project placeholder */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200" id="project-section">
            <ProjectPlaceholder />
          </div>
        </div>
      </main>
    </div>
  )
}