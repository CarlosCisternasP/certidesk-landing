import { motion } from 'framer-motion'
export default function Features(){
  const items = [
    {title:'Seguridad y acceso', text:'Roles, permisos y registro de auditoría.'},
    {title:'Integración de datos', text:'Conexión directa con SQL Server y Microsoft Graph API.'},
    {title:'Automatización', text:'Reglas, tareas programadas y mover documentos por RUT automáticamente.'},
    {title:'Alertas y caducidad', text:'Notificaciones configurables antes de vencimientos.'},
  ]
  return (
    <section className="py-20 bg-certiBg text-certi900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Todo lo que necesitas para controlar certificados</h2>
        <p className="text-gray-600 mb-8">Funciones pensadas para equipos que requieren trazabilidad, cumplimiento y escalabilidad.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it,i)=>(
            <motion.div key={i} whileHover={{y:-6}} className="p-6 bg-white rounded-2xl shadow-sm border border-[#E6E9EE]">
              <div className="font-semibold mb-2">{it.title}</div>
              <div className="text-sm text-[#6C757D]">{it.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
