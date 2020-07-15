const sql = require("./dbmysql");

const Staff = function(staff) {
  this.nama = staff.nama;
  this.email = staff.email;
  this.password = staff.password;
};

Staff.create = (staffBaru, result) => {
  sql.query("INSERT INTO staff SET ?", staffBaru, (err, res) => {
    if (err) {
      console.log("error : ", err);
      result(err,null);
      return;
    }

    console.log("staff telah ditambahkan : ", { id: res.insertd, ...staffBaru });
    result(null, { id: res.insertd, ...staffBaru });
  });
};