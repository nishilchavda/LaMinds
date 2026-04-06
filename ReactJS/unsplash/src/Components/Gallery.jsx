import { ArrowDown, Bookmark, Plus } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //api fetch
  useEffect(() => {
    const FetchImg = async () => {
      if (loading) return;
      setLoading(true);
      try {
        let response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=100`,
        );
        setImg((prev) => [...prev, ...response.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchImg();
  }, [page]);

  // scroll effect
  useEffect(() => {
    const handelScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);


  return (
    <>
      <section>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
          {/* Fetch Images from API */}
          {img.map((data) => {
            return (
              <div
                key={data.id}
                className="relative mb-4 break-inside-avoid shadow group"
              >
                {/* Image */}
                <img
                  src={data.download_url}
                  alt="image"
                  className="w-full object-cover"
                />

                {/* Overlay Div */}
                <div className="absolute top-0 bg-black/50 inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  {/* top icons */}
                  <div className="flex justify-end gap-2">
                    <div className="bg-white p-2 rounded-md">
                      <Bookmark />
                    </div>
                    <div className="bg-white p-2 rounded-md">
                      <Plus />
                    </div>
                  </div>

                  {/* bottom icons */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-white font-bold">{data.author}</h1>
                    <div className="bg-white p-2 rounded-md">
                      <ArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
