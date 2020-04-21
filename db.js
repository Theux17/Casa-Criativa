const sqLite3 = require("sqlite3").verbose()
const db = new sqLite3.Database("./casa_criativa.db")


db.serialize(function() {
    //Criar Tabela
    /*db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT, 
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
     
    `)

    // Inserir dado na tabela  
    const query = `
    INSERT INTO ideas (
        image, 
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        "Exercícios",
        "Saúde",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime suscipit consequatur qui",
        "https://rocketseat.com.br"
    ]  

    db.run(query, values, function(err) {
        if(err) return console.log(err)

        console.log(this)
    })*/
    
    // Consultar dado na tabela
/*
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })
*/
    // Deletar dado na tabela 
    /*db.run(`DELETE FROM ideas WHERE id = ?`, [6], function(err){
        if(err) return console.log(err)

        console.log("DELETEI", this)
    })*/

})


module.exports = db