//todo js負責 產生150個 [隨機大小/位置/顏色] 的方塊
//todo 並且設定5秒後消失
//*但方塊目前都在 原地不動(需靠css讓方塊移動)

//!設定 顏色陣列
const colors = [
    "#2196f3",
    "#e91e63",
    "#ffeb3b",
    "#74ff1d"
]

//! 產生 隨機大小/位置/顏色方塊
function createSquare(){
    const section = document.querySelector("section")
    const square = document.createElement("span")

    var size = Math.random()*50

    square.style.width = 20 + size +"px"
    square.style.height = 20 + size +"px"

    square.style.top = Math.random() * innerHeight + "px"
    square.style.left = Math.random() * innerWidth + "px"

    section.appendChild(square)

    //!隨機 套用矩陣顏色
    const bg = colors[Math.floor(Math.random() * colors.length)]
    square.style.background = bg

    //!設定 方塊消失時間 5s
    setTimeout(() =>{
        square.remove()
    },5000)
}

//! 產生出 共150個 方塊
setInterval(createSquare, 150)