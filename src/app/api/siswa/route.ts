// src/app/api/siswa/route.ts
import db from '@/lib/database';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const [results, fields] = await db.query('SELECT * FROM `data_siswa`');
    return NextResponse.json(results);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const [results] = await db.query('INSERT INTO `data_siswa` SET ?', data);
    return NextResponse.json(results);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
