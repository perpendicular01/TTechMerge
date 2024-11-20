const connection = require('./dbConnection.js');

const { scrapeStartechMoni } = require('./scrapeMonitor.js');
const { scrapeTechlandMoni } = require('./scrapeMonitor.js');
const { scrapePcHouseMoni } = require('./scrapeMonitor.js');
const { scrapeStartechGPU } = require('./scrapeGPU.js');
const { scrapeTechlandGPU } = require('./scrapeGPU.js');
const { scrapePcHouseGPU } = require('./scrapeGPU.js');

exports.fetchMonitorData=async(req,res)=>{
    try{
        // scrapeStartechMoni();
        // scrapeTechlandMoni();
        // scrapePcHouseMoni();
        let [rows]=await connection.execute('SELECT * FROM monitor_shop INNER JOIN monitor_details ON monitor_shop.productName = monitor_details.productName;');
        res.json({success:true,monitors:rows});
    }catch(error){
        console.error(error);
        res.json({success:false});
    }
    
}
