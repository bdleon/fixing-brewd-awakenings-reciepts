import { getProducts } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,price] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt()) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

