const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path');
// const cors=require('cors');

const app=express();
const PORT=process.env.PORT||8080;

const routes=require('./routes/api');

const MONGODB_URI='mongodb+srv://Karthik_V:karthik29@cluster0.idyet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
console.log('mongoose connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//  newNewsletter.save((error)=>{
//     if(error){
//         console.log('oops');
//     }else{
//         console.log('data is saved');
//     }
// }); 
// app.use(cors());
app.use(morgan('tiny'));

app.use('/api',routes);

app.listen(PORT,console.log(`server is set up at ${PORT}`));
