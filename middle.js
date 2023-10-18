

        function middle(req,res,next){
                const Age= 17;
                if(Age>18){
                    next()
                }
                else{
                    res.send("Wrong Input")
                }
        }

        module.exports= middle ;