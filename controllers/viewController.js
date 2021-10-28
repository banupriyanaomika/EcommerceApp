const User = require("../models/userModel");


exports.signup =  (req, res) => {
    res.status(200).render('signup',{
      title:"the forest"
    });
  }
  /*try {
    
    const products = await Product.find();

    if(!products){
      res.send("product not found");
    }
    
    // Send response
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};*/

exports.signin = async (req, res) => {
    try {
      
      const products = await Product.find();
  
      if(!products){
        res.send("product not found");
      }
      
      // Send response
      res.status(200).json({
        status: "success",
        results: products.length,
        data: {
          products,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  };
  