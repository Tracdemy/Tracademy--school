import Button from "../../../components/button/Button";
import CategoryComponent from "../../../components/categoryComponent/CategoryComponent";
import "./category.css"

function Category() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex justify-between my-5 flex-col md:flex-row gap-4 mx-4">
          <div>
            <h2 className="font-bold text-[30px] category">
              Explore our subjects by Category
            </h2>
            <p>
              Browse top classes easier with the help of our subject categories.
            </p>
          </div>
          <Button
            background="[white]"
            color="[#5956E9]"
            bgColor="[#5956E9]"
            textcolor="[white]"
          >
            All category
          </Button>
        </div>
      </div>
      <div>
        <div className="flex items-center flex-wrap justify-center">
          <CategoryComponent
            title="Design & Development"
            image="./svg/design_development.svg"
            description="250+ videos available"
            color="#EBF9FF"
          />
          <CategoryComponent
            title="Geography"
            image="./svg/geography.svg"
            description="50+ videos available"
            color="#4647DE"
          />
          <CategoryComponent
            title="Arts and Crafts"
            image="./svg/arts_crafts.svg"
            description="100+ videos available"
            color="#FFF4EF"
          />
          <CategoryComponent
            title="Sciences"
            image="./svg/science.svg"
            description="500+ videos available"
            color="#FDEFEE"
          />
          <CategoryComponent
            title="Maths & Statistics"
            image="./svg/maths_statistics.svg"
            description="250+ videos available"
            color="#FBF0FD"
          />
          <CategoryComponent
            title="Business & Marketing"
            image="./svg/business.svg"
            description="250+ videos available"
            color="#F0FCF6"
          />
        </div>
      </div>
    </div>
  );
}
export default Category;
