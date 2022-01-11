

 const myheading=document.getElementsByid("myheading");
 const mylist=document.getElementsByTagName("li");
     myheading.addEventListener("click",()=>{
 for (let i=0;i<mylist.length; i++){
 if(mylist[i].classname=="not orange"){
 }else{

     mylist[i].style.color="orange";
 }
 }

 });

  const list = document.getElementsByTagName("li");
      list.length;
      list[0];
      list[3];
      list[0].style.color="red";
     myheading.addEventListener("click",()=>{
         for (let i=0;i<mylist.length; i++){
         if(mylist[i].classname=="not orange"){
        mylist[i].style.color="orange";
}