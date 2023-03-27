import React,{useState,useEffect} from "react";
import './App.css';
function App(){



    const [dataa,setData]= useState([]);
  const [location, setLocation]= useState([]);
  const [vendor,setVendor] = useState([])
  const[material,setMaterial]= useState([]);
  const[material_name,setMaterial_name]=useState("")
  const [rate,setRate]= useState(1);
  const[gst_percentage,setGst]= useState(0);
  const[amount,setAmount]=useState(1);
  const[uom,setUom]=useState()
  const[mId,setmId]= useState();
  const [matId,setMatId]= useState(0)
  const[orderNo,setOrderNo]=useState()
  const[vendor_id,setVendor_id]=useState()
  const[order_date,setDate]=useState(Date.now())
  const[order_location_id,setOrder_location_id]= useState(0);
  const[complete_address,setComplete_Address]=useState()
  const[description,setDescription] = useState(null)
  const[materials,setMaterials]=useState()
  const[vendor_name,setVendor_name]=useState();
  const[order_location,setOrder_location]=useState()
  const[quantity,setQuantity]= useState(1);
  let [collection,setCollection]=useState([]);

  useEffect(()=>{ 
  getList()
  getLocation()
  getVendors()
  getMaterial()
},[])

 function getList(){
  fetch("https://testapi.acolabz.com/api/v1/orders").then((result)=>{
    result.json().then((resp)=>{     
      setData(resp.data[0].materials)
    })
  })
 }
 function getLocation(){
  fetch("https://testapi.acolabz.com/api/v1/locations").then((result)=>{
    result.json().then((resp)=>{   
      setLocation(resp.data)     
    })
  })
 }
 function getVendors(){
  fetch("https://testapi.acolabz.com/api/v1/vendors").then((result)=>{
    result.json().then((resp)=>{
      setVendor(resp.data)
      console.log(resp)
    })
  })
 }
 function getMaterial(){
  fetch("https://testapi.acolabz.com/api/v1/materials").then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      setMaterial(resp.data)
      
    })
  })
 }
 
 function materialHanler(e){
    setMatId(e.target.value)
//   alert(matId)
    setMaterial_name(material[matId].material_name)
    setGst(material[matId].gst_percentage)
    setRate(material[matId].rate)
    setUom(material[matId].uom)
 }
 function VendorFan(e){
  alert(e)
 }
 function locationHan(e){
alert(e)
 }
 function AddressFun(e){
alert(e)
 }

 
  function onSubmit(e){
    e.preventDefault();
    let item = {};
    console.warn(item)
    fetch("https://testapi.acolabz.com/api/v1/orders",{
      method:"POST",
      headers:{
        'Accept':'application/json',
        "Content-Type":'application/json'
      },body:JSON.stringify(item)
    }).then((result)=>{
      result.json().then((resp)=>{
        getList();
      })
    })
  }
  // function onAdd(e){
  //   setAmount((rate*quantity)+((rate*quantity*gst_percentage)/100))
  //   e.preventDefault();
  //   let item = {material_name,uom,quantity,rate,gst_percentage,amount};
  //   console.warn(item)
  //   fetch("https://testapi.acolabz.com/api/v1/orders",{
  //     method:"POST",
  //     headers:{
  //       'Accept':'application/json',
  //       "Content-Type":'application/json'
  //     },body:JSON.stringify(item)
  //   }).then((result)=>{
  //     result.json().then((resp)=>{
  //       getList();
  //     })
  //   })
  // }
  function  onAdd(e)
  {
    let r= rate;
    let q=quantity;
    let g=gst_percentage;
    let m= (r*q);
    setAmount(m)
     e.preventDefault();
     let item = {material_name,uom,quantity,rate,gst_percentage,amount};
     console.warn(item)
    
    let x=collection;
    x.push(item)
    collection.push()
    setCollection(x)
    
    console.warn(collection)  
  }
  return(
    

     
        <div className="Box">
      <div>
        Order No* <br />
        <input type="text" onClick={(e)=>setOrderNo(e.target.value)}/>
      </div>
      <div>
        Order Date* <br />
        <input type="Date" onClick={(e)=>setDate(e.target.value)} />
      </div>
      <div>
        Vendor* <br />
         <select name="" id=""value={vendor_id} onChange={VendorFan}> Vendor*
           {
             vendor.map((item,i)=>
               <option value={item.id} key={i}>{item.vendor_name}, {item.location}, {item.city}</option>
             )
           }
           </select>
      </div>
      <div>
        Order for location* <br />
       <select name="" id="" value={order_location_id} onChange={locationHan}>
             {
               location.map((item,i)=>             
                 <option value={item.id} key={i}>{item.location_name},{item.city}</option>              
               )
             }
             </select>
      </div>
      <div>
        Complete Address* <br />
        <input type="text" onChange={AddressFun}/>
      </div>
      <div>
         <select name="" id="" value={matId}  onChange={materialHanler}>
             {
               material.map((item,i)=>
                 <option value={item.id}>{item.material_name}</option> 
               )
            }
           </select>
           <input type="number" placeholder="Rate" value={rate} />
           <input type="number" placeholder="Qty" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
           <span>{uom}</span>
           <input type="number" placeholder="GST%" value={gst_percentage}/>
           <button onClick={onAdd} type="button" >+Add</button>
      </div>
      <div>
      <table border="1">
             <tbody>
               <tr>
                 <th>Material</th>
                 <th>Qty</th>
                 <th>Rate</th>
                 <th>GST%</th>
                 <th>Amount</th>
                 
               </tr>
               {
                 collection.map((item,i)=>
                 <tr key={i}>
                   <td>{item.material_name}</td>
                   <td>{item.quantity}</td>
                   <td>{item.rate}</td>
                   <td>{item.gst_percentage}</td>
                   <td>{item.amount}</td>
                   
                 </tr>
                 )
               }
             </tbody>
           </table>

      </div>
      <div>
        <textarea name="" id="" cols="30" rows="10" value={description} onChange={(e)=>setDescription}>Description</textarea>
      </div>
      <button onClick={onSubmit} type="button" >Create Order</button>
      </div>
      
  )
}
export default App

