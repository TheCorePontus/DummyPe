export function InputBox({text, placeholder, onchange}) {
    return <div className="pt-4">
        <div class="relative">
    <input type="text" onChange={onchange} id="hs-floating-gray-input-passowrd" class="peer p-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2" placeholder={placeholder} />
    <label for="hs-floating-gray-input-passowrd" class="absolute pl-3 top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">{text}</label>
  </div>
    </div>

    // return (
    //     <div>
    //   <div className="text-sm font-medium text-left py-2">{text}</div>
    //   <input
    //     placeholder={placeholder}
    //     className="w-full px-2 py-1 border rounded border-slate-200"
    //   />
    // </div>
    // )
}