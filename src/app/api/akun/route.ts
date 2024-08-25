import prisma from "@/Lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
  try {
    const results = await prisma.akun_user.findMany();

    const serializedResults = results.map((item) => ({
      ...item,
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

    const requiredFields = [
      "Gmail",
      "Password",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }


    const newEntry = await prisma.akun_user.create({
      data: {
        Gmail:data.email,
        Password:data.password,
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
