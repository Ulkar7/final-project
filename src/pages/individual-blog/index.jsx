import IndividualBlogBody from "../../components/individual-blog/individual-blog-body";
import IndividualBlogButtons from "../../components/individual-blog/individual-blog-buttons";
import IndividualBlogPopular from "../../components/individual-blog/individual-blog-popular";
import IndividualSlide from "../../components/individual-blog/individual-slide";

const IndividualBlog = () => {
  return (
    <>
      <IndividualSlide />
      <IndividualBlogBody />
      <IndividualBlogButtons />
      <IndividualBlogPopular />
    </>
  );
};

export default IndividualBlog;
