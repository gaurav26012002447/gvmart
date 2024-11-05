// const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// console.log(process.env.SENDGRID_API_KEY)
// console.log(process.env.SENDGRID_MAIL)

const sendEmail = async (options) => {

    // const transporter = nodeMailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     service: process.env.SMTP_SERVICE,
    //     auth: {
    //         user: process.env.SMTP_MAIL,
    //         pass: process.env.SMTP_PASSWORD,
    //     },
    // });

    // const mailOptions = {
    //     from: process.env.SMTP_MAIL,
    //     to: options.email,
    //     subject: options.subject,
    //     html: options.message,
    // };

    // await transporter.sendMail(mailOptions);
    // console.log(process.env.SENDGRID_MAIL)
     if(options.templateId === process.env.SENDGRID_RESET_TEMPLATEID) {
        const msg = {
            to: options.email,
            from: process.env.SENDGRID_MAIL,
            templateId: options.templateId,
            dynamic_template_data:{ 
                subject: 'Please reset your password from Given link',
                link: options.data.reset_url,
                 time: process.env.COOKIE_EXPIRE,
                 
                   
            },
        };

        sgMail.send(msg).then(() => {
            console.log('Email Sent')
            // console.log(options.data)
            console.log(process.env.COOKIE_EXPIRE)
        }).catch((error) => {
            console.error(error)
        });
     }
     else{
        const msg = {
            to: options.email,
            from: process.env.SENDGRID_MAIL,
            templateId: options.templateId,
            dynamic_template_data:{ 
                cust: options.data.name,
                shinfo: options.data.shippingInfo,
                 subtotal: options.data.totalPrice,
                 shippingcharge: 100,
                 saletax: 10,
                 tprize: options.data.totalPrice + 110,
                 oderid: options.data.oid,
                 oderit: options.data.orderItems,
                 pat: Date.now(),
                 
                   
            },
        };
          console.log(options.data.name)
          console.log(options.data.shippingInfo)
          console.log(options.data.totalPrice)
          console.log(tprize)
          console.log(options.data.oid)
          console.log(options.data.orderItems)
          console.log(pat)
        sgMail.send(msg).then(() => {
            console.log('Email Sent')
            // console.log(options.data)
            console.log(process.env.COOKIE_EXPIRE)
        }).catch((error) => {
            console.error(error)
        });
     }
    
    // console.log(options.data)
    // sgMail.send(msg).then(() => {
    //     console.log('Email Sent')
        // console.log(options.data)
    //     console.log(process.env.COOKIE_EXPIRE)
    // }).catch((error) => {
    //     console.error(error)
    // });
};

module.exports = sendEmail;



