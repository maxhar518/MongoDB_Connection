const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(express.json())

mongoose.connect("mongodb+srv://mazhar518:mazhar518@atlascluster.gpt1hrj.mongodb.net/todoApp")
// .then(() => console.log('DB connected'))
// .catch(err => console.log('Something went wrong'))

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const userModel = mongoose.model("emp", userSchema)
const emp1 = new userModel({
    name:"Mazhar",
    age:22
})

async function saveUser() {
    try {
        await emp1.save()
    } catch (err) {
        console.error(err)
    }
}

saveUser()
app.listen(port, () => {
    console.log("Port is listening at 3000");
    
})