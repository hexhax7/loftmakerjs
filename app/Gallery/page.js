"use client";

import Contact from "../../components/contact/page";

import { Inter } from "next/font/google";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { React, useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [enableFunctionality, setEnableFunctionality] = useState(true);

  useEffect(() => {
    // Function to toggle the image size and position
    function toggleSizeAndPosition(event) {
      const gallery = event.currentTarget;

      if (!gallery) return;

      if (gallery !== enlargedImage) {
        // Close the previously enlarged image (if any)
        closeEnlargedImage();

        // Calculate the aspect ratio of the image
        const aspectRatio = gallery.offsetWidth / gallery.offsetHeight;

        // Define different scale factors for landscape and portrait images
        let scaleFactor = 1.1; // Default scale factor
        if (aspectRatio > 1) {
          // Landscape image
          scaleFactor = 1.5; // Adjust the scale factor for landscape images
        }

        // Apply the scale factor and center the image
        gallery.style.transform = `scale(${scaleFactor})`;
        gallery.style.position = "fixed";
        gallery.style.top = "50%";
        gallery.style.left = "50%";
        gallery.style.transformOrigin = "center center";
        gallery.style.transition = "transform 0.3s ease-in-out";
        gallery.style.zIndex = "1000";
        gallery.style.marginLeft = `-${gallery.offsetWidth / 2}px`;
        gallery.style.marginTop = `-${gallery.offsetHeight / 2}px`;

        // Create a blurred background
        const blurredBackground = document.createElement("div");
        blurredBackground.className = "blurred-background"; // Add a class for easy removal
        blurredBackground.style.position = "fixed";
        blurredBackground.style.top = "0";
        blurredBackground.style.left = "0";
        blurredBackground.style.width = "100%";
        blurredBackground.style.height = "100%";
        blurredBackground.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        blurredBackground.style.zIndex = "999";
        blurredBackground.addEventListener("click", closeEnlargedImage);

        document.body.appendChild(blurredBackground);

        // Set the currently enlarged image
        setEnlargedImage(gallery);
      } else {
        // Close the clicked image if it's the already opened one
        closeEnlargedImage();
      }
    }

    // Function to close the enlarged image
    function closeEnlargedImage() {
      if (enlargedImage) {
        enlargedImage.style.transform = "none";
        enlargedImage.style.position = "static";
        enlargedImage.style.transition = "none";
        enlargedImage.style.zIndex = "auto";
        enlargedImage.style.marginLeft = "2%";
        enlargedImage.style.marginTop = "5%";

        // Remove the blurred background
        const blurredBackground = document.querySelector(".blurred-background");
        if (blurredBackground) {
          blurredBackground.remove();
        }

        // Clear the currently enlarged image
        setEnlargedImage(null);
      }
    }

    // Check the screen width and enable/disable functionality accordingly
    if (enableFunctionality) {
      // Try to find all elements with the class "Gallery_FlexBox_image"
      const galleries = document.querySelectorAll(".Gallery_FlexBox_image");

      // Loop through each element and add the click event listener
      galleries.forEach((gallery) => {
        if (gallery) {
          gallery.addEventListener("click", toggleSizeAndPosition);
        }
      });

      // Add a click event listener to the document to close the image
      const closeOnClickOutside = (event) => {
        // Check if the click event occurred outside the enlarged image
        if (enlargedImage && !enlargedImage.contains(event.target)) {
          closeEnlargedImage();
        }
      };

      document.addEventListener("click", closeOnClickOutside);

      // Don't forget to remove the event listener when the component unmounts
      return () => {
        galleries.forEach((gallery) => {
          if (gallery) {
            gallery.removeEventListener("click", toggleSizeAndPosition);
          }
        });

        // Remove the click event listener from the document
        document.removeEventListener("click", closeOnClickOutside);
      };
    }
  }, [enlargedImage, enableFunctionality]);

  useEffect(() => {
    // Listen for changes in the screen width and update the enableFunctionality state
    function handleResize() {
      if (window.innerWidth > 800) {
        setEnableFunctionality(true);
      } else {
        setEnableFunctionality(false);
      }
    }

    // Initial check for screen width
    handleResize();

    // Add a listener for screen resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NextSeo
        title="Loft Makers portfolio"
        description="Loft Makers London Ltd Loft conversion and side 
        extension specialists. Based in Muswell Hill and serve all of north London"
        canonical="https://loftmaker.co.uk/Gallery"
        openGraph={{
          url: "https://loftmaker.co.uk/Gallery",
          title: "Loft Maker London Ltd",
          description:
            "Loft Makers London Ltd Loft conversion and side extension specialists. Based in Muswell Hill and serve all of north London",

          siteName: "Loft Maker London Ltd",
        }}
      />
      <div className="MGallery">
        <div className="Gallery_FlexBox">
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/56.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/49.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/Loft Extension Muswell Hill.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/Loft Extension Enfield.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Bathrooms/Bathroom Renovation Muswell Hill.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/London Fibreglass Roof GRP .jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/North London Loft Extension.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/39.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/41.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/31.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/37.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/42.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/38.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/London Extension Muswell Hill.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/40.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
        </div>
        <div className="Gallery_FlexBox">
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/54.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Bathrooms/51.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/Loft Specialist North London Enfield.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/Stair Installation North London.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/49.jpeg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/35.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Bathrooms/Bathroom Renovation Enfield.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/34.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/33.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/Kitchen Installation,Chelsea.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Bathrooms/55.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/London Loft Extension Enfield.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/46.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
        </div>
        <div className="Gallery_FlexBox">
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/Enfiled Fibre Glass Roof.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/28.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Bathrooms/Loft  ensuite Muswell Hill.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/Kitchen Extension Clapham.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Roofs/Enfield Loft Specailist.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/Extension Specialist Clapham.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/52.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/Loft Specialist North London.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/53.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/Loft Extension North London.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/North London Loft Specailist Muswell Hill.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Kitchens/58.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
          <Image
            className="Gallery_FlexBox_image"
            loading="lazy"
            src="/GallerySlide/Plastering/43.jpg"
            width="596"
            height="795"
            blurDataURL="data:..."
            placeholder="blur"
            alt="Loft and Extension Specialist Muswell Hill "
          />
        </div>
      </div>
      <Contact />
    </>
  );
}
