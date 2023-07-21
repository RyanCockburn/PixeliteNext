import nodemailer from "nodemailer";

export default async function ContactAPI (req, res) {
    console.log("Reached")

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
        const mail = await transporter.sendMail({
            from: user,
            to: "business@pixelite.digital",
            replyTo: email,
            subject: `Contact form submission`,
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
        })
        console.log("Message sent: ", mail.messageId)
        return res.status(200).json({message: "success"})
    }catch (error){
        console.log(error)
        res.status(500).json({message: "Could not send email. Your message was not sent."})
    }
    
}