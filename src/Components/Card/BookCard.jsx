import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
} from '@mui/material';
import './BookCardStyle.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
const axios = require('axios')

export default function BookCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className='inner'>
      <Card>
        <CardContent className='content'>
          <span className='title'>{product.title}</span>
          <CardActionArea
            state={{ product: product }}
            component={Link}
            to={`/product`}
          >
            <CardMedia
              component='img'
              height='200'
              width='200'
              image={product.image}
              alt='not found'
              sx={{ objectFit: 'contain' }}
            />
            <span>$ {product.price}</span>
            <p>{product.description}</p>
          </CardActionArea>
          <CardActions>
            {product.single ? (
              <Button
                size='small'
                className='back'
                onClick={() => navigate('/products')}
              >
                Back
              </Button>
            ) : null}
            <Button size='small' className='add'>
              Add to Cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
