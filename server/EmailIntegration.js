"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mail = {
  from: {
    name: "vtssupport",
    address: "vts.inventory@gmail.com",
  }, // sender address
  to: "joaquim.pedroza@vts-i.com", // list of receivers
  subject: "Vts Inventory Request", // Subject line
  text: "Vts Inventory Request Recieved?", // plain text body
  html:"<p> VTS </p>", // html body
  // attachments: [
  // we can add tickets as a pdf here
  //   {
  //     filename:
  //     path:
  //   }
  // ]
};



const sendMail = async (transporter, mail) => {
  try {
    await transporter.sendMail(mail);
    console.log("Email has been Sent");
  } catch (e) {
    console.log(e);
  }
};

sendMail(transporter, mail);
