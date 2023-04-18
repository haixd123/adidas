
class List {
    show(req, res) {
      const XLSX = require('xlsx');
      const workbook = XLSX.readFile('data/dbadidas.xlsx')
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];

      for(let index = 1; index < 16; index++) {
        const id = worksheet[`A${index}`].v;
        const name = worksheet[`C${index}`].v;
        
        const a = {id, name}
        console.log({
          id,
          name,
        });

        // res.set({
        //   id,
        //   name,
        // });

        // return res.send({
        //   id,
        //   name,
        // });
        // res.writeHead(name)
        res.send({
          id,
          name,
        });
       
      }
      
      
    

      // res.send('NEWS DETAIL!!!');
      
    }

    index(req, res) {
      res.send('NEWS DETAIL!!!');

      // res.render('listProduct');
  }

  // [GET] /news/:slug
  

};

module.exports = new List();
