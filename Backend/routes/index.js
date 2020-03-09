var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/register', function (req, res) {
  let empName = req.body.empname1;
  let eMail = req.body.email1;
  let empId = req.body.empid1;
  let phoneNumber = req.body.phonenumber1;
  res.status(200).json({
    Empname:empName, Email:eMail,Empid:empId, phone:phoneNumber
  });
});


module.exports = router;
