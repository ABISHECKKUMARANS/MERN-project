import { useState } from "react"
function List() {
  return (
    <div>
        <ol>
            <li>Fruits</li>
            
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
            </ul>
            <li>Vegetables</li>
            <ol type="I">
                <li>Carrot</li>
                <li>Brinjal</li>
                <li>Tomato</li>
            </ol>
            <li>Flowers</li>
            <ul type="*">
                <li>Rose</li>
                <li>Lily</li>
                <li>Jasmine</li>
            </ul>


        </ol>
    </div>
  )
}

export default List
