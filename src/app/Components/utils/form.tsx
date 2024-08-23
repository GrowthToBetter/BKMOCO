export default function Form(props:any){
    return(<>
    <h1 className="text-xl font-bold text-hijauText m-2">{props.name}</h1>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.data}
          onChange={props.func}
          className="text-black border-2 w-1/2 rounded-lg p-3 bg-baseHijau border-inputCodeHijau placeholder-inputCodeHijau"
        />
    </>
        );
}