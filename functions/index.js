const functions = require('firebase-functions')
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp()

exports.sendEmailNotification=functions.firestore.document('notifications/{notificationId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'tech.swict20@gmail.com',
            pass:'SWICT20jeger!'
        }
    });
authData.sendMail({
from :'tech.swict20@gmail.com',
to:`${data.receiver}`,
subject:`${data.subject}`,
text:`${data.text}`,
html:`${data.html}`,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});