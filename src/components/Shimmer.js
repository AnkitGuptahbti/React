// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//     </div>
//   );
// };

// export default Shimmer;

const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[...Array(18)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gray-300 animate-pulse h-48 rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
