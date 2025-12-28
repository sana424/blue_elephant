const glassChange = document.querySelectorAll('#hori .glass_change li');
const aboutGlass = document.querySelectorAll('#hori .about_glass');
const blurProduct = document.querySelector('#hori .blur_product');
const glassList = document.querySelectorAll('#hori .product_list .glass');



aboutGlass.forEach((item ,index) => {
    item.querySelector('.show_button').addEventListener('click', (e)=> {
        //클래스 전부 지우기
        aboutGlass.forEach((item,index)=>{
        item.querySelector('.detail_box').classList.remove('show');
        glassChange[index].classList.remove('show');
        glassList[index].classList.remove('hide');
        })
        //클래스 더해주기
        item.querySelector('.detail_box').classList.add('show');
        glassChange[index].classList.add('show');
        blurProduct.classList.add('active');
        glassList[index].classList.add('hide');
    })
    item.querySelector('.detail_box button').addEventListener('click', ()=>{
        //클래스 전부 지우기
        aboutGlass.forEach((item,index)=>{
        item.querySelector('.detail_box').classList.remove('show');
        glassChange[index].classList.remove('show');
        glassList[index].classList.remove('hide');
        })
        blurProduct.classList.remove('active');
    })
})