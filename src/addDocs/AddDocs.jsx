import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { products } from '../asyncMock';


export const AddDocs = () => {
    const full = () => {
        let productsCollection = collection(db, 'products');
        products.forEach((product) => {
            addDoc(productsCollection, product)
        })
    }
    return (
        <div>
            <button onClick={full}>Agregar documentos</button>
        </div>
    )
}
