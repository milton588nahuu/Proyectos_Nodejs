const errUrl = (req,res) => {
    console.log(req.baseUrl)
    res.status(404).render("error.ejs")
}

module.exports = errUrl;