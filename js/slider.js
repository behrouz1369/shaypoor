class Slider{
    slideIndex =1;
    x = 0;

    constructor(options){
        this.options = options;

        this.intialStuff();

        this.btnNextAndPrev();

        this.showSlide(this.slideIndex,this.x);



    }

    intialStuff(){
        let { el : sliderElement , slideClass} = this.options;

        if(!sliderElement) throw Error('Error is Error');

        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass)); 
    }

    btnNextAndPrev(){
        let{el:sliderElement} = this.options;
        sliderElement.insertAdjacentHTML( "beforeend", `
        <div class="nav-btn">
            <div class="btn-prev ml-auto btn_active">
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="btn-next mr-auto btn_active">
                <i class="fa fa-angle-left"></i>
            </div>
            
            
        </div> 
        `);

        sliderElement.querySelector(".btn-next").addEventListener("click" , ()=>{this.nextAndPrevSlide(this.slideIndex+=1,this.x+=215)});
        sliderElement.querySelector(".btn-prev").addEventListener("click" , ()=>{this.nextAndPrevSlide(this.slideIndex-=1,this.x-=215)});
    }

    nextAndPrevSlide=(n,x) =>{
        this.showSlide(n,x);
       
    }
    showSlide(n,x){
        let{el:sliderElement} = this.options;


        if(n >= this.sliders.length - 3){
            this.sliders.forEach(e=>{
                e.style.transform=`translateX(${x}px)`
            });
            document.querySelector('.btn-next').classList.remove("btn_active");
                    
            
            
        }else if(n <= 1){
            this.sliders.forEach(e=>{
                e.style.transform=`translateX(${x}px)`
            });
            document.querySelector(".btn-prev").classList.remove("btn_active");
           
        } else{

            document.querySelector(".btn-next").classList.add("btn_active");
            document.querySelector(".btn-prev").classList.add("btn_active");
            this.sliders.forEach(e=>{
                e.style.transform=`translateX(${x}px)`
            });
            
        }


    }
}



