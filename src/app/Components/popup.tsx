export default function Popup(props: any) {
  return props.triggers ? (
    <>
      <div className="w-screen h-full bg-black fixed justify-center items-center bg-opacity-85 flex z-50">
        <div className="w-5/6 h-2/3 bg-white  rounded-sm">
        {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
