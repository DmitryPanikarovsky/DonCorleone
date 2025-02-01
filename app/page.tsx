import { Container, Filters, ProductsListGroup, Title, TopBar } from "@/components/shared";

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
                        <Filters className="sticky top-[124px]" />
                    </div>
                    <div className="flex flex-1 flex-col gap-16">
                        <ProductsListGroup
                            title="Пиццы"
                            categoryId={1}
                            items={[
                                {
                                    id: 1,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 2,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 3,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 4,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 5,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 6,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 7,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                            ]}
                        />
                        <ProductsListGroup
                            title="Комбо"
                            categoryId={2}
                            items={[
                                {
                                    id: 1,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 2,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 3,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 4,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 5,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 6,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 7,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                            ]}
                        />
                        <ProductsListGroup
                            title="Закуски"
                            categoryId={3}
                            items={[
                                {
                                    id: 1,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 2,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 3,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 4,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 5,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 6,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                                {
                                    id: 7,
                                    name: "Маргарита",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
                                    price: 550,
                                    items: [{ price: 550 }],
                                },
                            ]}
                        />
                    </div>
                </div>
            </Container>
            {/* <div className='h-[3000px]'></div> */}
        </div>
    );
}
