fetch('data.xml') 
  .then(response => response.text()) 
  .then(xmlString => { 
    const parser = new DOMParser(); 
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml'); 
    const blocks = xmlDoc.getElementsByTagName('block'); 
 
    const productsContainer = document.getElementById('products'); 
    for (let i = 0; i < blocks.length; i++) { 
      const block = blocks[i]; 
      const image = block.getElementsByTagName('img')[0].textContent; 
      const title = block.getElementsByTagName('title')[0].textContent; 
      const price = block.getElementsByTagName('price')[0].textContent; 
 
      const productElement = document.createElement('li'); 
      productElement.className = 'table__cell link'; 
      productElement.innerHTML = ` 
        <img src="${image}" alt="photo-item" class="table__image"> 
        <p class="table__text">${title}</p> 
        <p class="table__price">${price}</p> 
      `; 
 
      productsContainer.appendChild(productElement); 
    } 
  }) 
  .catch(error => console.error(error));