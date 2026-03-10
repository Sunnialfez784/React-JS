const RightCardContent = ({tag,id,color}) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
      <h2 className="bg-white rounded-full w-12 h-12 flex justify-center items-center text-xl font-semibold">{id}</h2>
      <div>
        <p className="text-xl text-shadow-2xl font-semibold text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus possimus natus iure ipsam animi inventore distinctio quisquam.</p>
        <div className="flex justify-between">
          <button style={{backgroundColor:color}} className="text-white font-medium px-8 py-3 rounded-full">{tag}</button>
          <button className="text-white font-medium px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
