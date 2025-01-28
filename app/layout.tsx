import { Header } from "@/components/shared";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["cyrillic"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Don Corleone`s Pizza",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body className={`${nunito.className} antialiased`}>
                <main className="min-h-screen">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
