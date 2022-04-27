const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
let tasks = [
    { id: 1, name: 'Axe', weight : '54' ,picture:'https://i.pinimg.com/736x/b0/13/49/b01349f8d89deae9711b7f1601bc5e6f.jpg'},
    { id: 2, name: 'Anti-Mage', weight : '56' ,picture:'https://i.pinimg.com/564x/12/52/d1/1252d1ba89fe5fd16e02d3a55fcdf54a.jpg'},
    { id: 3, name: 'Invoker', weight : '52' ,picture:'https://i.pinimg.com/564x/58/c4/d0/58c4d0432caef70f362ada32c48fb652.jpg'}

]
app.use(cors())

app.get('/', (req, res) => {
    res.json(tasks)
})

app.listen(PORT, () => console.log(`listen at ${PORT}`))