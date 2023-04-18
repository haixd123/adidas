class Site {

    index(req, res){
      res.render('site');
    }

    search(req, res) {
      res.send('NEWS DETAIL!!!');
    }
}

module.exports = new Site();
