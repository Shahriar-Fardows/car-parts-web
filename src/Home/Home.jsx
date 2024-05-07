import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Discount from "./Discount/Discount";
import SelectVehicle from "./SelectVehicle/SelectVehicle";
import HotIdeas from "./HotIdeas/HotIdeas";
import FeatureBrands from "./FeatureBrands/FeatureBrands";
import Description from "./Description/Description";

const Home = () => {
  return (
    <div>
      <Banner />
      <SelectVehicle />
      <Discount />
      <Categories />
      <HotIdeas />
      <Description />
      <FeatureBrands />
    </div>
  );
};

export default Home;
