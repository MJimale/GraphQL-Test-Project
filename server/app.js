const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();

//allow cross origin request
app.use(cors())


//Connecting to MLAB Database 
//Mongoose
mongoose.connect(
	'mongodb://Mustafa:Ameenbro6@ds213665.mlab.com:13665/gql-books',
 	{ useNewUrlParser: true }
 )
mongoose.connection.once('open',()=>{
	console.log("Connected to MLAB Database")
})

app.use('/graphql',graphqlHTTP({
	schema,
	graphiql:true
}));

app.listen(4000,()=>{
	console.log("dRaaaaaaaaake")
})