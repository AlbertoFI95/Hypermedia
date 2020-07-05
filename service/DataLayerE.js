let{eventDBSetup} = require("./EventService");
    const sqlDBEFactory = require("knex");
    let sqlDBE = sqlDBEFactory({
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
function setupDataLayerE(){
    console.log("Setting up data layer");
    return eventDBSetup(sqlDBE);
}
module.exports = {database : sqlDBE, setupDataLayerE};