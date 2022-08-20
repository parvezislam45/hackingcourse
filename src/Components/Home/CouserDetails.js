import React from 'react';

const CouserDetails = ({ course }) => {
    const { name, img, price } = course
    return (
        <div>
            <div class="container w-80">
                <div class="max-w-md w-full bg-gray-900 shadow-2xl rounded-xl p-6 border-solid border-2 border-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-700">
                    <div class="flex flex-col ">
                        <div class="relative h-62 w-full mb-3">
                            <div class="absolute flex flex-col top-0 right-0 p-3">
                            </div>
                            <img
                                src={img}
                                alt="Just a flower"
                                class=" w-full object-fill  rounded-2xl"
                            />
                        </div><h2 class="text-center">{name}</h2>
                        <h2 class="text-center">{price}</h2>
                        <div className="mt-3 text-center justify-center items-center">
                        <button class="btn btn-outline">Enroll Now</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CouserDetails;