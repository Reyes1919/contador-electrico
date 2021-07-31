class Product {
    constructor(name, price, times) {
        this.name = name;
        this.price = price;
        this.times = times;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product times</strong>: ${product.times}
                </div>
            </div> 
        `;

        productList.appendChild(element);
    }

    deleteProduct() {

    }

    showMessage() {

    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const times = document.getElementById('times').value;
    
    const product = new Product(name, price, times);

    const ui = new UI();
    ui.addProduct(product); 

    e.preventDefault();
    }); 
