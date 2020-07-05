let{photoDBSetup} = require("./PhotoService");
    const sqlDBPFactory = require("knex");
    let sqlDBP = sqlDBPFactory({
        client : "pg",
        debug : true ,
		ssl : true,
        connection : {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'janenba1',
    database : 'postgres'
  }
        
    });

function setupDataLayerP(){
    console.log("Setting up data layer");
    return photoDBSetup(sqlDBP);
}
module.exports = {database : sqlDBP, setupDataLayerP};