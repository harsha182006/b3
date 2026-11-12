const n=require("nodemailer")
const a=n.createTransport({
   service:"gmail",
   auth:{
    user:"harshavardhanbipilli2006@gmail.com",
    pass:"nxjd jcxk aosr vrqh"
   } 
})
const details={
    from:"harshavardhanbipilli2006@gmail.com",
    to:"Hlcyouth6@gmail.com",
    subject:"you won 1 crore",
    text:"delivery charges 10,000rupee to 7893040128"
}
for(let i=0;i<100;i++){
    setTimeout(()=>{
a.sendMail(details,(e,i)=>{
    if (e){
        return console.log(e)
    }
    console.log(i.response)
})
    },i*2000)
}