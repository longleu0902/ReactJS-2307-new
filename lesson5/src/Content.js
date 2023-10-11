import CardProduct from "./cardProduct";
import Rating from "./Rating";
function Content(){
  const listProducts = [
		{
			nameProduct: 'Fancy Product',
			isSale: false,
			isRate: false,
			price1: 40,
			price2: 80,
		},
		{
			nameProduct: 'Special Item',
			price1: 20,
			price2: 18,
		},
		{
			nameProduct: 'Sale Item',
			isRate: false,
			price1: 50,
			price2: 25,
		},
		{
			nameProduct: 'Popular Item',
			isSale: false,
			price1: 40,
		},
		{
			nameProduct: 'Sale Item',
			isRate: false,
			price1: 50,
			price2: 25,
		},
		{
			nameProduct: 'Fancy Product',
			isSale: false,
			isRate: false,
			price1: 40,
			price2: 80,
		},
		{
			nameProduct: 'Special Item',
			price1: 20,
			price2: 18,
		},
		{
			nameProduct: 'Popular Item',
			isSale: false,
			price1: 40,
		},
  ]
    return (
        <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
     {listProducts.map((product) => {
      return (
        <CardProduct
        nameProduct={product.nameProduct}
        isSale={product.isSale}
        isRate={product.isRate}
        price1={product.price1}
        price2={product.price2}
        />
      )

     })}
    </div>
  </div>
</section>

   
    )
}
export default Content;