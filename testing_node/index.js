const express = require("express");
app = express(),
api = require("./routers/api");

app.use('/api', api);
app.listen(3000);
