import express from 'express'
import formData from 'express-form-data';
import bodyParser from 'body-parser'
import cors from "cors"
import nodemailer from 'nodemailer'
const app = express();
app.use(cors());
app.use(formData.parse())
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json());
function FSendMailMarketingHunghacompanyTimviec365(title,content,receiver){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
            user:'hunghacompany.timviec365@gmail.com',
            pass:'razkegpnylihwinl'
            }
        });
        const mail_config = {
            from:'hunghacompany.timviec365@gmail.com',
            to:receiver,
            subject:title,
            html: `${content}`
        };
        transporter.sendMail(mail_config, function(error,info){
            if(error){
                console.log(error);
                return reject({message:"Đã có lỗi xảy ra khi gửi mail"});
            };
            return resolve({message:"Gửi mail thành công"})
        });
    })
}

const SendMailMarketingHunghacompanyTimviec365 = async (req,res)=>{
    try{
        console.log(req.body)
        if(req.body && req.body.title && req.body.content && req.body.receiver){
            FSendMailMarketingHunghacompanyTimviec365(req.body.title,req.body.content,req.body.receiver)
            res.json({
                data:{
                    result:true
                },
                error:null
            })
        }
        else{
            res.status(200).json(createError(200, "Infor is not valid"));
        }
    } catch(e){
        console.log(e);
        res.status(200).json(createError(200, "Đã có lỗi xảy ra"));
    }
}
function FSendMailMarketingHunghacompanyTimviec365_v2(title,content,receiver){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
            user:'uvtv365.hhp@gmail.com',
            pass:'chbwgnlaffyojkbo'
            }
        });
        const mail_config = {
            from:'uvtv365.hhp@gmail.com',
            to:receiver,
            subject:title,
            html: `${content}`
        };
        transporter.sendMail(mail_config, function(error,info){
            if(error){
                console.log(error);
                return reject({message:"Đã có lỗi xảy ra khi gửi mail"});
            };
            return resolve({message:"Gửi mail thành công"})
        });
    })
}

const SendMailMarketingHunghacompanyTimviec365_v2 = async (req,res)=>{
    try{
        console.log(req.body)
        if(req.body && req.body.title && req.body.content && req.body.receiver){
            FSendMailMarketingHunghacompanyTimviec365_v2(req.body.title,req.body.content,req.body.receiver)
            res.json({
                data:{
                    result:true
                },
                error:null
            })
        }
        else{
            res.status(200).json(createError(200, "Infor is not valid"));
        }
    } catch(e){
        console.log(e);
        res.status(200).json(createError(200, "Đã có lỗi xảy ra"));
    }
}

function FSendMailMarketingHunghacompanyTimviec365_v3(title,content,receiver){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
            user:'ungvientv365.hhp@gmail.com',
            pass:'blycucvthfehfvon'
            }
        });
        const mail_config = {
            from:'ungvientv365.hhp@gmail.com',
            to:receiver,
            subject:title,
            html: `${content}`
        };
        transporter.sendMail(mail_config, function(error,info){
            if(error){
                console.log(error);
                return reject({message:"Đã có lỗi xảy ra khi gửi mail"});
            };
            return resolve({message:"Gửi mail thành công"})
        });
    })
}

const SendMailMarketingHunghacompanyTimviec365_v3 = async (req,res)=>{
    try{
        console.log(req.body)
        if(req.body && req.body.title && req.body.content && req.body.receiver){
            FSendMailMarketingHunghacompanyTimviec365_v3(req.body.title,req.body.content,req.body.receiver)
            res.json({
                data:{
                    result:true
                },
                error:null
            })
        }
        else{
            res.status(200).json(createError(200, "Infor is not valid"));
        }
    } catch(e){
        console.log(e);
        res.status(200).json(createError(200, "Đã có lỗi xảy ra"));
    }
}
app.post('/api/mail/HunghacompanyTimviec365_v3', SendMailMarketingHunghacompanyTimviec365_v3);
app.post('/api/mail/HunghacompanyTimviec365_v2', SendMailMarketingHunghacompanyTimviec365_v2);
app.post('/api/mail/HunghacompanyTimviec365', SendMailMarketingHunghacompanyTimviec365);

app.listen(8800,()=>{
    console.log("Backend is running on http://localhost:8800")
})