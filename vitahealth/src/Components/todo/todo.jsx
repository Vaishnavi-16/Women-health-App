import React, { useState, useEffect } from 'react'
import "./todo.css"
import { AiOutlinePlusCircle } from 'react-icons/ai'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Client, Account, Databases, ID } from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63a70dd0b29b8cc8e592")

const account = new Account(client)

const databases = new Databases(client)

function Todo() {

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState();
  const [loader, setLoader] = useState(false)

  const handleSubmit = () => {
    console.log(items)
    console.log(inputData);
    const promise = databases.createDocument("63a8165518cf9c206c87", "63a816b1c01bbd80a0d0", ID.unique(),
      { Todo: inputData })
    console.log(promise);
    promise.then(
      function (response) {
        console.log(response);

      },
      function (error) {
        console.log(error);
      }
    );
    window.location.reload()
  }
  useEffect(() => {
    setLoader(true)
    const getItems = databases.listDocuments("63a8165518cf9c206c87", "63a816b1c01bbd80a0d0")

    getItems.then(
      function (response) {
        setItems(response.documents)
        console.log(items)
      },
      function (error) {
        console.log(error);
      }
    )
    setLoader(false)
  }, [])
  //delete the item
  const deleteItem = (id) => {
    const promise = databases.deleteDocument("63a8165518cf9c206c87", "63a816b1c01bbd80a0d0", id)
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    )
    window.location.reload()
  }

  // delete all



  return (

    <div className="main-div">
      <div className='child-div'>
        <figure>
        <lottie-player
  autoplay
  
  loop
  mode="normal"
  src="https://assets9.lottiefiles.com/packages/lf20_larb2qqu.json"
  
></lottie-player>
          <figcaption>What's on your list for Today</figcaption>
        </figure>

        {/*input box to write the task */}

        <div className='addItems flex flex-row'>
          <input type="text" placeholder="✍️ Add your tasks..." onChange={(event) => setInputData(event.target.value)}></input>
          <AiOutlinePlusCircle className='w-[50%] h-[50%]' title='add item' onClick={handleSubmit} />
        </div>

        {/*list of all the tasks */}



        <div className="showItems">
          {
            items && items.map((item) => {
              return (
                <div className='eachItem' key={item.$id}>
                  <h3>{item.Todo}</h3>
                  <i className="fa fa-regular fa-trash add-btn" onClick={() => deleteItem(item.$id)}></i>
                </div>
              )

            })
          }

        </div>

        { /*clear all notes.*/}

        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="Remove All" onClick={() => setItems([])}><span> Check List</span></button>
        </div>

      </div>
    </div>
  )
}

export default Todo;