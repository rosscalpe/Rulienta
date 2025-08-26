# 📧 Sistema de Email con Nodemailer

## 🚀 Configuración del Backend

### 1. Instalar dependencias
```bash
cd backend
npm install
```

### 2. Configurar variables de entorno
Copia el archivo `.env.example` a `.env` y configura tus datos:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus datos reales:

```env
# Configuración del servidor
PORT=5000

# Configuración de Email
EMAIL_SERVICE=gmail
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-app-password
EMAIL_TO=tu-email@gmail.com

# Configuración CORS
FRONTEND_URL=http://localhost:4200
```

### 3. Configurar Gmail App Password

Para usar Gmail necesitas crear una "Contraseña de aplicación":

1. Ve a tu cuenta de Google
2. Configuración → Seguridad
3. Verificación en 2 pasos (debe estar activada)
4. Contraseñas de aplicaciones
5. Selecciona "Correo" y tu dispositivo
6. Copia la contraseña generada a `EMAIL_PASS`

### 4. Iniciar el servidor
```bash
npm start
```

## 🔧 Características del Sistema

### ✅ Lo que incluye:
- ✅ Envío de emails con HTML formateado
- ✅ Validación de datos (nombre, email, mensaje)
- ✅ Respuestas JSON estructuradas
- ✅ Logging de eventos
- ✅ Configuración CORS
- ✅ Manejo de errores
- ✅ Reply-to automático

### 📧 Formato del Email:
- Encabezado con branding
- Información del contacto
- Mensaje formateado
- Fecha y hora
- Posibilidad de responder directamente

### 🛡️ Seguridad:
- Validación de email
- Sanitización de datos
- CORS configurado
- Variables de entorno

## 🎯 Endpoints Disponibles

### `POST /api/contact`
Envía un mensaje de contacto por email.

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Hola, me interesa tu trabajo...",
  "subject": "Consulta sobre servicios" // Opcional
}
```

**Response Success:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente"
}
```

**Response Error:**
```json
{
  "success": false,
  "error": "Descripción del error"
}
```

## 🔍 Testing

### Probar el endpoint:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Mensaje de prueba"
  }'
```

## 📝 Logs

El servidor mostrará logs de:
- ✅ Configuración de email
- 📧 Emails enviados
- ❌ Errores

## 🚨 Troubleshooting

### Error: "Invalid login"
- Verifica que tengas la verificación en 2 pasos activada
- Usa una contraseña de aplicación, no tu contraseña normal

### Error: CORS
- Verifica que `FRONTEND_URL` esté configurado correctamente
- Asegúrate de que el frontend esté corriendo en el puerto correcto

### Error: "Connection refused"
- Verifica que el servidor esté corriendo
- Verifica que el puerto esté libre

## 🔮 Próximas mejoras
- [ ] Rate limiting
- [ ] Templates de email más avanzados
- [ ] Integración con bases de datos
- [ ] Notificaciones push
- [ ] Dashboard de mensajes
