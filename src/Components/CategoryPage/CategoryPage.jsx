import "./CategoryPage.css";

import bluebg from "../../assets/categorypageAssets/bluebackground.webp";
import card_1 from "../../assets/categorypageAssets/categorycard_1.webp";
import card_2 from "../../assets/categorypageAssets/categorycard_2.webp";
import card_3 from "../../assets/categorypageAssets/categorycard_3.webp";
import card_4 from "../../assets/categorypageAssets/categorycard_4.webp";
import card_5 from "../../assets/categorypageAssets/categorycard_5.webp";
import card_6 from "../../assets/categorypageAssets/categorycard_6.webp";
import card_7 from "../../assets/categorypageAssets/categorycard_7.webp";
import card_9 from "../../assets/categorypageAssets/categorycard_9.webp";

import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import NavbarforSignIn from "../NavbarForSignIn/NavbarForSignIn";
function CategoryPage() {
  return (
    <>
      {/* <--- CATEGORY SECTION --->  */}
      <div className="category-header">Categories</div>
      <div className="genres-section">
        <h2 className="genres-header">Genres</h2>

        <div className="genres-container">
          <div className="genres-card">
            <img src={card_1} alt="" />
            <span>Romance</span>
          </div>
          <div className="genres-card">
            <img src={card_2} alt="" />
            <span>Mystery</span>
          </div>
          <div className="genres-card">
            <img src={card_3} alt="" />
            <span>Drama</span>
          </div>
          <div className="genres-card">
            <img src={card_4} alt="" />
            <span>Fantasy</span>
          </div>
          <div className="genres-card">
            <img src={card_6} alt="" />
            <span>Thriller</span>
          </div>
          <div className="genres-card">
            <img src={card_7} alt="" />
            <span>Suspense</span>
          </div>
          <div className="genres-card">
            <img src={card_9} alt="" />
            <span>Magic</span>
          </div>
          <div className="genres-card">
            <img src={card_1} alt="" />
            <span>Sci-Fi</span>
          </div>
          <div className="genres-card">
            <img src={card_3} alt="" />
            <span>Action</span>
          </div>
          <div className="genres-card">
            <img src={card_5} alt="" />
            <span>Love</span>
          </div>
          <div className="genres-card">
            <img src={card_6} alt="" />
            <span>Survival</span>
          </div>
          <div className="genres-card">
            <img src={card_7} alt="" />
            <span>Adventure</span>
          </div>
        </div>
      </div>

      {/* <--- TYPE SECTION --->  */}
        <div className="types-section">
      <h2 className="types-header">Types</h2>

      <div className="types-container">
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Video Song</span>
        </div>
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Web Series</span>
        </div>
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Tv Show</span>
        </div>
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Short Film</span>
        </div>
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Movie</span>
        </div>
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Documentary</span>
        </div>
        <div className="type-card">
            <img src={bluebg} alt="" />
          <span>Trailer</span>
        </div>
      </div>
      </div>

      <FooterForSignIn/>
    </>
  );
}
export default CategoryPage;
