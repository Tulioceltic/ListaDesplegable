'use client'
function Information (props: any) {
    return (
        <div className=" items-center justify-between flex-col">
            <h1 >{props.name} #{props.id}</h1>
            <div className="bg-white flex flex-col items-center justify-between ">
                <img className="w-1/2" src={props.imagen1}></img>
                <img className="w-1/2" src={props.imagen2}></img>
            </div>
            <div>
                tipo: {props.tipos[0]} {props.tipos[1]}
            </div>
        </div>
    )
};

export default Information