import Book from './book'
let Booklist =()=>{
    return(
        <div className='flex items-center justify-center gap-2 mb-1.5 border-amber-300'>
          <Book props='https://m.media-amazon.com/images/I/51UmNg33hCL._SY445_SX342_.jpg' props2='Mel Robbins ' ></Book>
            
          <Book props='https://images-na.ssl-images-amazon.com/images/I/81dGKZOtqIL._SY445_SX342_.jpg' props2='Andy Weir ' ></Book>

           <Book props='https://m.media-amazon.com/images/I/51fn0cO61QL._SY445_SX342_.jpg' props2='Andy ' ></Book>
            <Book props='https://m.media-amazon.com/images/I/51fn0cO61QL._SY445_SX342_.jpg' props2='Andy ' ></Book>
        </div>
        
        

    )
}
export default Booklist;