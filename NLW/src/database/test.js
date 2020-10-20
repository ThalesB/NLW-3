const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // insert datas in table

  /*await saveOrphanage(db, {
    lat: "-1.4654292",
    lng: "-48.4806902", 
    name: "Casa das meninas",
    about: "Entidade filantrópica que oferece assistência à crianças e adolescentes vindas do interior e de outros estados, para realizar tratamento em hospitais da nossa região. ",
    whatsapp: "(91)3259-0525",
    images: [
        "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas das 8h até 18h",
    open_on_weekends: "0"
  })*/

  // consult datas in table
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consult orphanage for id
  //const orphanage = await db.get('SELECT * FROM orphanages WHERE id = "2"');
  //console.log(orphanage);

  /*// delete datas in table
  console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
  console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))*/
});