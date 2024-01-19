import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Movie.css"
import { MDBFooter } from 'mdb-react-ui-kit';


function Movie() {
    const [search,setSearch]=useState("")
    const[movie,setMovie]=useState({})
    
   
    const SearchPress =()=>{
      const key="fa1c9c03"
      const base=` https://www.omdbapi.com/?apikey=${key}&t=${search}`
    
     fetch(base)
     .then((res)=>res.json())
     .then((result)=>{
      setMovie(result);
      console.log(result);
     })
     
    }

  return (
  

  

<div className='mov container'>

<Row className=' d-flex justify-content-between align-items-center'>
      <Col lg={4}></Col>
      <Col lg={4} className=' row1 border border-2 border-light container'> <h1 className=' head mt-2 mb-2 text-center fs-2 fw-bolder '>Movie App</h1>
    <div className='div1 d-flex align-items-center'>
    <input className='inp form-control mb-2'  type="text" placeholder='Enter Movie Name' onChange={(e)=>setSearch(e.target.value)} />
    <br />
    </div>
    <div className='d-flex justify-content-center'>
    <button className='btn btn-info mb-5' onClick={SearchPress}>search</button>
</div>

{typeof movie.Ratings !="undefined"?(<div>
    <div>
      <h2 className='head2 text-center text-danger mt-2'><b>{movie.Title}</b></h2>
      
    </div>
    <div className='d-flex justify-content-center'>
    <img className='img-fluid border border-1 border-light' src={movie.Poster} alt="" />
</div>
<div><h6 className='text-center text-light mt-2'> Released on : {movie.Released}</h6></div>
<div>

<h6 className='text-center text-light mt-2'>Directed by : <b className=' text-info'>{movie.Director}</b></h6>
        <h6 className='text-center text-light mt-2'>Top Cast : <b className=' text-info'>{movie.Actors}</b></h6>
    </div>
    <div>
        <h5 className='text-center text-light'>IMDb : <b className='text-warning'>{movie.Ratings[0].Value}  &#9733;</b></h5>
        </div> 
        <hr className='text-light'/>
    <div>
     
    <b className='text-center text-warning'>StoryLine :</b> <p className='para'> {movie.Plot}</p>
    </div>
   
    
    </div>):('')}</Col>
      <Col lg={4}></Col>
    </Row>

<div className='mt-4'>
<MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <b className='text-light' href=''>
          Abhinu/Movie App
        </b>
      </div>
    </MDBFooter>
</div>

   








   
    </div>


  )
}

export default Movie