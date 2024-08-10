'use client';






import { useState } from 'react';


export default function App() {
  const [Nama,setNama]=useState<string>('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
  };
  return (
    <div className="w-screen h-screen pt-80 flex justify-center items-center overflow-auto">
      <div className=" w-3/6 bg-baseHijau h-fit mt-40 mb-20 p-10">
        <div className="flex flex-col mb-20 justify-center">
          <h1 className="text-xl font-bold">Pengaduan</h1>
          <p className="text-md font-medium">
            Sampaikan keluhan, masalah, atau ketidakpuasan terhadap suatu hal
            kepada pihak yang berwenang atau yang bertanggung jawab untuk
            menangani permasalahan tersebut. untuk mencari solusi atau
            penyelesaian atas masalah yang dihadapi oleh pihak yang mengadukan.
          </p>
        </div>
        <div className=" text-hijauText">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold text-hijauText m-2">Nama</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              value={Nama}
              onChange={(e) => setNama(e.target.value)}
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <form action="">
            <h1 className="text-xl font-bold text-hijauText m-2">Kelas</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <form action="">
            <h1 className="text-xl font-bold text-hijauText m-2">No Absen</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <form action="">
            <h1 className="text-xl font-bold text-hijauText m-2">Laporan</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <form action="">
            <h1 className="text-xl font-bold text-hijauText m-2">Bukti Laporan</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <form action="">
            <h1 className="text-xl font-bold text-hijauText m-2">Keterangan</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <form action="">
            <h1 className="text-xl font-bold text-hijauText m-2">No Telepon</h1>
            <input
              type="text"
              placeholder="Textfield Text"
              className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau "
            />
          </form>
          <button className=" mt-5 w-1/2 p-2 text-white items-center justify-center h-10 flex rounded-lg bg-moklet ">
          Submit
        </button>
        </div>
      </div>
    </div>
  );
}
