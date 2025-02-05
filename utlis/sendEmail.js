import { createTransport } from "nodemailer";

const sendEmail = async (to, subject, html) => {
    try {
        let transporter = createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail
                pass: process.env.EMAIL_PASS, // App Password (Not Gmail password)
            },
        });

        let mailOptions = {
            from: `"Your Website Name" <${process.env.EMAIL_USER}>`, // Set sender name
            to: to, // Recipient email
            subject: subject,
            html: html,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Email sending error:", error);
    }
};

export default sendEmail;
