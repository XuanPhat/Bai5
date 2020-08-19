const express = require('express');
const app=express();
const port=3000;
app.set('view engine', 'pug');
app.set('views','./view')


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




var users=
[
{
    		id:1,
            name:'Đi chợ đêm muộn'
    	},
    	{
    		id:2,
            name:'Nấu cơm'
    	},
    	{
    		id:3,
            name:'Rửa bát'
    	},
    	{
    		id:4,
            name:'Học code tại CodersX'
    	},
    	{
    		id:5,
            name:'Học SQL'
    	},
    	{
    		id:6,
            name:'Học hequantri'
    	}


]

app.get('/',function(req,res) {
     res.render('index',
     	{
     		name:"THY"
     	});

})
app.get('/users',function(req,res) {
    res.render('index2',{
    users: users
    	
       });
	


});

app.get('/users/search',function(req,res)
{
        var q=req.query.q;
        var matchuser=users.filter(function(user)

        {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;

        });
        
      res.render('index2',
        {
        	users: matchuser
        }
      	);
  

});



app.get('/users/create',function(req,res)
{
        
   
    
    res.render('index3');

})

app.post('/users/create',function(req,res)
{
   users.push(req.body);
  res.redirect('/users');

})






app.listen(port,function()
{
      console.log("express is install port "+port);

});