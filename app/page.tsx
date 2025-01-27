import { Container, Filters, ProductCard, ProductsListGroup, Title, TopBar } from "@/components/shared";

export default function Home() {
    return (
        <div>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="pb-14 mt-8">
                <div className="flex gap-[80px]">
                    <div className="w-[244px]">
                        <Filters />
                    </div>
                    <div className="flex flex-1 flex-col gap-16">
                        <ProductsListGroup title="Пиццы" categoryId={1} items={[
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                        ]}/>
                        <ProductsListGroup title="Завтрак" categoryId={1} items={[
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                        ]}/>
                        <ProductsListGroup title="Ужин" categoryId={1} items={[
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                            {
                                id: 1, 
                                name: "Маргарита",
                                imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                price: 550,
                                items: [{price: 550}]
                            },
                        ]}/>
                    </div>
                </div>
            </Container>
            {/* <div className='h-[3000px]'></div> */}
        </div>
    );
}
