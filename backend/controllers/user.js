const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const dbmysql = require("../models/dbmysql-config");

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        dbmysql.getConnection((err) => {
          if(err) throw err;
          var pengguna = [
            req.body.email,
            hash
          ];
  
          dbmysql.query("INSERT INTO pengguna_mhs (email_mhs, pass_mhs) VALUES (?)", [pengguna],(err, result) => {
            if(err) throw err;
          });
        });
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(result => {
            res.status(201).json({
              message: "akun berhasil dibuat",
              result: result
            });          
          })
          .catch(err => {
            res.status(500).json({
              message: "salah kredensial"
            });
          });
      })
    
  }

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Auth failed 1"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Auth failed 2"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "Auth failed 3"
        });
      });
  }