class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getDogImageHtml(){
        return `<img class="dog-img" src="./${this.avatar}" alt=""></img>`
    }

    getDogHtml(){
        const {name, age, bio} = this;
        const dogImage = this.getDogImageHtml()

        return `
            ${dogImage}
            <div id="dog-bio" class="dog-bio">
                <h3 class="dog-name">${name}, ${age}</h3>
                <p class="dog-phrase">${bio}</p>
            </div>
            `
    }
}

export default Dog