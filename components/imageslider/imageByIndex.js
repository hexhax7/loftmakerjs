
import image2 from "/public/Current-project-images/slide-2.jpg";
import image3 from "/public/Current-project-images/3.jpg";
import image4 from "/public/Current-project-images/4.jpg";
import image5 from "/public/Current-project-images/5.jpg";
import image7 from "/public/Current-project-images/7.jpg";
import image8 from "/public/Current-project-images/8.jpg";
import image10 from "/public/Current-project-images/10.jpg";
import image12 from "/public/Current-project-images/12.jpg";
import image13 from "/public/Current-project-images/13.jpg";
import image14 from "/public/Current-project-images/14.jpg";
import image17 from "/public/Current-project-images/17.jpg";
import image19 from "/public/Current-project-images/19.jpg";
import image21 from "/public/Current-project-images/21.jpg";
import image24 from "/public/Current-project-images/24.jpg";
import image26 from "/public/Current-project-images/26.jpg";
import image27 from "/public/Current-project-images/27.jpg";
import image31 from "/public/Current-project-images/31.jpg";
import image32 from "/public/Current-project-images/32.jpg";
import image33 from "/public/Current-project-images/33.jpg";
import image34 from "/public/Current-project-images/34.jpg";
import image35 from "/public/Current-project-images/35.jpg";

// Add all these images to the existing 'images' array
export const images = [image2, image3, image4, image5, image7, image8, image10, image12, image13, image14, image17, image19, image21, image24, image26, image27, image31, image32, image33, image34, image35];




const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
