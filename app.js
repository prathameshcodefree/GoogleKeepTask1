const express=require("express");
const app = express();

const userRoutes = require('./routes/Routes');
const noteRoutes=require('./routes/Routes');


const bodyParser = require("body-parser");



app.use(bodyParser.json());


app.use('/users', userRoutes);

app.use('/notes', noteRoutes);








const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
