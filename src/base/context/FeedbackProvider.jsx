import React from 'react'
import { useEffect } from 'react';
import { createContext,useState } from 'react'
const Feedbackcontext=createContext()

export function FeedbackProvider ({children}) {
    const [feedback,setFeedback]=useState([]);
    const[newRating,setNewRating]=useState(5);
    const[text,setText]=useState("")
    const[isdisabled,setIsDisabled]=useState(true)
    const [minLetterMsg,setMinLetterMsg]=useState(false)
    const [editMode,setEditMode]=useState(false)
    const [editId,setEditId]=useState(0)
      /*************Getting Data From JSON*************/
      useEffect(()=>{
        gettingData()
      },[])
     async function gettingData(){
      const rowData= await fetch("http://localhost:6000/feedbacklist");
      const data= await rowData.json();
      setFeedback(data)
    }
    //Deleting Feedback-item
    async function deletingFromServer(id){
      await fetch (`http://localhost:6000/feedbacklist/${id}`,{
        method:"DELETE"
      });
      
    }
      /*************Deleting Handler*************/
    function closeClickHandler(id){
     if(window.confirm("Do you want to delete this feedback?")) 
            {setFeedback(prev=>prev.filter(item=>{
            return item.id!==id
        }))}
        deletingFromServer(id)
      }
          /*************Marking Rate*************/
      function ratingHandler(e){
        setNewRating(+e.target.value)
      }
      /*************Adding feedback*************/
     async function AddingDataToServer(newfeedback){
      await fetch (`/feedbacklist/`,{
              method:"POST",
              headers:{"content-type":"application/json"},
              body:JSON.stringify({...newfeedback})
            });
             }
      /*************Editing feedback*************/
     async function EditingDataOnServer(id,newfeedback){
      await fetch (`http://localhost:6000/feedbacklist/${id}`,{
              method:"PUT",
              headers:{"content-type":"application/json"},
              body:JSON.stringify({...newfeedback})
            });
             }
      /*************Submitting Function*************/
    function submitHandler(id,text,rating){
    let newFeed={id:id,text:text,rating:rating}
    if(editMode===false){
      setFeedback(prev=>[...prev,newFeed])
      setNewRating(rating)
      AddingDataToServer(newFeed)

    }
    if(editMode===true){
      setFeedback(prev=>prev.map((item)=>{
          if(item.id===id){          
          EditingDataOnServer(id,newFeed)
          return{...newFeed}
          }else return item
      }
      
      ))
          setEditMode(false)
    }
    setText("")
    setNewRating(5)
    setIsDisabled(true)

  }
      /*************Editing ClickHandler*************/
  function editClickHandler(id){
    setEditMode(true)
    feedback.forEach((el)=>{
      if(el.id===id){
        setText(el.text)
        setNewRating(el.rating)
        setEditId(id)
        console.log(id)
      }
    })
    
  }
      /*************Input Function*************/
  function inputHandler(e){
    setText(e.target.value)
    let textvalue=e.target.value
    if(textvalue.length===0){
      setIsDisabled(true)
      setMinLetterMsg(false)
  
    }
    else if (textvalue.length!==0 && textvalue.length<9){
      setIsDisabled(true)
      setMinLetterMsg(true)
    } else {
      setIsDisabled(false)
      setMinLetterMsg(false)
    }
  }

  return (<Feedbackcontext.Provider value={{
    editId,editMode,feedback,text,isdisabled,minLetterMsg,newRating,editClickHandler,inputHandler,closeClickHandler,ratingHandler,submitHandler }}>{children}</Feedbackcontext.Provider>)
}

export default Feedbackcontext
