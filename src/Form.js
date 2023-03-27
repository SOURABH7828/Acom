import React,{useState} from "react";

function Form(){
    let [name, setName]= useState("");
    let [age,addAge]= useState(0);
    let [hobbies,addhobbies]= useState(null);
    let [hobbies1,addhobbies1]= useState(null);
    let [gender,setGender]= useState("");
    let[Language,addLanguage]= useState("");
    let[collection,setCollection]= useState([])
    function controlHb(){

    }
    function controlHb1(){

    }
    function onSubmit(){
        let item ={name,age,hobbies,gender,Language,hobbies1}
        let x= collection;
        x.push(item)
        collection.push()
        setCollection(x)
        console.warn(collection)
    }
    return(
        <>
        <h1>Enter Detail</h1>
        <label >NAME <input type="text" onChange={(e)=>setName(e.target.value)}/> <br /><br /></label>
        <label>AGE <input type="text" onChange={(e)=>addAge(e.target.value)} /><br /><br /></label>

        <label >Hobbies <br /><br /></label>
        <input type="checkbox" id="hobby_1" value={hobbies} name="hobby_1" onChange={controlHb} /><label htmlFor="">Reading books <br /><br /></label>
        <input type="checkbox" id="bobby_1" value={hobbies1} name="hobby_1" onChange={controlHb1} /><label htmlFor="">Lisening Music <br /><br /></label>

        <div>
            <label htmlFor="">Gender <br /><br /></label>
            <input type="radio" value="Male" onChange={(e)=>e.target.value} cheched={gender==="Male"} />Male
            <input type="radio" value="Female" onChange={(e)=>e.target.value} checked={gender==="Female"}/>Female
        </div>
        <label htmlFor="" >Language</label>
        <select name="" id="" value={Language} onChange={(e)=>{addLanguage(e.target.value)}}>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
        </select>
        <br /><br />
        <button onClick={onSubmit} type="button">Save</button>
        <center>
            <h3>My Data</h3>
            <p>My name is </p>
        </center>
        </>
    )
}
export default Form;
