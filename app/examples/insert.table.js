const sql=require("../models/db");
sql.query("INSERTINTObooksVALUES(NULL,'title','desc','perpustakaan.png',current_timestamp());",(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Databerhasilditambahkan:"+res.affectedRows);
    }
});