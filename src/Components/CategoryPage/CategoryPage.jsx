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
import { Link } from "react-router-dom";
function CategoryPage() {
  const categories = [
    "Romance",
    "Mystery",
    "Drama",
    "Fantasy",
    "Thriller",
    "Suspense",
    "Magic",
    "Sci-Fi",
    "Action",
    "Love",
    "Survival",
    "Adventure",
  ];
  const types = [
    "Video Song",
    "Web Series",
    "Tv Show",
    "Short Film",
    "Movie",
    "Documentary",
    "Trailer",
  ];

  return (
    <>
      {/* <--- CATEGORY SECTION --->  */}
      <div className="category-header">Categories</div>
      <div className="genres-section">
        <h2 className="genres-header">Genres</h2>
        <div className="genres-container">
          {categories.map((category) => (
            <div className="genres-card">
              <img src={card_1} alt="" />
              <Link className="link" to={`/home?value=${category}&key=keywords`}>{category}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* <--- TYPE SECTION --->  */}
      <div className="types-section">
        <h2 className="types-header">Types</h2>

        <div className="types-container">
          {types.map((type)=>(
          <div className="type-card">
            <img src={bluebg} alt="" />
            <span>{type}</span>
          </div>
          ))}
         
        </div>
      </div>

      <FooterForSignIn />
    </>
  );
}
export default CategoryPage;
