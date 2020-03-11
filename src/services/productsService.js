class ProductsService{   
    initialLoad = (items) => {
        return items.slice(0,10);
    }

    loadMore = (mainArr, arr) => {
        const arrLength = arr.length;        
        return mainArr.slice(arrLength,arrLength+4);
    }
}

export default ProductsService;


