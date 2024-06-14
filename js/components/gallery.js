export const galleryIndex = (res)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach(value, index) => {
        plantilla += /*html*/
    };
    
    return /*html*/`
    <section>
        <div class="section__front_page">
            <a href="./views/detail.html">
                <img src="./storage/img/esequisele1.svg">
            </a>
            <img src="./storage/img/heart.svg">
        </div>

        <h5>Modern light clothes</h5>
        <small>Dress modern</small>

        <div class="section__price">
            <span>$212.99</span>
            <div class="price__score">
                <img src="./storage/img/star.svg">
                <p>5.0</p>
            </div>

        </div>
    </section>`;
}