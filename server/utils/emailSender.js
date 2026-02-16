const fs = require('fs');
const path = require('path');
const { Resend } = require('resend');
const nodemailer = require("nodemailer");

// Initialize Resend with API Key from env (if available)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Configure Nodemailer transporter using Hostinger SMTP (Fallback)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST_INFO,
    port: parseInt(process.env.SMTP_PORT_INFO),
    secure: process.env.SMTP_SECURE_INFO === 'true',
    auth: {
        user: process.env.EMAIL_USER_INFO,
        pass: process.env.EMAIL_PASS_INFO,
    },
    tls: {
        rejectUnauthorized: false,
    },
    connectionTimeout: 30000,
});

const sendEmail = async (to, subject, htmlContent) => {
    // 1. Try Resend API (Priority)
    if (process.env.RESEND_API_KEY) {
        try {
            console.log(`📤 Sending email to ${to} via Resend API...`);
            const data = await resend.emails.send({
                from: 'Digigrow <hello@digigrow.com>', // Placeholder, updated in env
                to: [to],
                subject: subject,
                html: htmlContent
            });
            if (data.error) throw new Error(data.error.message);
            console.log(`✅ Email sent successfully to ${to} via Resend.`);
            return data;
        } catch (error) {
            console.error(`❌ Resend API failed, falling back to SMTP:`, error.message);
        }
    }

    // 2. Fallback to Nodemailer (SMTP)
    try {
        console.log(`📤 Sending email to ${to} via SMTP (Nodemailer)...`);
        const mailOptions = {
            from: `"Digigrow" <${process.env.EMAIL_USER_INFO}>`,
            to,
            subject,
            html: htmlContent,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to ${to} via SMTP.`);
        return info;
    } catch (error) {
        console.error(`❌ All email methods failed for ${to}:`, error);
    }
};

module.exports = { sendEmail };
