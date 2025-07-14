// components/MainMenu.tsx
'use client'; // Oznaczamy jako komponent kliencki, ponieważ używa Link i może mieć interaktywność

import Link from 'next/link';

export default function MainMenu() {
    return (
        <nav>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:text-blue-200">
                        Strona Główna
                    </Link>
                </li>
                <li>
                    <Link href="/players-teams/add" className="hover:text-blue-200">
                        Dodaj Graczy/Drużyny
                    </Link>
                </li>
                <li>
                    <Link href="/tournaments/create" className="hover:text-blue-200">
                        Utwórz Turniej
                    </Link>
                </li>
                <li>
                    <Link href="/leaderboard" className="hover:text-blue-200">
                        Tabela Ligowa
                    </Link>
                </li>
                <li>
                    <Link href="/matches" className="hover:text-blue-200">
                        Mecze i Wyniki
                    </Link>
                </li>
            </ul>
        </nav>
    );
}