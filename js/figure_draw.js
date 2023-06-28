export const addClassFigure = (className)=>{
    const figureDraw = document.getElementById("figure-draw")
    const classListFigure = ["figure-square","figure-rectangle","figure-circle","figure-triangle","figure-side-panel"]

    classListFigure.forEach((classItem)=>{
        if(figureDraw.classList.contains(`${classItem}`) && classItem !== className){
            figureDraw.classList.remove(`${classItem}`)
            figureDraw.classList.remove("figure-border")
        }
    })

    figureDraw.classList.toggle("figure-border")
    figureDraw.classList.toggle(`${className}`)
}

export const addClassMove = (className)=>{
    const figureDraw = document.getElementById("figure-draw")
    const classListFigureMove = ["figure-up","figure-down","figure-left","figure-right"]

    classListFigureMove.forEach((classItem)=>{
        if(figureDraw.classList.contains(`${classItem}`) && classItem !== className){
            figureDraw.classList.remove(`${classItem}`)
        }
    })
    figureDraw.classList.toggle(`${className}`)
}

export const addClassAlone = (className)=>{
    document.getElementById("figure-draw").classList.toggle(`${className}`)
}

export const addClassImg = (classAdd,classRemove)=>{
    const figureDraw = document.getElementById("figure-draw")
    figureDraw.classList.remove(classRemove)
    figureDraw.classList.toggle(classAdd)
}