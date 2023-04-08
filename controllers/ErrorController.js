exports.Get404 =  (req, res, next) => {
  //middleware
  res.status(404).render("404",{pageTitle: "Not found"});
};