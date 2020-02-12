const dbmysql = require("../models/dbmysql-config");
const PendaftaranMhs = require("../models/pendaftaranmhs");

exports.tambahmhs = (req, res, next) => {
    const url = req.protocol + '://' + req.get("host");
    
    dbmysql.getConnection((err, connection) => {
      if(err) throw err;
      
      let sql = `INSERT INTO pendaftaranmhs (nama, nim, ipk, nokwitansi, foto_mhs, id_mhs) VALUES (?)`;
      var isi = [
        req.body.nama,
        req.body.nim,
        req.body.ipk,
        req.body.nokwitansi,
        url + "/images/" + req.file.filename,
        req.body.id_mhs,
      ];
      dbmysql.query(sql, [isi], (err, result) => {
        if(err) throw err;
        console.log('yg berhasil diinput: ' + result.affectedRows);
        res.status(201).json({
          message: "Pendaftaran berhasil"
        });
        connection.release();
      }); 
    });
  
    // const post = new PendaftaranMhs({
    //   nama: req.body.nama,
    //   nim: req.body.nim,
    //   ipk: req.body.ipk,
    //   nokwitansi: req.body.nokwitansi,
    //   imagePath: url + "/images/" + req.file.filename
    // });
    // post.save().then(postBaru => {
    //   res.status(201).json({
    //     message: " Pendaftaran berhasil ini",
    //     post: {
    //       // id: postBaru._id,
    //       nama: postBaru.nama,
    //       nim: postBaru.nim,
    //       ipk: postBaru.ipk,
    //       nokwitansi: postBaru.nokwitansi,
    //       imagePath: postBaru.imagePath
    //     }
    //   });
    // });
  }

exports.editmhs = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.filename;
  }
  dbmysql.getConnection((err, connection) => {
    if(err) throw err;
    var sql= "UPDATE pendaftaranmhs SET nama =?, nim=?, ipk=?, nokwitansi=?, foto_mhs=?, WHERE ";
    connection.query('UPDATE pendaftaranmhs SET nama = ' + req.body.nama + ', nim = ' + req.body.nim + ', ipk = ' + req.body.ipk + ', nokwitansi = ' + req.body.nokwitansi + ', foto_mhs = ?, WHERE id_mhs = ' + req.body.id , imagePath,(err, result) => {
      if (err) throw err;
    });
  });
  const post = new PendaftaranMhs({
    _id: req.body.id,
    nama: req.body.nama,
    nim: req.body.nim,
    ipk: req.body.ipk,
    nokwitansi: req.body.nokwitansi,
    imagePath: imagePath
  })
  PendaftaranMhs.updateOne({_id: req.params.id}, post)
    .then(result => {
      console.log(result);
      res.status(200).json({message: "update berhasul"});
    })
    .catch(error => {
      res.status(500).json({
        message: "gagal update"
      });
    });
};

exports.tampilmhs = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
  
    dbmysql.getConnection((err, connection) => {
      if(err) throw err;
      let sql = 'SELECT * FROM pendaftaranmhs';  
      connection.query(sql, (err, result) => {
        if(err) throw err;
        if(pageSize && currentPage) {
          let paginate = 'SELECT * FROM pendaftaranmhs LIMIT ' + pageSize + ' OFFSET ' + (pageSize * (currentPage - 1));
          connection.query(paginate, (err, result) => {
            if(err) throw err;
            connection.release();
          });
        }
      });  
    });
  
    const postQuery = PendaftaranMhs.find();
    let fetchedPosts;
    if(pageSize && currentPage) {
      postQuery
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
    }
    postQuery.then(dokumen => {
      fetchedPosts = dokumen
        return PendaftaranMhs.count();
      })
      .then(count => {
        res.status(200).json({
          message: "post berhasil diambil",
          posts: fetchedPosts,
          maxPosts: count
        })
      });
  }

exports.tampilmhsid = (req, res, next) => {
  dbmysql.getConnection((err, connection) => {
    if(err) throw err;
    connection.query('SELECT * FROM pendaftaranmhs WHERE id_mhs='+req.params.id, (err, result) => {
      if(err) throw err;
    });
  });
    dbmysql.query('SELECT * FROM pendaftaranmhs WHERE id_mhs='+req.params.id).then(post => {
      if(post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Postingan tidak ditemukan"});
      }
    });
  }

exports.hapusmhs = (req, res,next) => {
    dbmysql.getConnection((err, connection) => {
      connection.query('DELETE FROM pendaftaranmhs WHERE id_mhs='+ req.params.id, (err, result) => {
        if(err) throw err;
        console.log(result);
      });
    });
    PendaftaranMhs.deleteOne({_id: req.params.id}).then(result => {
      res.status(200).json({message: " Post terhapus"});
    });
  }