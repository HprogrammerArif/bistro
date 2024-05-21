import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectonTitle/SectionTitle";
import './Feature.css'

const Fetured = () => {
  return (
    <div className="featured-item pt-8 my-20 text-white bg-fixed">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="md:flex justify-center bg-black bg-opacity-20 items-center pb-20 pt-12 px-36">
        <div>
          <img className="" src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <h3>March 20, 2023</h3>
          <p className="uppercase">WHERE CAN I GET SOME?</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Default</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
