import React, { useState } from "react";
import "../Clothers/HomeCl.css";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import VertikalNavBar from "../../VertikalNavBar";
import Img1 from "../../Img/Images/img2.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

function Home() {
  const [data] = useState([
    {
      id: 0,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 1,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 2,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 3,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 4,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 5,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 6,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 7,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 8,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 9,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 10,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 11,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 12,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      id: 13,
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
  ]);
  return (
    <div>
      <a href="#">
        <div className="tepaga">
          <p>△</p>
        </div>
      </a>
      <NavBar />
      <div className="Cite_body">
        <div className="VertikalNav_Bar">
          <VertikalNavBar />
        </div>
        <div className="Shopping_Card">
          <div className="Shopping_Card_title">
            <select name="" id="">
              <option value="1">Sort by: Most popular</option>
              <option value="2">Sort by: A - Z</option>
              <option value="3">Sort by: Z - A</option>
            </select>
          </div>
          <hr />
          <div className="senter">
            <div className="shopping_cards">
              {data.map((post) => (
                <div className="card">
                  <div className="Hover_div">
                    <div className="Like_">
                      <AiOutlineHeart />
                    </div>
                    <div className="Add_to_card">
                      <button>
                        ADD TO CART <BsCartPlus />
                      </button>
                    </div>
                  </div>
                  <div className="card_img">
                    <img src={post.img} alt="Img_1" />
                  </div>
                  <div className="card_name">
                    <p>{post.name}</p>
                  </div>
                  <div className="card_cost">
                    <p>{post.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="Pagination">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>{">"}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
