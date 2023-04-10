
let grid= document.querySelector('.product')
let filterInput= document.getElementById('filterInput')

    fetch('http://localhost:3000/product')
    .then(response=>response.json())
    .then(res=>{
        
        // for loop  for iterating values
        for(let value of res){
            addElement(grid,value)

        }
        
    })
    .catch(error=>(console.log("there is a error")));
    // add event listener


    // uncomment this event listener
    filterInput.addEventListener('keyup',filterProduct)
    
    
    // call back function
    function filterProduct(){
    let filterValue = filterInput.value.toUpperCase()
    let item= grid.querySelectorAll('.item')
    for(let i=0;i<item.length;i++){
        let span=item[i].querySelector('.title')
        if(span.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            item[i].style.display='initial'
        }else{
            item[i].style.display='none'
            
        }

    }
   
    // .catch(error=>(console.log("there is abug")))
    // console.log(filterValue)

    }
   


    // get the value from api and create dynamic element
    function addElement(appendIn,value){
        let div= document.createElement('div');
        div.className='item justify-self-center'

        let{image,title,category,price}=value

        div.innerHTML=`
        <img src="${image}" class="bg-cover-img " alt="img1" id="image" >
            <div class="text-left py-3 font-poppins">
                <h1 class="text-lg title" id="title">${title} </h1>
                <a href="#" class="block"><span class="text-sn text-red-400">${category}</span></a>
                <span class="block py-3">$ <span class="text-md">${price}</span></span>
                <button id="button" class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
            </div>
        `
        appendIn.appendChild(div)
    }