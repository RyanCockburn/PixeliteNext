

import nodemailer from "nodemailer";


export default async function ContactAPI (req, res) {

    const {name, email, message} = req.body;

    const user = process.env.user;



    const data = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass
        }
    })
    try{
        var failed = false;
        if (data.name == undefined) {
          failed = true;
        }
      
        if (data.email == undefined) {
            failed = true;
        }
      
        if (data.message == undefined) {
            failed = true;
        }

        if(failed) {
            throw 500;
        }
      

        const mail = await transporter.sendMail({
            from: user,
            to: "business@pixelite.digital",
            replyTo: email,
            subject: `Social media quote submission`,
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
        })

        const confirmMail = await transporter.sendMail({
            from: user,
            to: email,
            replyTo: email,
            subject: `Pixelite Digital Social Media Quote`,
            html:
            `
            <style>
            p {
                font-size:36px;
            }
            </style>
            <p>test</p>
            `
        })

         return res.status(200).json({message: "success"})
    }catch (error){
        res.status(error).json({message: "Could not send email. Your message was not sent."})
    }
    
}