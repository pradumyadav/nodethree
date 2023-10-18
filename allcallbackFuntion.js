const { data1, data2, data3, data4 } = require("./alldata")



        const first= (req,res)=>{
             return   res.send(data1)
        }
        const second= (req,res)=>{
            return   res.send(data2)
       }
       const third= (req,res)=>{
        return   res.send(data3)
        }
        const four= (req,res)=>{
        return   res.send(data4)
        }
      


module.exports ={first,second,third,four}