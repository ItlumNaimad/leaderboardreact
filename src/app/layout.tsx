import './globals.css'; // Import globalnych stylów Tailwind CSS
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainMenu from '@/app/components/MainMenu'; // Import komponentu menu

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Aplikacja Liderboardu',
    description: 'Zarządzanie turniejami i wynikami',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
        <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Liderboard</h1>
                    <MainMenu /> {/* Tutaj umieszczamy menu nawigacyjne */}
                </div>
            </header>
            <main className="flex-grow container mx-auto p-6">
                {children} {/* Tutaj renderowana jest zawartość konkretnej strony */}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>© 2023 Aplikacja Liderboardu</p>
            </footer>
        </div>
        </body>
        </html>
    );
}