/**
 * 
 * @param {Map} e 包含商品名称为key,{类型,单价，数量} Map为value的 
 */
function makeInventory(e){
    new Map().keys
}

var gpt = {
    "0": ["肠粉","images/cf.jpg"],
    "1": ["叉烧包", "images/csb.jpg"],
    "2": ["蛋挞", "images/dt.jpg"],
    "3": ["流黄包", "images/nhb.jpeg"],
    "4": ["糯米鸡", "images/nmj.jpg"],
    "5": ["水晶饺", "images/sjj.jpg"],
    "6": ["烧麦", "images/sm.jpg"],
    "7": ["蒸排骨", "images/zpg.jpg"],
    "8": ["豉汁鸡爪", "images/zsjz.jpg"],
    "9": ["艇仔粥", "images/tzz.jpg"],
    "10": ["云吞面", "images/ytm.jpg"],
    "11": ["马蹄糕", "images/mtg.jpg"],
    "12": ["炸春卷", "images/zcj.jpg"],
    "13": ["糯米糍", "images/nmz.png"],
    "14": ["椰汁红豆糕", "images/yzhdg.webp"],
    "15": ["凤爪", "images/fz.jpg"],
    "16": ["金钱肚", "images/jqd.jpg"],

}

var dpt = {
    "17": ["金银花茶", "images/jyhc.webp"],
    "18": ["五花茶", "images/whc.webp"],
    "19": ["菊花茶", "images/jhc.jpg"],
    "20": ["红茶", "images/hc.jpg"],
    "21": ["橙汁", "images/cz.webp"],
    "22": ["椰汁", "images/yz.webp"],
    "23": ["雪碧", "images/xb.jpg"],
    "24": ["可乐", "images/kl.jpg"],

}

/**
 * 
 * @param {Node} U 面板1
 * @param {Node} K 面板2
 */
function makePurchases(U,K){
    var e21 = _makePur(U,1)
    var e22 = _makePur(K,2)

    for(let l of e22){
        e21.set(l[0],l[1])
    }
    return e21
}
function _makePur(U,n){
    var tb = n==1?gpt:dpt
    var a
    if(n==1){
        a = Object.keys(gpt)
    }else if(n==2){
        a = Object.keys(dpt)
    }
    var e2MapID = new Map()
    for (var i = 0;i<a.length;i++){
        var name = tb[a[i]][0]
        var mysrc = tb[a[i]][1]
        var e1 = document.createElement("div")
        e1.className = "item"
        var e2 = document.createElement("img")
        e2.src = mysrc
        e2MapID.set(e2,a[i])
        var e3 = document.createElement("h4")
        e3.innerHTML = name
        var e4 = document.createElement("input")
        e4.type = "number"
        e4.placeholder = "0"

        e1.append(e2)
        e1.append(e3)
        e1.append(e4)
        U.append(e1)
    }
    return e2MapID
}
function findID(id){
    if(id<=16){
        return gpt[id]
    }
    return dpt[id]
}