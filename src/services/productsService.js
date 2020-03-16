import Goods from './items.json';

class ProductsService{
    

    initialLoad() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Goods.slice(0,10));
          }, 700);
        });
      }

      loadMore(arr) {
        const arrLength = arr.length;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Goods.slice(arrLength,arrLength+4));
          }, 700);
        });
      }
    
}


export default ProductsService;


