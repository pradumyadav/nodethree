const controller = require("./controller");


        const express = require("express")


        const server =express() ;

        function middle1(req,res,next){
                let Age= 18 ;
                if(Age>=17){
                    next()
                }
                else{
                    res.send("Wrong Input")
                }
        }

            server.use(middle1)

        server.use("/api",controller)


        server.listen(4003,()=>{
            try{
                console.log("Running on Port no 4003")
            }
            catch(err){
                console.log("ERROR...")
            }
        })