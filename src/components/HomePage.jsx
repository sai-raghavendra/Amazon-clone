import { Carousel, HomePageCard, CarouselCategory, CarouselProducts } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="w-full max-w-[1500px] mx-auto">
        <Carousel />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 -mt-10">
          <HomePageCard
            title={"we have suprice for you"}
            img={"../images/home_grid_1.jpg"}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"see more"}
          />
          <HomePageCard
            title={"Sprinng sale"}
            img={"../images/home_grid_6.jpg"}
            link={"see the deal"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"see more"}
          />
          <HomePageCard
            title={"Family paln: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden w-full"
              src={"../images/banner_image_2.jpg"}
            />
          </div>
        </div>
        <CarouselProducts />
        <CarouselCategory />
        <div className="h-[120px] sm:h-[200px]">
          <img
            className="h-full w-full object-cover m-auto"
            src={"../images/banner_image.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
