var TronWeb = require('tronweb')
const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": '123' },
    privateKey: 'fed5b06fafe7ae951928ca5e5a7e8fbbacfe4eff334e687452e997106a3a46c7'
})
setInterval(function() {
    tronWeb.createAccount()
    .then(res=>{
        var wh = res.address.base58[33]
        if (res.address.base58[32]==wh && res.address.base58[31]==wh && res.address.base58[30]==wh) { //生成4位相同尾号
            console.log(res);
            console.log(new Date());
            
        }
        if (res.address.base58[32]==wh && res.address.base58[31]==wh && res.address.base58[30]==wh && res.address.base58[29]==wh) { //生成5位相同尾号
            console.log(res);
            console.log(new Date());
            
        }

        if (res.address.base58[32]==wh && res.address.base58[31]==wh && res.address.base58[30]==wh && res.address.base58[29]==wh && res.address.base58[28]==wh) { //生成6位相同尾号
            console.log(res);
            console.log(new Date());
        }
    })
},0.1)
