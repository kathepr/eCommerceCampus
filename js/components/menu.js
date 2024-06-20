export const menuListCategoryIndex = async (res)=>{
    let {data} = res;
    let plantilla = "";
    data.forEach((value, index) => {
        plantilla += /*html*/`
        <li title="${value.name}">
            <a href="?id=${value.id}" >
                <img src="storage/img/items.svg" >
                <span>${value.name}</span>
            </a>
        </li>
        `;
    });
    return plantilla;
}