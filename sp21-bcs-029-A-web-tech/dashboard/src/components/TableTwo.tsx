
const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsosxClHhPuWbQfQNX1sC4Nu2T5H-GupxvfA&usqp=CAU"} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Hitler
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">History</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$29</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">22</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$45</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsosxClHhPuWbQfQNX1sC4Nu2T5H-GupxvfA&usqp=CAU"} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">COMSAT</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Horror</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$46</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">34</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$25</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsosxClHhPuWbQfQNX1sC4Nu2T5H-GupxvfA&usqp=CAU"} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
             Harry
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">magical</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$33</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$24</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsosxClHhPuWbQfQNX1sC4Nu2T5H-GupxvfA&usqp=CAU"} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">nep0lean</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">History</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$49</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">72</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$20</p>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
