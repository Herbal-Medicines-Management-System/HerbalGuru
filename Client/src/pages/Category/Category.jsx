import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Category.scss';
import { Link } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../utils/getCurrentUser';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import IconButton from '@mui/material/IconButton';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const Category = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data1, loading, error1 } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/adds`).then((res) => {
        return res.data;
      }),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  const handleReview = (id) => {
    console.log('my reviewID', id);
    navigate(`/review/${id}`);
  };
  return (
    <div className='category'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {data1?.map((item) => (
            <div className='inputItem' key={item.id}>
              <input
                type='checkbox'
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor=''>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>Filter by Price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src='/img/bath_banner.jpg' alt='bath_banner' />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
        <hr></hr>

        {isLoading ? (
          'loading'
        ) : error ? (
          'error'
        ) : (
          <div className='container'>
            <div className='cardContainer'>
              {data.map((add) => (
                <Card
                  sx={{ maxWidth: 345, margin: '5vh', display: 'inline-block' }}
                  key={add._id}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='240'
                      width='100'
                      src={add.cover}
                      alt='green iguana'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {add.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {add.shortDesc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() => handleReview(add._id)}
                    >
                      More Details
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
