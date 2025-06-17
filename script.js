let bt=document.getElementById("btn")
let upper=0
let lower=0
let digit=0
let special=0
let space=0
let word=1

let a=document.getElementById("upper")
let b=document.getElementById("lower")
let c=document.getElementById("no")
let d=document.getElementById("sp")
let e=document.getElementById("word")
let f=document.getElementById("space")
let g=document.getElementById("total")
    
bt.addEventListener('click',function()
{
    let t=document.getElementById("text").value

    let count=t.length
    g.textContent=`Total ${count}`
        for( i=0;i<t.length;i++)
        {
           
            let asc=t.charCodeAt(i)

            if(asc>=65 && asc<=90)
                {
                    upper++;
                    
                }
                a.textContent=`Upper :${upper}`
                
            if(asc>=97 && asc<=122)
                {
                    lower++;
                }
                b.textContent=`Lower :${lower}`

            if(asc>=48 && asc<=57)
                {
                    digit++;
                }
                c.textContent=`Digit :${digit}`   

            if((asc>=33 && asc<=47)|| asc>=58 && asc<=64 || asc>=91 && asc<=96 || asc==126)
                {
                    special++;
                }
                d.textContent=`Special :${special}`

            if(asc==32)
            {
                space++
            }
            f.textContent=`Space :${space}`

            if(asc==32)
            {
                word++
            }
            e.textContent=`Word :${word}`
        }
        
upper=0
lower=0
digit=0
special=0
space=0
word=1
        
})
 