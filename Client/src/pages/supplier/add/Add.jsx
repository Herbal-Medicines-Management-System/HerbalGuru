import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Product</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
             
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat">
              <option value="aromatherapy">Aromatherapy</option>
              <option value="Bath&Shower">Bath & Shower</option>
              <option value="Body&MassageOils">Body & Massage Oils</option>
              <option value="FaceMasks&HandSanitizers">Face Masks & Hand Sanitizers</option>
              <option value="HairCare">Hair Care</option>
              <option value="LipCare">Lip Care</option>
              <option value="Lotion">Lotion</option>
              <option value="MedicineCabinet">Medicine Cabinet</option>
              <option value="Men'sGrooming">Men's Grooming</option>
              <option value="OralCare">Oral Care</option>
            </select>

            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                />
              </div>
              
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
             
            ></textarea>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. One-page web design"
             
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
             
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
             
            />
            <label htmlFor="">Add Features</label>
            <form action="" className="add">
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
          
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
