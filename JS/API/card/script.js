function Userdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (rawData) {
      console.log(rawData);
      return rawData.json();
    })
    .then((data) => {
      console.log("Final Data Step 1", data);
      console.log("Final Data Step 2", data.name);
    //   console.log("first Data ", data.results[0].picture.large);

      data.forEach( user => {
        RenderUI(user);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
Userdata();

function RenderUI(user) {

    let card = document.querySelector(".card")

    card.innerHTML += `<article class="group relative w-full max-w-md animate-fade-in">
        <!-- Decorative Glow Background -->
        <div
          class="absolute -inset-1 bg-gradient-to-r from-amber-900/20 via-amber-600/10 to-stone-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        ></div>

        <!-- Card Container -->
        <div
          class="relative bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 rounded-2xl m-8  border border-stone-800 overflow-hidden transition-all duration-500 hover:border-amber-700/30 hover:-translate-y-2"
        >
          <!-- Top Accent Border -->
          <div
            class="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"
          ></div>

          <!-- Card Content -->
          <div class="p-8">
            <!-- Avatar Section -->
            <div class="flex items-start gap-5 mb-8">
              

              <!-- Name & Username -->
              <div class="flex-1 pt-1">
                <h2
                  class="font-serif text-3xl text-stone-100 font-medium tracking-tight animate-fade-in animate-delay-200 group-hover:text-amber-200 transition-colors duration-300"
                >${user.name}
                </h2>
                <p
                  class="lowercase font-mono text-sm text-amber-600 mt-1 animate-fade-in animate-delay-300"
                >
                @${user.username}
                </p>
              </div>
            </div>

            <!-- Divider -->
            <div
              class="h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-8"
            ></div>

            <!-- Contact Info -->
            <div class="space-y-5 animate-fade-in animate-delay-300">
              <!-- Email -->
              <div class="flex items-center gap-4 group/item">
                <div
                  class="w-10 h-10 rounded-lg bg-stone-800/50 border border-stone-700/50 flex items-center justify-center group-hover/item:bg-amber-900/30 group-hover/item:border-amber-700/30 transition-all duration-300"
                >
                  <svg
                    class="w-5 h-5 text-stone-400 group-hover/item:text-amber-500 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-xs text-stone-500 uppercase tracking-wider mb-0.5"
                  >
                    Email
                  </p>
                  <p
                    class="text-stone-300 truncate group-hover/item:text-stone-100 transition-colors duration-300"
                  >
                    ${user.email}
                  </p>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4 group/item">
                <div
                  class="w-10 h-10 rounded-lg bg-stone-800/50 border border-stone-700/50 flex items-center justify-center group-hover/item:bg-amber-900/30 group-hover/item:border-amber-700/30 transition-all duration-300 flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-stone-400 group-hover/item:text-amber-500 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-xs text-stone-500 uppercase tracking-wider mb-0.5"
                  >
                    Address
                  </p>
                  <p
                    class="text-stone-300 group-hover/item:text-stone-100 transition-colors duration-300"
                  >
                    ${user.address.street}, ${user.address.suite}
                  </p>
                  <p class="text-stone-400 text-sm mt-0.5">
                    ${user.address.city}, ${user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>

            <!-- Footer Actions -->
            
          </div>

          <!-- Bottom Decorative Corner -->
          <div
            class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-900/10 to-transparent pointer-events-none"
          ></div>
        </div>
      </article>`;  
}

