import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();

// Configuración de CORS más específica
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verificar configuración de email
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Error en configuración de email:', error);
  } else {
    console.log('✅ Servidor de email configurado correctamente');
  }
});

app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

// Endpoint para enviar emails de contacto
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Todos los campos son requeridos"
      });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Email inválido"
      });
    }

    // Configuración del email
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Rulienta Portfolio'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject || `Nuevo mensaje de ${name} - Portfolio Rulienta`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #32a3a3; border-bottom: 2px solid #32a3a3; padding-bottom: 10px;">
            📧 Nuevo mensaje desde tu Portfolio
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #2d7a7a; margin-top: 0;">Información del contacto:</h3>
            <p><strong>👤 Nombre:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📅 Fecha:</strong> ${new Date().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>

          <div style="background: white; padding: 20px; border-left: 4px solid #32a3a3; margin: 20px 0;">
            <h3 style="color: #2d7a7a; margin-top: 0;">💬 Mensaje:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="background: #e8f5f5; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 0; color: #2d7a7a; font-size: 14px;">
              💡 <strong>Tip:</strong> Puedes responder directamente a este email para contactar con ${name}
            </p>
          </div>
        </div>
      `,
      replyTo: email 
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email enviado desde: ${email} (${name})`);

    res.json({
      success: true,
      message: "Mensaje enviado correctamente"
    });

  } catch (error) {
    console.error('❌ Error enviando email:', error);
    res.status(500).json({
      success: false,
      error: "Error interno del servidor. Inténtalo más tarde."
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});