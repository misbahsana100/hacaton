import React from 'react'
import './website.css'
import download from './download.png'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home = () => {
    return (
        <div>
            <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      height='450px'
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/render-modern-bedroom-picture-id1289405140?b=1&k=20&m=1289405140&s=170667a&w=0&h=1m182LH-K4H0bR-KiuiJruJPXI8bqLg86ScioNbKUfs="
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height='450px'
      src="https://www.gannett-cdn.com/presto/2020/05/18/USAT/9ae54ef7-217d-4877-a614-4760325f9a9b-Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom.jpg?width=2560"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      height='450px'
      className="d-block w-100"
      src="https://i.pinimg.com/550x/bc/74/1d/bc741db40e5cb56705c74e45d1ed0af4.jpg"
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel>
            </div>
<br/>

<div>
<CardGroup> &nbsp; &nbsp; &nbsp; &nbsp;
  <Card className='cards'>
   
    <Card.Body>
      <Card.Text>
    <h2>ZIFAN HOTEL – TRANQUILITY REDEFINED</h2>  
    <p>At Zifan we aim to combine authentic local experiences and world-class hospitality services, with a focus on personalized attention, to make traveling truly comfortable for our clientle for our clients.

Located strategically in the heart of Karachi, Zifan Hotel & Suites offers the perfect blend of comfortable lodging, impeccable service and urban connectivity for all your business travel and tourism needs.  
    </p>
    </Card.Text>
</Card.Body>
  </Card>
&nbsp; &nbsp; 
  
  <Card className='card1'>
    <Card.Img variant="top"  src="https://media.istockphoto.com/photos/luxurious-apartment-master-bedroom-interior-with-bathroom-with-shower-picture-id1269416714?b=1&k=20&m=1269416714&s=170667a&w=0&h=y-7KXehLzBgkBiunl-bVMK3r4aTAOyBrVQK61LnQiks=" />
   
    
  </Card>
  &nbsp; &nbsp; &nbsp; &nbsp;
</CardGroup>
</div>
<br/>
            <div className='test'>
                <h1>Testimonials</h1>



                <Carousel className='caro'>
  <Carousel.Item interval={1000}>
  
   <p>The place is situated in a good location and it’s safe.
        The staff is exceptionally helpful, the housekeeping head
         Mukhtar Khan was always quick to answer for any help, Fardeen the guy at the reception was also great to deal with. The place and room is very clean, very comfortable, and easy to stay in.

</p>
<h2>Ammar, Jordan</h2>
<br/>

  </Carousel.Item>
  <Carousel.Item interval={500}>
    
   <p>Excellent service, well mannered staff 
       and they all are properly following the SOPs. Excellent taste of food items and relaxing environment

</p>
<h2>Zoya Saleem</h2>
<br/>

  </Carousel.Item>
  <Carousel.Item>
  <p>
  Awesome, clean & cozy rooms for a nice stay in Karachi. The best thing about this hotel is that you don’t listen to 
  the traffic of Shahrah-e-Faisal when you are inside. It gives you a feeling of serenity
</p>
<h2>Afaq Khan</h2>
  <br/>
  </Carousel.Item>
</Carousel>
            </div>


<br/>



            <div>
            <h1>   &nbsp; &nbsp;  Accomodation</h1>
           
           
                <CardGroup>
 &nbsp; &nbsp; &nbsp; &nbsp;
  <Card>
      <Card.Body>
  <Card.Title>Royal Plus Room</Card.Title>
  </Card.Body>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/40/35/63/4035639aa77a8734ef3c0b01084daa69.jpg" />
   
   
  </Card>
  &nbsp; &nbsp;
  <Card>
  <Card.Body>
  <Card.Title>
      Executive Room
</Card.Title>
</Card.Body>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/40/35/63/4035639aa77a8734ef3c0b01084daa69.jpg" />
   
    
     
  </Card>
  &nbsp; &nbsp;
  <Card>
      <Card.Body>
  <Card.Title>
      Standard Room
</Card.Title>
</Card.Body>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/40/35/63/4035639aa77a8734ef3c0b01084daa69.jpg" />
   
    
     
  </Card>
 &nbsp; &nbsp; &nbsp; &nbsp;

</CardGroup>


            </div>
<br/><br/>
            <div className='footer'>
 &nbsp; &nbsp; &nbsp; &nbsp;
<br/>
<br/>
         <div>
             <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA8FBMVEUAAAAAAAMsHxhSMh5OMyEyIhUDAAAAAgFONCUAAAZKMSQKAAMrHxBSMiK/mGY3Jh0TCwhfOyVqQCdJKxnBmGttQiWphl1oQS0kGhdYNyVILx8dFBAlFxJuWUQMCggyHxMcEA4eDAAlEgxsPih9ZlSRdU2TdFiae1aRc1GCZ0pWSDY4LR1BKBZiPiQxIRqyj2llUD6fhGGffF24lmZdUDlFPjSJc1VAIREnIB12XULImmiJb1hZRDFDOClhVkgqKCguKB07KRRPNxsdGBk+LiU9JRpZOS5lRDEyJB9QQDQ3LyZ8YEy9mXNMQSx6aEwqGxpBIXfbAAAEfUlEQVR4nO3bD1PaSBgG8HcDbPgjsImBBDaEKJ4oBYJyeljr1baiYtV+/29zm4SAVI6buZk7KDy/0ZhAmFme2V3ehJUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4XLEbE192SX0cYF6wmm5ri+gL9ahXGwny8XiVimkYt3xfrbtSmOzg4ODzca9bTRqtl1soYjUvpR78dt6uhdvvktNH5QH7XqPRcYhiSP+PUD0oxy4p/zgf0o2dLzPXvMeJn1ZPQ+Xk1GEaBDX8nM00Iaxl+Md/fezlVPc3q7GcR1jLvQrm0Spd/NBHWMoxy4VbN557Huc5pZJUG5SUhwpRKxumOwj85uvp4XMBH4Sr9dGbalQbWNa57/pbOSBqpQpiQGpCnwad1N2iz1c1mNG8R3Zxdrbsxm0tX07qsVTTi4SyVOWoIiuZ7WIbRn8VWKt6/6Ky3LZvv0rHNVHLAMLGvIp/J7LWKkt4UVvoa27PRJh8/j82WaRqp/W54/8+XUrpZ3HNYSljBbaFo91RgtmnbZsworLtdm2liWZc3zP3ytdezW0lcFcNfd7s2EaOns1IpOLl6eRp9KxSE7x+4rhTCW3fDNtVto2pZpZI1HAbVavUcOf2D3O2kcXrSjm4wX6+7Mb8U1FoA/4F+PpbNp+7IL6aVfLjJECvEe4m4wGKUKfrzUt67Izbdd/pbP0o5L0RyhZpGXrOZyXwx+plMRjIy6uoo0WxOX1A2uj1/tkpEtGZf9oz3tz6sKcZrh9MrGa0YP0LG4ik8+h2rEt41D5KLHlGrpynuaOX6boTFKHfvJgfTsIgM/f0yo3F0ueMaydnCoHqNcuF55f0dWZWkz7MiLbktsySs8fTS0LWn5/uq+9Xvo93dCIsx/iYr2gt7VjiujIVRFR6UZw+5hoyiEeFYVX1LDUsV1g5Q89WbrJKwpPaQ0RJqupeaNjZnD4zGvSitKKworZ3oWYwK927uzV29vXjOKhfNVDo11SWWKbaM2bFSV/MWn4YVprULYemkL/SrWVg/DUNO3driK137MOlZUVo7EJbqV4eLH/l7s9LBe3tXtF7LxefxZBPO8klYVC9u/ZzFycvO1z6yXFQX3EdPsPDTcJ5i3XhfRLkPrph1t7vKthelOmWNfDaWzpN8sG27V1Eb+5Goxubv3q0te7lbK2RnB3fjLQ9rcZJZeK86W/KsrvNVX4ltd1j/krz9cDPpDBqRQefThD89ynU3atM4N4Pvx+dBYC0Yfm84R0PrGctGkrH1NLiuhsmUws1zEATVIDh7eZlMLj5HJ3ybaGtt5WZg5HReq9bHUiloX74OOjeP+NeBZVSXkSM6eg6q14PJY/TVjvBI+r4jpKci02SOjTwhuZCOlEJuf1G6irhuv5JwZseM1GWi86MgpSZU2V9W9YXjOn3uCKE53iPf5aUQjHvxssikXlDVBGce13UmckLtecQ97qlCX50pdG+3exYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIb7C+AdWLCKEyNQAAAAAElFTkSuQmCC'/>
         </div>
 &nbsp; &nbsp; &nbsp; &nbsp;
 <br/>

         <div>
             <h2>LOCATION</h2>
             <br/>
             <a href=''>
             29-B, Off Sharah-e-Faisal <br/>
PECHS Block 6
Karachi, Pakistan
             </a>
         </div>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <br/>

         <div>
         <h2>Contact</h2>
         <a href=''>
         +92 (21) 34322140-43
             </a>
             <br/>
             <a href=''>info@zifanhotels.com
             </a>
         </div>

<br/>
         
         
            </div>
           
        </div>
    )
}

export default Home
