import { Categories, Container, Title } from "@/components/shared";

export default function Home() {
    return (
        <div>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-bold" />
                <Categories className='mt-5'/>
            </Container>
        </div>
    );
}
