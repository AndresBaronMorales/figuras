export const collapse = ()=>{
    const containerAccordion = document.querySelectorAll(".section-figure")

    containerAccordion.forEach((item,index)=>{
        let header = item.querySelector(".container-selection")
        header.addEventListener("click",()=>{
            item.classList.toggle("section-figure--close")

            if(item.classList.contains("section-figure--close")){
                item.querySelector("i").classList.replace("fa-minus","fa-plus")
            }else{
                item.querySelector("i").classList.replace("fa-plus","fa-minus")
            }
            removeOpen(index);
        })
    })
}

const removeOpen = (indexFind)=>{
    const containerAccordion = document.querySelectorAll(".section-figure")

    containerAccordion.forEach((item,index)=>{
        if(indexFind != index){
            if(! item.classList.contains("section-figure--close")){
                item.classList.add("section-figure--close")
                item.querySelector("i").classList.replace("fa-minus","fa-plus")
            }
        }
    })
}