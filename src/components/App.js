import React,{useState} from 'react'
import "../styles/App.css";
import Menu from "../menu";
const App = () => {
    
    const[categories , setCategory] = useState(Menu);

    let path = "../..";
    console.log(path+Menu[0].img)
    console.log("../../images/item-1.jpg")
    function category(e)
    {
      e.preventDefault();
      const id = e.target.id;


      if(id=="all"){
        // let filterdata = Menu.filter((data)=>{return data.category==id})
        
        setCategory(Menu);
      }


      if(id=="filter-btn-1"){
        let filterdata = Menu.filter((data)=>{return data.category=="breakfast"})
        
        setCategory(filterdata);
      }

      if(id=="filter-btn-2"){
        let filterdata = Menu.filter((data)=>{return data.category=="lunch"})
        
        setCategory(filterdata);
      }

      if(id=="filter-btn-3"){
        let filterdata = Menu.filter((data)=>{return data.category=="shakes"})
        
        setCategory(filterdata);
      }
        
    }

   
  return (

    <div id="main" c="a">
    <nav>
        <h1>
            Our Menu
        </h1>
        <ul>
       <li onClick = {category} id = "all" className = "tile" > All</li>
       <li onClick = {category} id= "filter-btn-1" className = "tile" data-test-id="menu-item-breakfast"> Breakfast</li>
       <li onClick=  {category} id="filter-btn-2" className = "tile" data-test-id="menu-item-lunch"> Lunch</li>
       <li onClick= {category} id= "filter-btn-3" className = "tile" data-test-id="menu-item-shakes"> Shakes</li>
        </ul>
    </nav>   


    <div className="imageTextMainBlock">    
        {categories.map((item,index)=>{
            return (                
                    <div className="boxMainBlock">
                    <img src = {path+item.img} width = "120px" height = "150px"/>                    
                    <section>
                     <div className='boxBlock'>
                    <h2>{item.title}</h2>
                    <p className='price'>{item.price}</p>
                    </div>   
                    <hr/>
                    <p>{item.desc}</p>
                    </section>
                    </div>                
           )
        })}
    </div> 

    </div>
  )
}

export default App