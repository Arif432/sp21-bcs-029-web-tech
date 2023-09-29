const apiUrl = 'https://usman-fake-api.herokuapp.com/api/products';

$(document).ready(function() {
    populateProducts();

    $('#addProductBtn').click(function() {
        addProduct();
    });

  
    function toggleModal() {
        const modal = $('#modal');
        modal.toggleClass('hidden');
    }
    $('#toggleModalBtn').click(function() {
        toggleModal();
    });

    $('#modalCloseBtn').click(function() {
        toggleModal();
    });

    function populateProducts() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function(data) {
                const allProductsDiv = $('#allProducts');
                allProductsDiv.empty();
                data.forEach(function(product) {
                    const productCard = $('<div class="product-card">');
                    productCard.html(`
                        <p>ID: ${product._id}</p>
                        <h3>${product.name}</h3>
                        <p>Price: $${product.price}</p>
                        <p>Color: ${product.color}</p>
                        <p>Department: ${product.department}</p>
                        <p>Description: ${product.description}</p>
                        <button id="deleteProductBtn" class="deleteBtn">Delete</button>
                        <button id="updateProductBtn" class="updateBtn">Update</button>
                    `);
                    allProductsDiv.append(productCard);
                });
            },
            error: function(error) {
                console.error('Error fetching products:', error);
            }
        });
    }

    function postProduct(product) {
        $.ajax({
            url: apiUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(product),
            success: function(response) {
                console.log('Product successfully added:', response);
                populateProducts();
            },
            error: function(error) {
                console.error('Error adding product:', error);
            }
        });
    }

    function addProduct() {
        const productName = $('#productName').val();
        const productPrice = parseFloat($('#productPrice').val());
        const productColor = $('#productColor').val();
        const productDepartment = $('#productDepartment').val();
        const productDescription = $('#productDescription').val();

        const newProduct = {
            name: productName,
            price: productPrice,
            color: productColor,
            department: productDepartment,
            description: productDescription
        };
        console.log('New Product:', newProduct);
        postProduct(newProduct); 
        toggleModal();
    }
    
   $('#allProducts').on('click', '#deleteProductBtn', function() {
    const productCard = $(this).closest('.product-card');
    // console.log('Product Card:', productCard);
    const id = productCard.find('p:first-child').text().split(': ')[1];  // Extracting the ID
    deleteProduct(id);
    // console.log('Product ID:', id);
    });
    
    function deleteProduct (id) {
        $.ajax({
            url: apiUrl + '/' + id,
            type: 'DELETE',
            success: function(response) {
                console.log('Product successfully deleted:', response);
                populateProducts();
            },
            error: function(error) {
                console.error('Error deleting product:', error);
            }
        });
    }

    let updateId;
    $('#allProducts').on('click', '#updateProductBtn', function() {
        const productCard = $(this).closest('.product-card');
        const id = productCard.find('p:first-child').text().split(': ')[1];  // Extracting the ID
        updateId = id;
        console.log('Product ID:', updateId);
        toggleModal();
    });

    $('#updateSave').click(function() {
        updateProduct(updateId);
    });


    function updateProduct(id) {
    const productName = $('#productName').val();
    const productPrice = parseFloat($('#productPrice').val());
    const productColor = $('#productColor').val();
    const productDepartment = $('#productDepartment').val();
    const productDescription = $('#productDescription').val();

    const updatedProduct = {
        name: productName,
        price: productPrice,
        color: productColor, 
        department: productDepartment, 
        description: productDescription,
    };

    $.ajax({
        url: apiUrl + '/' + id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(updatedProduct),
        success: function(response) {
            console.log('Product successfully updated:', response);
            populateProducts();
            toggleModal();  // Close the modal after updating
        },
        error: function(error) {
            console.error('Error updating product:', error);
        }
    });
}

});
