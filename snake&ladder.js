let snake=[{mouth:96,tail:2},{mouth:70,tail:26},{mouth:46,tail:16},{mouth:15,tail:1},{mouth:99,tail:16},{mouth:80,tail:24},{mouth:64,tail:33},{mouth:84,tail:20},{mouth:35,tail:11}]
let lader=[{start:5,end:55},{start:12,end:69},{start:25,end:95},{start:4,end:45},{start:59,end:85},{start:34,end:71},{start:66,end:87},{start:3,end:45},{start:13,end:31}]
 let score=0
 let total1=0
 let total2=0
 let total3=0
 let total4=0
function play(){
    let a=Math.floor(Math.random()*6)+1
    if(score==0){
        document.getElementById("player").value=document.getElementById("p2").value
        document.getElementById("label").value=document.getElementById("p1").value+"="+a
            if(total1+a<=100){
                total1=total1+a
                for(let i=0;i<snake.length;i++){
                    if(total1==snake[i].mouth)
                    {
                        total1=snake[i].tail
                    }
                }
                for(let i=0;i<lader.length;i++){
                    if(total1==lader[i].start){
                        total1=lader[i].end
                        
                    }
                }
                document.getElementById("1").value=total1
            }
            if(total1==100){
                document.getElementById("game").hidden=true
                document.getElementById("winner").hidden=false
                document.getElementById("win").innerText=document.getElementById("p1").value
            }
        
    }
    else if(score==1){
        document.getElementById("player").value=document.getElementById("p3").value
        document.getElementById("label").value=document.getElementById("p2").value+"="+a

        if(total2+a<=100){
            total2=total2+a
            for(let i=0;i<snake.length;i++){
                if(total2==snake[i].mouth)
                {
                    total2=snake[i].tail
                }
            }
            for(let i=0;i<lader.length;i++){
                if(total2==lader[i].start){
                    total2=lader[i].end
                }
            }
            document.getElementById("2").value=total2
        }
        if(total2==100){
            document.getElementById("game").hidden=true
            document.getElementById("winner").hidden=false
            document.getElementById("win").innerText=document.getElementById("p2").value
        }
    
    }
    else if(score==2){
        document.getElementById("player").value=document.getElementById("p4").value
        document.getElementById("label").value=document.getElementById("p3").value+"="+a

        if(total3+a<=100){
            total3=total3+a
            for(let i=0;i<snake.length;i++){
                if(total3==snake[i].mouth)
                {
                    total3=snake[i].tail
                }
            }
            for(let i=0;i<lader.length;i++){
                if(total3==lader[i].start){
                    total3=lader[i].end
                }
            }
            document.getElementById("3").value=total3
        }
        if(total3==100){
            document.getElementById("game").hidden=true
            document.getElementById("winner").hidden=false
            document.getElementById("win").innerText=document.getElementById("p3").value
        }
    
    }
    else{
        document.getElementById("player").value=document.getElementById("p1").value
        document.getElementById("label").value=document.getElementById("p4").value+"="+a

        if(total4+a<=100){
            total4=total4+a
            for(let i=0;i<snake.length;i++){
                if(total4==snake[i].mouth)
                {
                    total4=snake[i].tail
                }
            }
            for(let i=0;i<lader.length;i++){
                if(total4==lader[i].start){
                    total4=lader[i].end
                }
            }
            document.getElementById("4").value=total4
        }
        if(total4==100){
            document.getElementById("game").hidden=true
            document.getElementById("winner").hidden=false
            document.getElementById("win").innerText=document.getElementById("p4").value
        }
    
        score=-1
    }
    score=score+1
    document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/diceroll.gif'height=200px width=200px style='margin-right:150px'>"
    if(a==1){
        setTimeout(()=>{document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/dice1.png'height=50px width=50px>"},1000)
        }else if(a==2){
            setTimeout(()=>{document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/dice2.png'height=50px width=50px>"},1000)
        }else if(a==3){
            setTimeout(()=>{document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/dice3.png'height=50px width=50px>"},1000)
        }else if(a==4){
            setTimeout(()=>{document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/dice4.png'height=50px width=50px>"},1000)
        }else if(a==5){
            setTimeout(()=>{document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/dice5.png'height=50px width=50px>"},1000)
        }else{
            setTimeout(()=>{document.getElementById("span").innerHTML="<img src='./jvm/DiceRoll-main/dice6.png'height=50px width=50px>"},1000)
        }
    // if(total1>=100||total2>=100||total3>=100||total4>=100){
    //     document.getElementById("game").hidden=true
    //     document.getElementById("winner").hidden=false
    //     document.getElementById('win').innerText="congratulations"
    // }
    
    
}
