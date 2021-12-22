function getParams(){
    var kvs = new Map()
    try{
        var l = window.location.href.split("?")[1]
        var l1 = l.split("&")
        for(var i = 0;i<l1.length;i++){
            var n = new Object()
            n.key = l1[i].split("=")[0]
            n.value = l1[i].split("=")[1]
            kvs[n.key] = n.value
        }
    }catch(error){

    }
    return kvs
}
var kvs = getParams()