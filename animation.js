/**Author: PB666 */
setInterval(()=>{
    vh = document.documentElement.clientHeight
    vw = document.documentElement.clientWidth
},500)
window.onload=()=>{
    scrollTop = document.documentElement.scrollTop;
    for(var i=0;i<scroll_KEYFRAME_anis.length;i++){
        scroll_KEYFRAME_anis[i].update(scroll_KEYFRAME_anis[i],scrollTop)
    }
    /*滚动页面动画*/
    window.onscroll = ()=>{
        scrollTop = document.documentElement.scrollTop;
        for(var i=0;i<scroll_KEYFRAME_anis.length;i++){
            scroll_KEYFRAME_anis[i].update(scroll_KEYFRAME_anis[i],scrollTop)
        }
    }
    
    /*时间流逝动画*/
    var t = setInterval(()=>{
        for(var i=0;i<timer_KEYFRAME_anis.length;i++){
            timer_KEYFRAME_anis[i].update(timer_KEYFRAME_anis[i],timer)
        }

        timer+=0.01
        if(timer>8){
            clearInterval(t)
        }
    },10)
}
window.onresize=()=>{
    vh = document.documentElement.clientHeight
    vw = document.documentElement.clientWidth
    scrollTop = document.documentElement.scrollTop;
    for(var i=0;i<scroll_KEYFRAME_anis.length;i++){
        scroll_KEYFRAME_anis[i].update(scroll_KEYFRAME_anis[i],scrollTop)
    }
    console.log('change size:(%d,%d)',vw,vh);
}
function lerp(a,amax,lerpA,lerpB){
    var t = a/amax
    return (1-t)*lerpA+t*lerpB
}
function clamp(a,min,max){
    return a<min?min:a>max?max:a
}
var timer = 0.0 //s
var scrollTop = 0
function lerpable(item){
    if(typeof(item)=='number'){
        return true
    }
    return false
}
var scroll_KEYFRAME_anis = []
var timer_KEYFRAME_anis = []

var vh = document.documentElement.clientHeight
var vw = document.documentElement.clientWidth
let _rem = vw / 16
console.log(_rem);
function create_LINEAR_ANIMATION(callback,pre='',suf='',keyframs){
    var obj = new Object
    obj.RATION = 0
    obj.KEYFRAMEs = keyframs
    obj.callback = callback
    obj.pre = pre
    obj.suf = suf
    obj.intervalI = 0
    obj.value = 0
    obj.element = null
    obj.get = (o,r)=>{
        if(o.KEYFRAMEs.length==1){
            o.intervalI = 0
            // o.value = o.KEYFRAMEs[0].y
            return o.KEYFRAMEs[0].y
        }
        if(r<o.KEYFRAMEs[0].r){
            o.intervalI = 0
            // o.value = o.KEYFRAMEs[0].y
            return o.KEYFRAMEs[0].y
        }
        if(r>=o.KEYFRAMEs[o.KEYFRAMEs.length-1].r){
            o.intervalI = o.KEYFRAMEs.length-1
            // o.value = o.KEYFRAMEs[o.KEYFRAMEs.length-1].y
            return o.KEYFRAMEs[o.KEYFRAMEs.length-1].y
        }
        var intervalI = -1
        for(var i = 0;i<o.KEYFRAMEs.length-1;i++){
            if(r>=o.KEYFRAMEs[i].r&&r<o.KEYFRAMEs[i+1].r){
                intervalI = i
                break
            }
        }
        o.intervalI = intervalI
        var b
        if(lerpable(o.KEYFRAMEs[intervalI].y)){
            b = lerp(r-o.KEYFRAMEs[intervalI].r,
                            o.KEYFRAMEs[intervalI+1].r-o.KEYFRAMEs[intervalI].r,
                            o.KEYFRAMEs[intervalI].y,
                            o.KEYFRAMEs[intervalI+1].y
            )
        }else{
            b = o.KEYFRAMEs[intervalI].y
        }
        // o.value = b
        return b
    }
    obj.update = (o,r)=>{
        var b=o.get(o,r)
        var a = pre+b+suf
        o.callback(o.element,a,b,o)
    }
    return obj
}