import {CyclingData} from "./data.js"

const accordionCyclingModels = document.querySelector('#accordionBycycle')

class CyclingModels{
    static createBycicle(arr){
        let bycicles = arr
            .map(model=> new Bycicle(model))
            .map(model=>model.renderBycicle())
            .join('');
            
            accordionCyclingModels.innerHTML = bycicles;
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
            <strong>${this.name}</strong>
          </button>
          <img src="./images/${this.name.replace(/\s+/g, '')}".jpg width="20" height="20">
        </h2>
        <div id="collapse${slicedName.replace(/\s+/g, '')}" class="accordion-collapse collapse collapse" aria-labelledby="heading${slicedName.replace(/\s+/g, '')}" data-bs-parent="#accordionBycycle">
          <div class="accordion-body">
           ${this.data}
           </div>
        </div>
      </div>`
    }
}

CyclingModels.createBycicle(CyclingData)