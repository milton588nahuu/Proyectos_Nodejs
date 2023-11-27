const express = require('express')
const router = express.Router()

const data_base = require('../database/data_base')


router.get("/employees",(req,res) => {

  data_base.all("SELECT * FROM Employees;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          //console.log(rows);
          const query = `PRAGMA table_info(Employees);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Employees.ejs',{columns,rows})
              } 
            })
      }
  });

})

router.get("/OrderDetails",(req,res) => {

  data_base.all("SELECT * FROM OrderDetails;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          //console.log(rows);
          const query = `PRAGMA table_info(OrderDetails);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('OrderDetails.ejs',{columns,rows})
              } 
            })
      }
  });

})

router.get("/Products",(req,res) => {

  data_base.all("SELECT * FROM Products;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          //console.log(rows);
          const query = `PRAGMA table_info(Products);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Products.ejs',{columns,rows})
              } 
            })
      }
  });

})


router.get("/Suppliers",(req,res) => {

  data_base.all("SELECT * FROM Suppliers;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          console.log(rows);
          const query = `PRAGMA table_info(Suppliers);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Suppliers.ejs',{columns,rows})
              } 
            })
      }
  });

})

router.get("/Shippers",(req,res) => {

  data_base.all("SELECT * FROM Shippers;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          console.log(rows);
          const query = `PRAGMA table_info(Shippers);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Shippers.ejs',{columns,rows})
              } 
            })
      }
  });

})


router.get("/Customers",(req,res) => {

  data_base.all("SELECT * FROM Customers;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          console.log(rows);
          const query = `PRAGMA table_info(Customers);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Customers.ejs',{columns,rows})
              } 
            })
      }
  });

})

router.get("/Categories",(req,res) => {

  data_base.all("SELECT * FROM Categories;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          console.log(rows);
          const query = `PRAGMA table_info(Categories);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Categories.ejs',{columns,rows})
              } 
            })
      }
  });

})

router.get("/Orders",(req,res) => {

  data_base.all("SELECT * FROM Orders;", (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
      } else {
          console.log(rows);
          const query = `PRAGMA table_info(Orders);`
          data_base.all(query, (err, columns) => {
              if (err) {
                  console.error(err.message);
              }else {
                console.log(columns)
                res.status(200).render('Orders.ejs',{columns,rows})
              } 
            })
      }
  });

})


module.exports = router
