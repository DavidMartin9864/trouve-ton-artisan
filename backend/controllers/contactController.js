const nodemailer = require('nodemailer');
const { Artisan } = require('../models');
require('dotenv').config();

exports.sendContact = async (req, res) => {
  try {
    const { nom, email, objet, message } = req.body;

    if (!nom || !email || !objet || !message) {
      return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Format d'email invalide." });
    }

    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) return res.status(404).json({ success: false, message: 'Artisan non trouvé.' });

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Trouve ton Artisan" <${process.env.MAIL_USER}>`,
      to: artisan.email,
      replyTo: email,
      subject: `[Trouve ton Artisan] ${objet}`,
      html: `
        <h2>Nouveau message via Trouve ton Artisan</h2>
        <p><strong>De :</strong> ${nom} (${email})</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message." });
  }
};