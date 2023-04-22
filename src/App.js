import './App.css';

function App() {
  return (
<section class="sectionH bg-neutral-200 dark:bg-neutral-700 ">
  <div class="p-20">
    <div
      class="flex flex-wrap items-center justify-center">
        <div
          class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div class="lg:flex lg:flex-wrap">

          <div
              class="flex items-center back"
              >
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 class="mb-6 text-5xl font-semibold">
                VIABLEQUEST
                </h4>
              
              </div>
            </div>
          
            <div class="px-4 md:px-0 bg-white ">
              <div class="md:mx-6 md:p-12">
           
                <div class="text-center">
                  <h4 class=" mt-1 pb-1 text-xl font-semibold">
                    Sign In
                  </h4>
                  <div class="mb-12 mt-1 pb-1 text-gray-400">
                    Login With
                  </div>
                </div>

                <form>
                  <div class="flex justify-center">
          <button class="mb-4 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg"/>
    <span>Sign n with Google</span>
    </button>
    </div>

    <h3 class="flex items-center w-full mb-8">
    <span class="flex-grow bg-gray-200 rounded h-1"></span>
    <span class="mx-3 text-gray-400">Or with email</span>
    <span class="flex-grow bg-gray-200 rounded h-1"></span>
</h3>
               
                  <div class="mb-8">
                  <div class="bg-white rounded-lg">
    <div class="relative bg-inherit">
        <input type="text" 
        class="peer bg-transparent h-10 w-full rounded-lg text-gray-200 
        placeholder-transparent ring-2 px-2 ring-gray-500 focus:text-gray-500 
        focus:outline-none focus:border-rose-600" placeholder="Enter Email"/>
        <label for="email" class="absolute cursor-text left-0 -top-3 text-sm
         text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base 
         peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 
         peer-focus:-top-3 peer-focus:text-mute peer-focus:text-sm transition-all">Email</label>
    </div>
</div>
                  </div>


                      
                  <div class="mb-4">
                  <div class="bg-white rounded-lg">
    <div class="relative bg-inherit">
        <input type="text" 
        class="peer bg-transparent h-10 w-full rounded-lg text-gray-200 
        placeholder-transparent ring-2 px-2 ring-gray-500 focus:text-gray-500 
        focus:outline-none focus:border-rose-600" placeholder="Enter Email"/>
        <label for="email" class="absolute cursor-text left-0 -top-3 text-sm
         text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base 
         peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 
         peer-focus:-top-3 peer-focus:text-mute peer-focus:text-sm transition-all">Password</label>
         
    </div>
</div>
                  </div>


                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                            class="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                        <label for="remember_me" class="ml-2 block text-xs text-gray-900">
                            Remember me for days
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="text-xs text-blue-400 hover:text-blue-500">
                            Forgot password?
                        </a>
                    </div>
                </div>

                
                  <div class="mb-12 pb-1 pt-1 text-center ">
                    <button
                      class="mb-3 back rounded-lg  inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs 
                      font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] 
                      transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]
                       focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] 
                       focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button">
                    Sign in
                    </button>
                    
        <div class="flex justify-center">
           <p class="text-gray-400">Not a member yet?</p> 
            <a href="#" class="pl-1  text-blue-400 underline-offset-4 hover:underline">Sign Up</a>
        </div>

                  </div>
                </form>


                <footer class="flex items-center justify-center ">
                    <p class="mt-10 text-gray-400">2023 Viablequest </p>
                  
                  </footer>
              </div>
            </div>

         
          </div>
        </div>
      
    </div>
  </div>
</section>
      
  
  );
}

export default App;
