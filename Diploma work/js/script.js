import {
    categories,
    items
} from './data.js'




let projects__inner1 = document.querySelector(".projects__inner")
console.log(projects__inner1);
let inter = document.querySelector('.inter')
let architect = document.querySelector('.arch')
let build = document.querySelector('.build')
let repair = document.querySelector('.repear')

let top = document.querySelector('.top')
let top1 = top.children

inter.onclick = () => {
    
    inter.classList.toggle('active')
    
    let reload = (parametr) => {
        projects__inner1.innerHTML = ""
        for (let i of categories) {
            for (let j of items) {
                if (i.id == 1 && j.categorie_id == 1) {
                    let div = document.createElement('div')
                    let span = document.createElement('span')
                    div.classList.add('image')
                    div.style.backgroundImage = `url(${j.img})`


                    div.append(span)
                    projects__inner1.append(div)
                }

            }
        }
        architect.onclick = () => {
            architect.classList.toggle('active')
            

            let reload1 = (parametr) => {
                projects__inner1.innerHTML = ""
                let value = categories.filter(item => item.id == 2)
                console.log(value);
                for (let j of categories) {
                    for (let i of items) {
                        if (i.categorie_id == 2 && j.id == 2) {
                            let div = document.createElement('div')
                            let span = document.createElement('span')
                            div.classList.add('image')
                            div.style.backgroundImage = `url(${i.img})`


                            div.append(span)
                            projects__inner1.append(div)
                        }
                    }
                }
            }
            reload1(items)
        }


        build.onclick = () => {
            build.classList.toggle('active')
           

            let reload2 = (parametr) => {
                projects__inner1.innerHTML = ""
                let value = categories.filter(item => item.id == 2)
                console.log(value);
                for (let j of categories) {
                    for (let i of items) {
                        if (i.categorie_id == 3 && j.id == 3) {
                            let div = document.createElement('div')
                            let span = document.createElement('span')
                            div.classList.add('image')
                            div.style.backgroundImage = `url(${i.img})`


                            div.append(span)
                            projects__inner1.append(div)
                        }
                    }
                }
            }
            reload2(items)
        }
        repair.onclick = () => {
            repair.classList.toggle('active')
            let reload3 = (parametr) => {
                projects__inner1.innerHTML = ""
                let value = categories.filter(item => item.id == 2)
                console.log(value);
                for (let j of categories) {
                    for (let i of items) {
                        if (i.categorie_id == 4 && j.id == 4) {
                            let div = document.createElement('div')
                            let span = document.createElement('span')
                            div.classList.add('image')
                            div.style.backgroundImage = `url(${i.img})`


                            div.append(span)
                            projects__inner1.append(div)
                        }
                    }
                }
            }
            reload3(items)
        }
    }

    reload()
}