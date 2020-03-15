import Goods from './items.json';

class ProductsService{

    initialLoad = () => {
        return Goods.slice(0,10);
    }

    loadMore = (arr) => {
        const arrLength = arr.length;        
        return Goods.slice(arrLength,arrLength+4);
    }
}

export default ProductsService;


