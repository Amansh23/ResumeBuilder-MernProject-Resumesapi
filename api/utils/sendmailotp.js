const nodemailer = require("nodemailer")

exports.sendmailotp = async (user, res) => {
    const generateOTP = Math.floor(Math.random() * (10000 - 1000) + 1000);
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.MAILUSERNAME,
            pass: process.env.MAILPASSWORD,
        },
    });

    const mailOptions = {
        from: "Resume Builder <resume.builder@temp.com>",
        to: user.email,
        subject: "Password Reset OTP",
        text: "Do not share this OTP to anyone.",
        html: `<h1>${generateOTP}</h1>`,
    };

    await transport.sendMail(mailOptions, async (err, info) => {
        if (err) return res.status(500).json({ message: err.response });
        console.log(info);
        user.otp = generateOTP;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Mail Sent, check inbox/spam",
        });
    });
};