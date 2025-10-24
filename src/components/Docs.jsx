export default function Docs() {
  const gitbookUrl = 'https://vive-parche.gitbook.io/vive-parche.dev'

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Documentación — Vive Parche</h1>
      <p className="text-gray-700">Toda la documentación completa y actualizada del proyecto está disponible en GitBook.</p>

      <div className="mt-6">
        <a
          href={gitbookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-3 bg-vive-orange text-white rounded-md font-semibold shadow"
        >
          Abrir documentación en GitBook
        </a>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">📑 Descripción del Proyecto</h2>
        <p className="text-gray-700">
          <strong>Vive Parche</strong> es una plataforma web integral para la gestión y participación en eventos, diseñada para conectar organizadores y participantes de manera eficiente y moderna. La aplicación permite a los organizadores crear, gestionar y promocionar sus eventos, mientras que los usuarios pueden descubrir, participar y evaluar eventos de su interés.
        </p>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">🎯 Objetivos</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>Para Organizadores</strong>: Herramientas completas de gestión de eventos, estadísticas y análisis de rendimiento.</li>
          <li><strong>Para Usuarios</strong>: Experiencia intuitiva de descubrimiento y participación en eventos.</li>
          <li><strong>Para Administradores</strong>: Panel de control completo con funcionalidades de moderación y supervisión.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">📈 Propuesta de Valor</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Sistema de roles diferenciado (Usuario, Organizador, Administrador).</li>
          <li>Funcionalidades avanzadas de búsqueda y filtrado.</li>
          <li>Sistema de reseñas y favoritos.</li>
          <li>Estadísticas en tiempo real con Redis.</li>
          <li>API REST completamente documentada.</li>
          <li>Interfaz moderna y responsiva.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">✨ Características Principales</h2>

        <h3 className="text-xl font-medium text-gray-800 mt-4">🔐 Autenticación y Autorización</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Registro de usuarios con validación.</li>
          <li>Sistema de login con JWT tokens.</li>
          <li>Gestión de roles y permisos.</li>
          <li>Refresh tokens para sesiones extendidas.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">📅 Gestión de Eventos</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Creación y edición completa de eventos.</li>
          <li>Categorización y etiquetado.</li>
          <li>Gestión de imágenes y multimedia.</li>
          <li>Control de estado y visibilidad.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">🔍 Búsqueda y Filtrado</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Búsqueda por texto libre.</li>
          <li>Filtros por categoría, fecha, precio y ubicación.</li>
          <li>Eventos próximos y recomendados.</li>
          <li>Paginación optimizada.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">💬 Interacción Social</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Sistema de comentarios y reseñas (1-5 estrellas).</li>
          <li>Favoritos y lista de deseos.</li>
          <li>Validación anti-spam.</li>
          <li>Moderación de contenido.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">📊 Analytics y Estadísticas</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Contador de visualizaciones en tiempo real.</li>
          <li>Métricas por evento y organizador.</li>
          <li>Dashboard de control personalizado.</li>
          <li>Exportación de datos (en desarrollo).</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">💻 Stack de Desarrollo</h2>
        <p className="text-gray-700 mt-2">El proyecto utiliza una arquitectura moderna basada en <strong>FastAPI</strong> para el backend y <strong>React</strong> para el frontend, complementada con tecnologías que mejoran el rendimiento, la experiencia de usuario y la gestión de datos. A continuación, se describe el stack completo:</p>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Frontend</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>React</strong>: Biblioteca de JavaScript utilizada para construir una interfaz de usuario dinámica y modular.</li>
          <li><strong>Tailwind CSS</strong>: Framework de estilos utilitario que permite un diseño moderno, responsivo y altamente personalizable.</li>
          <li><strong>Axios / Fetch API</strong>: Empleados para la comunicación entre el cliente y el servidor mediante solicitudes HTTP a los endpoints de FastAPI.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Backend</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>FastAPI</strong>: Framework de Python rápido y eficiente para el desarrollo de APIs RESTful.
            <ul className="list-disc list-inside ml-5 mt-1 text-gray-700">
              <li>Soporte para validación automática de datos con <strong>Pydantic</strong>.</li>
              <li>Documentación de endpoints autogenerada (Swagger UI / ReDoc).</li>
              <li>Manejo de autenticación, autorización y control de errores.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Base de Datos</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>MySQL</strong>: Sistema de gestión de base de datos relacional utilizado para almacenar la información principal del sistema (usuarios, transacciones, configuraciones, etc.).</li>
          <li><strong>SQLAlchemy / ORM</strong>: Utilizado para la interacción entre los modelos de datos en Python y la base de datos MySQL, facilitando las operaciones CRUD.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Cache y Rendimiento</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>Redis</strong>: Empleado como sistema de cache para mejorar la velocidad de respuesta y almacenar datos temporales o sesiones.
            <ul className="list-disc list-inside ml-5 mt-1 text-gray-700">
              <li>Ideal para manejo de sesiones, tokens o resultados de consultas frecuentes.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Infraestructura y Herramientas</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>Git & GitHub/GitLab</strong>: Para el control de versiones y la colaboración del equipo.</li>
          <li><strong>GitBook</strong>: Utilizado para documentar el proyecto de manera clara, estructurada y accesible.</li>
          <li><strong>Entorno Virtual (venv / poetry)</strong>: Aislamiento de dependencias de Python.</li>
          <li><strong>NPM / Yarn</strong>: Manejo de dependencias del frontend.</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500">🎉 ¡Gracias por usar Vive Parche! 🎉</p>
    </div>
  )
}
