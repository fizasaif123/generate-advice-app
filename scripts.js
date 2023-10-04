const btn=document.querySelector('button');
const para=document.querySelector(".id");
const ad=document.querySelector("#advice");

const addNewAdvice= async()=>{
    const adviceText= await myAdvice();
  


para.innerHTML=`ADVICE #  ${adviceText[0]}`;
ad.innerHTML=`"  ${adviceText[1]} "`;

  



}














const myAdvice= async()=>{

    try{
      

        const res=await axios.get("https://api.adviceslip.com/advice"); //axios always return a promise 
    
       
        const arr=[res.data.slip.id,res.data.slip.advice];
            
                return arr


    
    }
    catch(e){
        return("No Advices , try again")
    }


}

btn.addEventListener('click',addNewAdvice);


