const mongoose = require('mongoose')

if (process.argv.length < 3) {
 console.log('Please provide the password as an argument: node mongo.js <password>')
 process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://victordenis:${password}@web3.7qnywxk.mongodb.net/contacts?retryWrites=true&w=majority`


console.log(process.argv.length)


const contactSchema = new mongoose.Schema({
    name: String,
    number: Date
    })

    const Contact = mongoose.model('Contact', contactSchema)


if (process.argv.length >= 4) {

    mongoose
    .connect(url)
    .then((result) => {
    console.log('connected')

    const contact = new Contact({
        name: process.argv[3],
        number: process.argv[4]
    })

    return contact.save()
    })
    .then(() => {
    console.log('contact saved!')
    return mongoose.connection.close()
    })
    .catch((err) => console.log(err))

}else{
    mongoose
    .connect(url)
    .then((result) => {
        Contact.find({}).then((result) => {
            result.forEach((contact) => {
                console.log(contact)
            })
            mongoose.connection.close()
        })
    })
    .catch((err) => console.log(err))
}