import Goods from './products.json';

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
            resolve(Goods.slice(0,arrLength+4));
          }, 700);
        });
      }
    
}


export default ProductsService;


