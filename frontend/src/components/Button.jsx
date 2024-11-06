export function Button({text , onclick}) {
    // return (
    //     <button
    //       type="button"
    //       className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    //     >
    //       {text}
    //     </button>
    //   );
    return <div className="pt-3">
        <button onClick={onclick} className="bg-black text-white w-full pt-1 pb-2 pl-3 pr-3 rounded-lg hover:bg-white hover:text-black hover:border-slate-300 border-solid border-1 hover:border-solid hover:border-2">{text}</button>
    </div>
}