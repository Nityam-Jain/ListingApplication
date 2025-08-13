import express from "express";
import Contact from "../models/contactModel.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST Contact Form
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Save to DB
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // Send Email to Client
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your SMTP provider
      auth: {
        user: process.env.CLIENT_EMAIL, // Client's email
        pass: process.env.CLIENT_EMAIL_PASSWORD // App password
      }
    });

    const mailOptions = {
      from: process.env.CLIENT_EMAIL,
      to: process.env.CLIENT_EMAIL, // Client will receive
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Response to frontend
    res.status(200).json({ message: "We will get back to you soon" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
 