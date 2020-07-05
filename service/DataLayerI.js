let{involvedDBSetup} = require("./InvolvedService");
    const sqlDBIFactory = require("knex");
    let sqlDBIS = sqlDBIFactory({
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
function setupDataLayerI(){
    console.log("Setting up data layer");
    return involvedDBSetup(sqlDBIS);
	}
							   
module.exports = {database : sqlDBIS, setupDataLayerI};