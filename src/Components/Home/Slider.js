import React from 'react';
import { Carousel } from "3d-react-carousal";

const slides = [
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
          <img
            src="https://sf.ezoiccdn.com/ezoimgfmt/networkencyclopedia.com/wp-content/uploads/2019/08/hacking.jpeg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-2"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
          />       
        <div class="px-5 pb-5">
              <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              PG Diploma in Information Security and System Administration
              </h2>
        </div>
  </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
          <img
            src="https://www.kionetworks.com/hubfs/ALCHEMYLABS/ethical-hacking.jpg"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
          />       
        <div class="px-5 pb-5">
              <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Ankit Fadia Certified Ethical Hacker Course
              </h2>
        </div>
  </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/ethicalhacking.jpg"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
          />       
        <div class="px-5 pb-5">
              <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Certified Professional Forensic Consultants
              </h2>
        </div>
  </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/1589313176-GettyImages-1127637966.jpg"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
          />       
        <div class="px-5 pb-5">
              <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Certified Information Security Consultant
              </h2>
        </div>
  </div>,
  <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <img
      class="p-8 rounded-t-lg"
      src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/hacking.jpg"
      alt="product"
    />

    <div class="px-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      Certified Professional Hacker
      </h5>
    </div>
  </div>,
  <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <img
      class="p-8 rounded-t-lg"
      src="https://www.bleepstatic.com/content/hl-images/2022/01/14/hacker-hacking.jpg"
      alt="product"
    />

    <div class="px-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      M.Tech in Information Security and Computer Forensic
      </h5>
    </div>
  </div>
];

const Slide = () => {
    return (
        <div>
            <div>
      <Carousel slides={slides} autoplay={true} interval={2000} />
    </div>
      </div>
    );
};

export default Slide;