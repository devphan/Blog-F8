

class NewsController {
    // GET page News
    index(req, res) {
        res.render('news');
    }
    //slug: chi tiet
    show(req, res) {
        res.send('NEWS DETAILS')
    }
}

module.exports = new NewsController;