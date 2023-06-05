require("dotenv").config();
const express= require('express');
const router= express.Router();
const app = express();
const PORT = process.env.PORT || 2950;
app.set('view engine','ejs');
app.use(express.static('public'));
app.get("/",(req,res)=>{
    
    const PageDescription={'title':"Home",'pagetitle':"Welcome to Home page",'s_title':"What We Do",'serviceUrl':"/#service",'aboutUrl':"/#about"};
    res.render('base',PageDescription);
});
app.get("/footer",(req,res)=>{
    
    const PageDescription={'title':"footer",'serviceUrl':"/#service",'aboutUrl':"/#about"};
    res.render('footer',PageDescription);
});
app.get("/contact",(req,res)=>{
    
    const PageDescription={'title':"Contact",'serviceUrl':"/#service",'aboutUrl':"/#about"};
    res.render('contact',PageDescription);
});
app.get("/career",(req,res)=>{
    
    const PageDescription={'title':"Our Team",'serviceUrl':"/#service",'aboutUrl':"/#about"};
    res.render('career',PageDescription);
});
/*app.get("/service",(req,res)=>{
    
    const PageDescription={'title':"Service",'s_title':"What We Do"};
    res.render('service',PageDescription);
});*/
app.use((req,res)=>{
    const PageDescription={'title':"Page Not Found",'serviceUrl':"/#service",'aboutUrl':"/#about"};
    res.render('404',PageDescription); 
});
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
});

    