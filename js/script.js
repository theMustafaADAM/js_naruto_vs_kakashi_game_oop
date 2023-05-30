function Character(name, strength, health){

    this.name = name;
    this.strength = strength;
    this.health = health;
    this.element = new UIElements(this.name);
}

function UIElements(name){
    
    this.attackBtn = document.querySelector(`#attck-${name}-Btn`);
    this.treatmBtn = document.querySelector(`#healt-${name}-Btn`);
    this.charAlive = document.querySelector(`#${name}-aliv`);
    this.progress = document.querySelector(`.${name}-health span`);

}

Character.prototype.attack = function(opponent) {

    if (opponent.health > 0) {
        
        opponent.health -= this.strength;
        opponent.element.progress.style.width = `${opponent.health}%`;
    
    } else {
        
        opponent.element.attackBtn.style.visibility = 'hidden';
        opponent.element.treatmBtn.style.visibility = 'hidden';
        opponent.element.charAlive.innerHTML = `${opponent.name} is Gone !!`;
    }
}

Character.prototype.status = function(){

    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`);
}

Character.prototype.treatment = function(){

    if (this.health < 100) this.health += this.strength;
    if (this.health > 100) this.health = 100;
    
    this.element.progress.style.width = `${this.health}%`;

}


let narutoo = new Character('narutoo', 9 ,100);
let kakashi = new Character('kakashi', 8 ,100);

narutoo.element.attackBtn.addEventListener('click', function () {

    narutoo.attack(kakashi);
    kakashi.status();
    
})

kakashi.element.attackBtn.addEventListener('click', function () {

    kakashi.attack(narutoo);
    narutoo.status();
    
})

narutoo.element.treatmBtn.addEventListener('click', function(){

    narutoo.treatment();
})

kakashi.element.treatmBtn.addEventListener('click', function(){

    kakashi.treatment();
})