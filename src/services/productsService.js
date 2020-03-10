class ProductsService{   
    initialLoad = (items) => {
        return items.slice(0,10);
    }

    loadMore = (Goods, items) => {
        return Goods.slice(items.length,4);
    }
}

export default ProductsService;


