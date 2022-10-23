const xl = require('excel4node');
const path = require('path');

//convert json to excel
export const create = (req, res) => {
    //book sheet
    var wb = new xl.Workbook();
    //worksheet
    var ws = wb.addWorksheet("informe");
    //style
    var style = wb.createStyle({
      font: {
        color: "#040404",
        size: 12,
      },
    });
    //style green
    var greenS = wb.createStyle({
      font: {
        color: "#388813",
        size: 12,
      },
    });
    //array
    var items = req.body.items;
    var columns= Object.getOwnPropertyNames(items[0]);
    console.log(columns);
    for (let cIndex = 0; cIndex < columns.length; cIndex++) {
      ws.cell(1, cIndex+1).string(columns[cIndex]).style(greenS);
    }
  
    for (let rIndex = 0; rIndex < items.length; rIndex++) {
      var item=Object.values(items[rIndex]);
      for (let cIndex = 0; cIndex < columns.length; cIndex++) {
          ws.cell(rIndex+2, cIndex+1).string(item[cIndex]).style(style);
      }
    }
  
    ws.column(1).setWidth(30);
    ws.column(2).setWidth(10);
  
    console.log("->Excel generado!!!");
    const pathExcel = path.join("./src/public", "archives", "boris.xlsx");
  
    wb.write(pathExcel, function (err, stats) {
      if (err) {
        console.log(err);
      } else {
        function downloadFile() {
          res.download(pathExcel);
        }
        downloadFile();
        return false;
      }
    });
  
    res.send("thanks!!")
    
  };
  
  export const get = (req, res) => {
      const pathExcel = path.join('./src/public/', "archives", "boris.xlsx");
      res.download(pathExcel);    
  };