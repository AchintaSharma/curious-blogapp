
import BigAdvertisement from "../../components/common/advertisement/BigAdvertisement.tsx";
import SmallAd from "../../components/common/advertisement/SmallAd.tsx";
import MainCard from "../../components/common/cards/MainCard.tsx";
import NewsLetter from "../../components/common/cards/NewsLetter.tsx";
import CommonCards from "../../components/common/cards/commonCards/CommonCards.tsx";

const Home = () => (
  <div className="max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-4">
    {/* grid starts here */}
    <div className="grid grid-cols-12 gap-12">
      {/* first grid */}
      <div className=" col-span-7 border border-green-700">
        {/* title */}
        <h2 className=" font-semibold text-2xl text-Zomp">Popular Blogs </h2>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>

      {/* /////////////////////////////////////////////////////////////// */}
      {/* second grid */}
      <div className=" col-span-5 border border-red-700">
        {/* title */}
        <h2 className=" font-semibold text-2xl text-Zomp">Popular Blogs </h2>

        {/* news letter */}
        <div className=" flex justify-end">
          <NewsLetter />
        </div>

        {/* advertisement */}
        <SmallAd />

      </div>
    </div>

    {/* Advertisement */}
    <BigAdvertisement />

    {/* Recomended */}
    <CommonCards />
  </div>
);

export default Home;
