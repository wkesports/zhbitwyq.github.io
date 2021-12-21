/**
 * 
 * @param {Map} e 包含商品名称为key,{类型,单价，数量} Map为value的 
 */
function makeInventory(e){
    new Map().keys
}

var gpt = {
    肠粉: "images/cf.jpg",
    叉烧包: "images/csb.jpg",
    蛋挞: "images/dt.jpg",
    流黄包: "images/nhb.jpeg",
    糯米鸡: "images/nmj.jpg",
    水晶饺: "images/sjj.jpg",
    烧麦: "images/sm.jpg",
    蒸排骨: "images/zpg.jpg",
    豉汁鸡爪: "images/zsjz.jpg",
    艇仔粥: "images/tzz.jpg",
    云吞面: "images/ytm.jpg",
    马蹄糕: "images/mtg.jpg",
    炸春卷: "images/zcj.jpg",
    糯米糍: "images/nmz.png",
    椰汁红豆糕: "images/yzhdg.webp",
    凤爪: "images/fz.jpg",
    金钱肚: "images/jqd.jpg",
}

var dpt = {
    金银花茶: "images/jyhc.webp",
    五花茶: "images/whc.webp",
    菊花茶: "images/jhc.jpg",
    红茶: "images/hc.jpg",
    橙汁: "images/cz.webp",
    椰汁: "images/yz.webp",
    雪碧: "images/xb.jpg",
    可乐: "images/kl.jpg",

}

/**
 * 
 * @param {Node} U 面板1
 * @param {Node} K 面板2
 */
function makePurchases(U,K){
    _makePur(U,1)
    _makePur(K,2)
}
function _makePur(U,n){
    var a
    console.log(n);
    if(n==1){
        a = Object.keys(gpt)
    }else if(n==2){
        a = Object.keys(dpt)
    }
    console.log(a);
    for (var i = 0;i<a.length;i++){
        var name = a[i]
        var src
        if(n==1) src = gpt[a[i]]
        else src = dpt[a[i]]
        var e1 = document.createElement("div")
        e1.className = "item"
        var e2 = document.createElement("img")
        e2.src = src
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
}