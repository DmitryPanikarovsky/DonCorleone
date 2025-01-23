import { Container, Title } from "@/components/shared";

export default function Home() {
    return (
        <div>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-bold" />
            </Container>
        </div>
    );
}
