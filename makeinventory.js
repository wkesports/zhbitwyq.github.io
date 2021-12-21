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
    豉汁鸡爪: "images/zsjz.jpg"
}

var dpt = {

}

/**
 * 
 * @param {Node} U 面板1
 * @param {Node} K 面板2
 */
function makePurchases(U,K){
    var a = Object.keys(gpt)
    for (var i = 0;i<a.length;i++){
        var name = a[i]
        var src = gpt[a[i]]
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