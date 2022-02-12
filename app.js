const faqs = document.querySelectorAll(".faq_box")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faqs.forEach((faq) => {
            faq.classList.remove('active')
        })
        faq.classList.toggle('active')
    })
})


// manu toggle 

const navIcon = document.querySelector('.nav_bar_icon')

const manuUl = document.querySelector('.manu')

navIcon.addEventListener("click",()=>{
    manuUl.classList.toggle('active')
})