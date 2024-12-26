let appy = ["olma", "udum", "bananana", "glos",]
alert(`boshlanisha airting uzunligini; ${appy.length}`)
console.log(appy)
let result = confirm(`arayingizdan nimadur nimadur`)
if (result){
appy.pop()
console.log(appy)
}else{
    console.log(appy)
    alert(`arrayyi uzuni; ${appy.length}`)
}