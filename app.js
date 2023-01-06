const express = require('express')
var fs = require('fs');
var cors = require('cors')
var TronWeb = require('tronweb')

const app = express()


const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": 'your api key' },
    privateKey: 'fed5b06fafe7ae951928ca5e5a7e8fbbacfe4eff334e687452e997106a3a46c7'
})

app.use(cors())


var sameNumber = 5

app.listen(1111,function(params) {
    setInterval(function(){
        tronWeb.createAccount()
        .then(res=>{
            var issame = false;
            var wh = res.address.base58[33]
            if (res.address.base58[32]==wh && res.address.base58[31]==wh && res.address.base58[30]==wh && res.address.base58[29]==wh) {
                console.log(res);
                console.log(new Date());
                
            }
            if (res.address.base58[32]==wh && res.address.base58[31]==wh && res.address.base58[30]==wh) {
                console.log(res);
                console.log(new Date());
                
            }
            return
            for (let index = 0; index < sameNumber; index++) {
                if (res.address.base58[32-index]==res.address.base58[33]) {
                    issame = true
                    console.log(res.address.base58[32-index],res.address.base58[33],33-index);
                    
                }else{
                    issame = false
                }
                
            }
            if (issame) {
                console.log(res);
                console.log(new Date());
                
            }
        })
    },0.1)
})