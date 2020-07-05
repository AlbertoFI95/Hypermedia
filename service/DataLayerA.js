let{auserDBSetup} = require("./AuserService");
    const sqlDBAFactory = require("knex");
    let sqlDBA = sqlDBAFactory({
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

function setupDataLayerA(){
    console.log("Setting up data layer");
    return auserDBSetup(sqlDBA);
}
module.exports = {database : sqlDBA, setupDataLayerA};
