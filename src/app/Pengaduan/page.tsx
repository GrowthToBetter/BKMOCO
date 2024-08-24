"use client";

import { useEffect, useState } from "react";
import Popup from "@/app/Components/popup";
import Card from "@/app/Components/utils/card";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function App() {
  const {data: session, status}:{data:any; status:string}=useSession();
  const router=useRouter();
  useEffect(()=>{
    if(status === "unauthenticated"){
      router.push('/Login')
    } else {
      if(session !== undefined && session?.user.role !=='admin'){
          router.push('/')
      }
    }
  },[router, session, session?.user.role, status])
  const [formData, setFormData] = useState({
    Nama: "",
    Kelas: "",
    NoAbsen: "",
    Laporan: "",
    BuktiLaporan: "",
    Keterangan: "",
    
  });
  const [triger, setTriger]=useState(false)
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi: pastikan tidak ada field yang kosong
    const requiredFields = [
      "Nama",
      "Kelas",
      "NoAbsen",
      "Laporan",
      "BuktiLaporan",
      "Keterangan",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      setError(
        `Please fill in the following fields: ${missingFields.join(", ")}`
      );
      return; // Mencegah pengiriman form jika ada field yang kosong
    }

    setError(null); // Hapus error jika semua field terisi

    try {
      const response = await fetch("/api/siswa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          NoAbsen: formData.NoAbsen,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTriger(true)

      // Reset form data
      setFormData({
        Nama: "",
        Kelas: "",
        NoAbsen: "",
        Laporan: "",
        BuktiLaporan: "",
        Keterangan: "",
        
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding data siswa.");
    }
  };
  return (
    <>
      <Popup triggers={triger}>
      <div className="flex w-full h-fit justify-center">
        <Link href="">
        <Card bgImage="/img/Nia.png" nama="Ms. Nia"/>
        </Link>
      </div>
      </Popup>
    <div className="w-screen h-screen pt-80 flex justify-center items-center overflow-auto">
      <div className="w-3/6 bg-baseHijau h-fit mt-40 mb-20 p-10">
        <div className="flex flex-col mb-20 justify-center">
          <h1 className="text-xl font-bold">Pengaduan</h1>
          <p className="text-md font-medium">
            Sampaikan keluhan, masalah, atau ketidakpuasan terhadap suatu hal
            kepada pihak yang berwenang atau yang bertanggung jawab untuk
            menangani permasalahan tersebut. untuk mencari solusi atau
            penyelesaian atas masalah yang dihadapi oleh pihak yang mengadukan.
          </p>
        </div>
        <div className="text-hijauText">
          <form onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold text-hijauText m-2">Nama</h1>
            <input
              type="text"
              name="Nama"
              placeholder="Textfield Text"
              value={formData.Nama}
              onChange={handleChange}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
            />
            <h1 className="text-xl font-bold text-hijauText m-2">Kelas</h1>
            <input
              type="text"
              name="Kelas"
              placeholder="Textfield Text"
              value={formData.Kelas}
              onChange={handleChange}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
            />
            <h1 className="text-xl font-bold text-hijauText m-2">No Absen</h1>
            <input
              type="text"
              name="NoAbsen"
              placeholder="Numberfield Text"
              value={formData.NoAbsen}
              onChange={handleChange}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
            />
            <h1 className="text-xl font-bold text-hijauText m-2">Laporan</h1>
            <input
              type="text"
              name="Laporan"
              placeholder="Textfield Text"
              value={formData.Laporan}
              onChange={handleChange}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
            />
            <h1 className="text-xl font-bold text-hijauText m-2">
              Bukti Laporan
            </h1>
            <input
              type="text"
              name="BuktiLaporan"
              placeholder="Textfield Text"
              value={formData.BuktiLaporan}
              onChange={handleChange}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
            />
            <h1 className="text-xl font-bold text-hijauText m-2">Keterangan</h1>
            <input
              type="text"
              name="Keterangan"
              placeholder="Textfield Text"
              value={formData.Keterangan}
              onChange={handleChange}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
            />
            <button className="mt-5 w-1/2 p-2 text-white items-center justify-center h-10 flex rounded-lg bg-moklet">
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
    </>
  );
}
