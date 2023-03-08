import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import './Add.Styles.scss';
import axios from 'axios'

export default function AddProducts() {
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

  const cleanUp = () => {
    titleRef.current.value = null;
    imageRef.current.value = null;
    priceRef.current.value = null;
    descriptionRef.current.value = null;
  };
  const validate = (inputRef) => {
    setValid(true);
    if (inputRef.current.value === '') {
      setValid(false);
      return true;
    }
    return false;
  };
  const handleSubmit = () => {
    if (validate(titleRef) || validate(priceRef)) return;
    const req = JSON.stringify({
      title: titleRef.current.value,
      image: imageRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    });
    const config = {
      method: 'POST',
      mode: 'cors',
      body: req,
    };
    console.log(req);
    fetch('http://localhost:3000/products/add', config)
      .then((res) => {
        if (res.status <= 299) {
          cleanUp();
        }
        res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = e => {
    const { name, value } = e.target
    if (name == 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <label>
          Title
          <input type='text' name='title' ref={titleRef} />
        </label>
        <label>
          Image URL
          <input type='text' name='image' ref={imageRef} />
        </label>
        <label>
          Price
          <input type='number' name='price' ref={priceRef} />
        </label>
        <label>
          Description
          <textarea type='text' name='description' ref={descriptionRef} />
        </label>
        <Button onClick={handleSubmit}> Add Product</Button>
        {valid ? null : <label style={{ color: 'red' }}>invalid Form</label>}
      </div>
    </div>
  );
}
