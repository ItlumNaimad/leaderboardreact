// app/api/hello/route.ts
import { pool } from '@/lib/db'; // Dostosuj ścieżkę w razie potrzeby
import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT NOW()');
        client.release(); // Zwolnij klienta z powrotem do puli
        return NextResponse.json({ time: res.rows.now });
    } catch (error) {
        console.error('Błąd połączenia z bazą danych:', error);
        return NextResponse.json({ message: 'Nie udało się połączyć z bazą danych' }, { status: 500
        });
    }
}