import { Bookmark } from "lucide-react";

const ApplyCard = ({data}) => {
  return (
    <>
      <div className="card bg-white w-full max-w-sm rounded-xl p-6 overflow-hidden shadow-2xl relative">
        <div className="top flex items-center justify-between">
          <img
            src={data.logo}
            alt=""
            className="rounded-full w-10 h-10 bg-white"
          />
          <div className="w-auto h-auto px-2 py-1 rounded-xl bg-gray-200">
            <p className="font-bold text-sm">
              Save <Bookmark className="inline-block w-4" />
            </p>
          </div>
        </div>

        <div className="title flex items-center justify-baseline gap-3">
          <p className="font-bold text-xl">{data.company}</p>
          <p className="inline-block text-sm text-gray-400">{data.posted}</p>
        </div>
        <div className="position mt-3">
          <h1 className="text-2xl font-bold">{data.position}</h1>
        </div>
        <div className="mt-3">
          <p className="bg-gray-200 px-3 py-1 inline-block rounded-xl mr-2">
            {data.jobType}
          </p>
          <p className="bg-gray-200 px-3 py-1 inline-block rounded-xl">
            {data.level}
          </p>
        </div>
        <div className="income mt-30 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-sm">{data.salary}</h1>
            <p className="inline-block text-sm text-gray-400">{data.location}</p>
          </div>
          <div className="bg-black px-4 py-2 rounded-2xl text-white">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyCard;
