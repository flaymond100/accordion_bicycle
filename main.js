import {CyclingData} from "./data.js"

const accordionCyclingModels = document.querySelector('#accordionBycycle');
const pipelineCyclingModels = document.querySelector('#renderBycicle');


class CyclingModels{
    static createBycicle(arr){
        let bycicles = arr
            .map(model=> new Bycicle(model))

        let byciclesAccordion=bycicles.map(model=>model.renderBycicle())
            .join('');
            
            bycicles.map(bicycle=>bicycle.renderPipeline());

            accordionCyclingModels.innerHTML = byciclesAccordion;
    }
}

class Bycicle{
    constructor(model){
        this.createBycicle(model);
    }

    createBycicle(model){
        for (let key in model){
            this[key] = model[key]
        }
    }

    renderBycicle(){
        let name = this.name;
        let slicedName = name.slice(0,15);
        return `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${slicedName.replace(/\s+/g, '')}">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${slicedName.replace(/\s+/g, '')}" aria-expanded="false" aria-controls="collapse${slicedName.replace(/\s+/g, '')}">
         <img class="accordion_picture" src="./images/${this.name.replace(/\s+/g, '')}.jpg" > <strong>${this.name}</strong>
          </button>
          
        </h2>
        <div id="collapse${slicedName.replace(/\s+/g, '')}" class="accordion-collapse collapse collapse" aria-labelledby="heading${slicedName.replace(/\s+/g, '')}" data-bs-parent="#accordionBycycle">
          <div class="accordion-body">
           ${this.data}
           </div>
        </div>
      </div>`
    }

    renderPipeline(){ 
        let icon = document.createElement('img');
        
        icon.id = `render__${this.name.replace(/\s+/g, '')}`;
        icon.src = `images/${this.name.replace(/\s+/g, '')}.jpg`;
        icon.alt = this.name;
        icon.width = 50;

        icon.setAttribute('data-bs-toggle', 'tooltip');

        icon.addEventListener('click',()=>{
            let name = this.name;
            let slicedName = name.slice(0,15);

            let btn = document.querySelector(`button[aria-controls="collapse${slicedName.replace(/\s+/g, '')}"`);
            btn.click();
        })

        pipelineCyclingModels.append(icon)

    }
}





CyclingModels.createBycicle(CyclingData);
// PipelineModels.createPipeline(CyclingData)