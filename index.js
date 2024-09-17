


const display= document.getElementById("display")


clearDis=()=>{
   display.value="0";
}
dot=()=>{
    let op=0
    let flag=0
    for(let i=display.value.length-1;i>=0;i--){
        value=display.value.charAt(i)
        if(value=="*"||value=="/"||value=="+"||value=="-"){
         op=i
        for(let j =display.value.length-1;j>op;j--){
         if(display.value.charAt(j)=="."){
            flag=1
            break
         }
        }
    
       if(flag==0){
        display.value+="."
        }
    }
   }
    if(op==0){
       for(let i=display.value.length-1;i>0;i--) {
        if(display.value.charAt(i)=="."){
            flag=1
        }
       }
       if(flag==0){
         display.value+="."
       }
    }
    }
    left=()=>{
        if(display.value=="0"){
            display.value="("
        }
        else{
        display.value+="("}

    }
   right=()=>{
    if(display.value=="0"){
        display.value=")"
    }
    else{
    display.value+=")"}

    }

ziro=()=>{
    if(display.value=="0"){
        display.value="0"
    }
    else{
    display.value+="0"}
}
one=()=>{
    if(display.value=="0"){
        display.value="1"
    }
    else{
    display.value+="1"}
}
two=()=>{
    if(display.value=="0"){
        display.value="2"
    }
    else{
    display.value+="2"}
}
three=()=>{
    if(display.value=="0"){
        display.value="3"
    }
    else{
    display.value+="3"}
}
four=()=>{
    if(display.value=="0"){
        display.value="4"
    }
    else{
    display.value+="4"}
}
five=()=>{
    if(display.value=="0"){
        display.value="5"
    }
    else{
    display.value+="5"}
}
six=()=>{
    if(display.value=="0"){
        display.value="6"
    }
    else{
    display.value+="6"}
}
seven=()=>{
    if(display.value=="0"){
        display.value="7"
    }
    else{
    display.value+="7"}
}
eight=()=>{
    if(display.value=="0"){
        display.value="8"
    }
    else{
    display.value+="8"}
}
nine=()=>{
    if(display.value=="0"){
        display.value="9"
    }
    else{
    display.value+="9"}
}
delete1=()=>{
    if(display.value=="0"){
        display.value="0"
    }
    else{
  display.value=display.value.substring(0,display.value.length-1)}
}
decrease=()=>{
    let lastChar = display.value.charAt(display.value.length - 1)
    if(lastChar!="-"){
        if(lastChar=="+"||lastChar=="*"||lastChar=="/"){
            display.value = display.value.slice(0, -1) + "-"
        }
        else{
            display.value+="-"
        }
      }
}

increase=()=>{
    let lastChar = display.value.charAt(display.value.length - 1)
    if(lastChar!="+"){

        if(lastChar=="-"||lastChar=="*"||lastChar=="/"){
          display.value = display.value.slice(0, -1) + "+"
        }
        else{
            display.value+="+"
        }
      }
}


multiple=()=>{
    let lastChar = display.value.charAt(display.value.length - 1)
    if(lastChar!="*"){

        if(lastChar=="+"||lastChar=="-"||lastChar=="/"){
           display.value = display.value.slice(0, -1) + "*"
        }
        else{
            display.value+="*"
        }
      }
}


divide=()=>{
    let lastChar = display.value.charAt(display.value.length - 1)
    if(lastChar!="/"){

        if(lastChar=="+"||lastChar=="-"||lastChar=="*"){
          display.value = display.value.slice(0, -1) + "/"
        }
        else{
            display.value+="/"
        }
      }
}


cut=(value)=>{
    let nextNum=0
    let  resArr=[]
    let  brackets=0
    for(let i=0;i<value.length;i++){
        if(value.charAt(i)==="("){
            brackets=i;
            let count=1;
            i++;
            while(count > 0 && i < value.length){
                if(value.charAt(i)==="(") {count++;}
                if(value.charAt(i)===")"){ count--;}
                i++;
            }
         let help=value.slice(brackets + 1,i - 1)
         
         let huh= cut(help)
         
         let m=mulFirst(huh)
         let n=plSeconed(m)
    
          resArr.push(String(n))
          resArr.push(String(value.charAt(i)))
          if(value.charAt(i+1)==="("){
            nextNum=i+2
          }
         else {nextNum=i+1}
        
        }
      
       else if(value.charAt(i)==="-"||value.charAt(i)==="+"||value.charAt(i)==="*"||value.charAt(i)==="/"){

            resArr.push(String(value.slice(nextNum,i)))
            resArr.push(String(value.charAt(i)))
            if(value.charAt(i+1)==="("){
                nextNum=i+2
              }
             else {nextNum=i+1}
        }
    }
    if(nextNum<value.length){
    resArr.push(String(value.slice(nextNum,value.length)))
    }
     return resArr
    }
   


    
  mulFirst=(resArr)=>{
    let newArr=[]
    let pushArr;
    for(let i=0;i<resArr.length;i++){
        if(resArr[i+1]==="*"||resArr[i]==="*"||resArr[i-1]==="*"||
            resArr[i+1]==="/"||resArr[i]==="/"||resArr[i-1]==="/"){
        if(resArr[i]==="*"){
            if(resArr[i-2]==="*"||resArr[i-2]==="/"){
              pushArr=Number(newArr[newArr.length-1])*Number(resArr[i+1])
                newArr[newArr.length-1]=String(pushArr)
            } else{
            pushArr=Number(resArr[i-1])*Number(resArr[i+1])
            newArr.push(String(pushArr))
            }
        }else if(resArr[i]==="/"){
            if(resArr[i-2]==="*"||resArr[i-2]==="/"){
                pushArr =Number(newArr[newArr.length-1])/Number(resArr[i+1])
                newArr[newArr.length-1]=String(pushArr)
            }else{
            pushArr=Number(resArr[i-1])/Number(resArr[i+1])
            newArr.push(String(pushArr))
         }
        }
    }
        else{
            newArr.push(String(resArr[i]))
        } 
    }
    
    return newArr
  }
   

  plSeconed=(newArr)=>{
    let res=String((newArr[0]));
    for(let i=0;i<newArr.length;i++){
     if(newArr[i]==="+"){
      res=String( Number(res)+Number(newArr[i+1]))
     }
     else if(newArr[i]==="-"){
      res=String( Number(res)-Number(newArr[i+1]))
       }
  }
     return res
  }
  
    
 cal=()=>{
   let a=cut(display.value)
   let b=mulFirst(a)
   let res=plSeconed(b)
  display.value=res
 }



res=()=>{
  cal()
}


document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            if (display.value === "0" && event.key !== '0') {
                display.value = event.key;
            } else {
                display.value += event.key;
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            let lastChar = display.value.charAt(display.value.length - 1);
            if (["+", "-", "*", "/"].includes(lastChar)) {
                display.value = display.value.slice(0, -1) + event.key;
            } else {
                display.value += event.key;
            }
            break;
        case '.':
            dot();
            break;
        case 'Enter':
            cal();
            break;
        case 'Backspace':
            delete1();
            break;
        case 'Escape':
            clearDis();
            break;
        case '(': case ')':
            if (event.key === '(') {
                left();
            } else if (event.key === ')') {
                right();
            }
            break;
    }
});