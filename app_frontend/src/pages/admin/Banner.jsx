import { Banner } from "flowbite-react";
// import { HiX } from "react-icons/hi";
// import Button from "flowbite-react";
import "../../assets/css/admin.css";

function BannerComp(value) {
  return (
    <div className="p-2 border-2 border-gray-200  border-dashed rounded-lg dark:border-gray-700 mt-4">
      <Banner>
        <div
          //   style={{ opacity: "0.5" }}
          className="flex flex-col justify-between font-para rounded-lg w-[100%] border-gray-100 bg-green-600 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl"
        >
          <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
            <div className="mb-2 flex items-center bg-inherit border-green-200 dark:border-green-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-6" alt="Flowbite Logo" /> */}
              <span className="self-center font-para ml-3 whitespace-nowrap text-white text-4xl font-bold dark:text-white md:pr-6">
                {value.value}
              </span>
            </div>
            <p className="flex items-center text-lg font- text-white dark:text-gray-400">
              {value.text}
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center">
            {/* <Button href="#">Sign up</Button> */}
            {/* <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
        </BannerCollapseButton> */}
          </div>
        </div>
      </Banner>
    </div>
  );
}

export default BannerComp;
