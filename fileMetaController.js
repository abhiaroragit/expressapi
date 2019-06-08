// fileMeta.js
// Import fileMData model
FileMData = require("./fileMData");
// Handle index actions
exports.index = function(req, res) {
  FileMData.get(function(err, fileMData) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "FileMDatas retrieved successfully",
      data: fileMData
    });
  });
};
// Handle create fileMData actions
exports.new = function(req, res) {
  var fileMData = new FileMData();
  fileMData.name = req.body.name ? req.body.name : fileMData.name;
  fileMData.filelocation = req.body.filelocation;
  fileMData.uploadedBy = req.body.uploadedBy;
  fileMData.status = req.body.status;
  fileMData.effective_date_from = req.body.effective_date_from;
  fileMData.effective_date_to = req.body.effective_date_to;
  fileMData.create_date = req.body.create_date;
  fileMData.customF = req.body.customF;
  // save the fileMData and check for errors
  fileMData.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New fileMData created!",
      data: fileMData
    });
  });
};
/* // Handle view fileMData info
exports.view = function(req, res) {
  FileMData.findById(req.params.fileMData_id, function(err, fileMData) {
    if (err) res.send(err);
    res.json({
      message: "FileMData details loading..",
      data: fileMData
    });
  });
};
// Handle update fileMData info
exports.update = function(req, res) {
  FileMData.findById(req.params.fileMData_id, function(err, fileMData) {
    if (err) res.send(err);
    fileMData.name = req.body.name ? req.body.name : fileMData.name;
    fileMData.gender = req.body.gender;
    fileMData.email = req.body.email;
    fileMData.phone = req.body.phone;
    // save the fileMData and check for errors
    fileMData.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "FileMData Info updated",
        data: fileMData
      });
    });
  });
};
// Handle delete fileMData
exports.delete = function(req, res) {
  FileMData.remove(
    {
      _id: req.params.fileMData_id
    },
    function(err, fileMData) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "FileMData deleted"
      });
    }
  );
};
 */
