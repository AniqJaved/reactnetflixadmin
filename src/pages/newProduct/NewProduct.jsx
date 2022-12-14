import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {

  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) =>{
    const value = e.target.value;
    setMovie({...movie, [e.target.name]: value})
  }

  console.log(movie)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgSm" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Thomas shelby" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description" name="description" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file"/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file"/>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
