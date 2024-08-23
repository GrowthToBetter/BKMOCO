export default function Card(props:any){
    return (
        
          <div className="w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative" style={{backgroundImage:`url(${props.bgImage})`}}>
            <div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">
                {props.nama}
              </h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
    )
}