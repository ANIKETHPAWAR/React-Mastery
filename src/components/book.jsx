

const Book=({props,props2})=>{
    return <div className=" p-5 text-center max-w-220px h-300px gap-2 bg-amber-900 text-blue-800-50 border-4 m-3.5">
    <img src= {props} className=" object-cover w-l h-l text-center" alt="" />
    <h2 >{props2}</h2>
    </div>
}

export default Book;