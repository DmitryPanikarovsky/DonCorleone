const Product = ({ params: { id } }: { params: { id: string } }) => {
    return <p>Product {id}</p>;
};

export default Product;
