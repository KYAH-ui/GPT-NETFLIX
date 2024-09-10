
const VideoTitle = ({title , overview}) => {
  return (
    <div className="pt-[19%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-5 text-lg w-2/4">{overview}</p>
    <div className="">
     <button className="bg-cyan-950 text-white hover:opacity-70 p-4 text-xl rounded-lg"> ▶️Play</button>
     <button  className="bg-gray-700 mx-2 text-white p-4 text-xl bg-opacity-50 rounded-lg">More Info</button>
   </div> </div>
  );
};

export default VideoTitle;