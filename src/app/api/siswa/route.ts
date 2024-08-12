// src/app/api/siswa/route.ts
import prisma from "@/Lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await prisma.data_Laporan.findMany();

    const serializedResults = results.map((item) => ({
      ...item,
      id: item.id.toString(),
      NoAbsen: item.NoAbsen.toString(),
      NoTelepon: item.NoTelepon.toString(),
    }));

    return NextResponse.json(serializedResults);
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Cek apakah semua field yang diperlukan ada
    const requiredFields = [
      "Nama",
      "Kelas",
      "NoAbsen",
      "Laporan",
      "BuktiLaporan",
      "Keterangan",
      "NoTelepon",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const noAbsen = parseInt(data.NoAbsen, 10);
    const noTelepon = parseInt(data.NoTelepon, 10);

    if (isNaN(noAbsen) || isNaN(noTelepon)) {
      return NextResponse.json(
        { error: "NoAbsen and NoTelepon must be numbers" },
        { status: 400 }
      );
    }

    const newEntry = await prisma.data_Laporan.create({
      data: {
        Nama: data.Nama,
        Kelas: data.Kelas,
        NoAbsen: data.NoAbsen,
        Laporan: data.Laporan,
        BuktiLaporan: data.BuktiLaporan,
        Keterangan: data.Keterangan,
        NoTelepon: data.NoTelepon,
      },
    });

    return NextResponse.json({
      message: "Data successfully inserted",
      insertId: newEntry.id,
    });
  } catch (err) {
    console.error("Error inserting data:", err);
    return NextResponse.json(
      { error: `Error inserting data: ${err}` },
      { status: 500 }
    );
  }
}
