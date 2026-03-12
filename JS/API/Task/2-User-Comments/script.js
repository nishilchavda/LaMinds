function commentsData(){
    fetch("https://corsproxy.io/?https://jsonplaceholder.typicode.com/comments?limit=5")
    .then(function(rawData){
        console.log(rawData);
        return rawData.json();
    })
    .then((data)=>{
        data.forEach(user => {
            RenderUI(user);
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}
commentsData();


function RenderUI(user) {
  let card = document.querySelector(".card");

  card.innerHTML += `<div
        class="flex items-center justify-center min-h-screen bg-gray-100 p-4"
      >
        <div
          class="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-100"
        >
          <div class="p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="flex-shrink-0">
                <div
                  class="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg"
                >
                  E
                </div>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-semibold text-gray-900 truncate">
                  ${user.name}
                </p>
                <p class="text-xs text-gray-500 truncate">${user.email}</p>
              </div>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                Post #${user.id}
              </span>
            </div>

            <div class="mt-2">
              <p class="text-gray-600 text-sm leading-relaxed italic">
              "${user.body}"
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between border-t pt-4">
              <div class="flex space-x-4 text-gray-400">
                <button
                  class="flex items-center text-xs hover:text-indigo-600 transition"
                >
                  <svg
                    class="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 10h4.757c1.246 0 2.25 1.004 2.25 2.25v6.75c0 1.246-1.004 2.25-2.25 2.25H5.25A2.25 2.25 0 013 19.007V12.25c0-1.246 1.004-2.25 2.25-2.25H10m4-6l4 4m0 0l-4 4m4-4H10"
                    ></path>
                  </svg>
                  Reply
                </button>
                <button
                  class="flex items-center text-xs hover:text-red-500 transition"
                >
                  <svg
                    class="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  Like
                </button>
              </div>
              <span class="text-xs text-gray-400">ID: ${user.postid}</span>
            </div>
          </div>
        </div>
      </div>`;
}