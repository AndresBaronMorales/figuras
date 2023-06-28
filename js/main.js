import {collapse} from "./collapse_section.js"
import {addClassFigure,addClassMove,addClassAlone,addClassImg} from "./figure_draw.js"

document.addEventListener("DOMContentLoaded",()=>{
    collapse();

    document.addEventListener("click",e=>{
        if(e.target.matches(".bfs")){
            addClassFigure("figure-square")
        }

        if(e.target.matches(".bfr")){
            addClassFigure("figure-rectangle")
        }

        if(e.target.matches(".bfc")){
            addClassFigure("figure-circle")
        }

        if(e.target.matches(".bft")){
            addClassFigure("figure-triangle")
        }

        if(e.target.matches(".bfsp")){
            addClassFigure("figure-side-panel")
        }

        if(e.target.matches(".bfspm")){
            addClassAlone("figure-spin")
        }

        if(e.target.matches(".bfu")){
            addClassMove("figure-up")
        }

        if(e.target.matches(".bfd")){
            addClassMove("figure-down")
        }

        if(e.target.matches(".bfl")){
            addClassMove("figure-left")
        }

        if(e.target.matches(".bfrm")){
            addClassMove("figure-right")
        }

        if(e.target.matches(".bfh")){
            addClassAlone("figure-hide")
        }

        if(e.target.matches(".bfi")){
            addClassImg("figure-img-gif","figure-gradient")
        }

        if(e.target.matches(".bfdl")){
            addClassImg("figure-gradient","figure-img-gif")
        }
    })
})














