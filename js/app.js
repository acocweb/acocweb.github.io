var databaseUrl = "mongodb://localhost:27017/acocweb";
var collections = "actaDefuncion";
var db = require("mongojs").connect(databaseUrl, collections);
