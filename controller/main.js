const DB=require('../models/main')
const { db } = require('../models/main')

exports.gethome=(req,res,next)=>{
    DB.find()
    .then(user=>{
        res.render('home',{
            pagetitle: 'CRUD',
            users:user
        })
    })
}
 
exports.posthome=(req,res,next)=>{
}

exports.getadd=(req,res,next)=>{
    res.render('add',{
        pagetitle: 'CRUD-Add'
    })
}

exports.postadd=(req,res,next)=>{
    const name=req.body.Name;
    const email=req.body.Email;
    const phone_number=req.body.Phone;
    const city=req.body.City;
    const career=req.body.Career;
    const db=new DB({
        Name:name,
        Email:email,
        Phone_Number:phone_number,
        City:city,
        Career:career
    });
    db.save()
    .then(result=>{
        console.log('Created')
        res.redirect('/');
    })
    .catch(err=>{console.log(err)})
}

exports.getedit=(req,res,next)=>{
    const id=req.params.userId;
    DB.findById(id)
    .then(user=>{
        res.render('edit',{
            pagetitle: 'CRUD-Edit',
            user:user
        })
    })
}
 
exports.postedit=(req,res,next)=>{
    const id=req.body.userId;

    const updatename=req.body.Name;
    const updateemail=req.body.Email;
    const updatephone_number=req.body.Phone;
    const updatecity=req.body.City;
    const updatecareer=req.body.Career;

    DB.findById(id)
    .then(user=>{
        user.Name=updatename,
        user.Email=updateemail,
        user.Phone_Number=updatephone_number,
        user.City=updatecity,
        user.Career=updatecareer
        return user.save()
    })
    .then(result=>{
        console.log('Updated')
        res.redirect('/');
    })
    .catch(err=>{console.log(err)})
}

exports.deleteUser=(req,res,next)=>{
    const id=req.params.userId;
    console.log(id)
    DB.findByIdAndRemove(id)
    .then(()=>{
        console.log('removed')
        res.redirect('/')
    })
    .catch(err=>{console.log(err)})
}

