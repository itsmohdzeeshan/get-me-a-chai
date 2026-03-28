import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col text-white h-[44vh] justify-center items-center gap-4">
        <div className="font-bold text-5xl"> Get me a Chai</div>
        <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</p>

        <div className="flex gap-4">
          <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md'>
            Login
          </button>

          <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md'>
            Read more
          </button>
        </div>
      </div>

      <div className="h-0.5 bg-white opacity-10"></div>

      <div className="text-white container mx-auto py-16">

        <h3 className="font-bold text-center text-lg my-10">Your Fans Can now Buy you a chai</h3>

        <div className="flex justify-around">

          <div className="flex flex-col item space-y-3 items-center justify-center">
            <img className="bg-slate-500 rounded-full" src="man.gif" alt="man" width={60} />
            <p>Fund yourself</p>
          </div>

          <div className="flex flex-col item space-y-3 items-center justify-center">
            <img className="bg-slate-500 rounded-full" src="coin.gif" alt="man" width={60} />
            <p>Fund yourself</p>
          </div>

          <div className="flex flex-col item space-y-3 items-center justify-center">
            <img className="bg-slate-500 rounded-full" src="group.gif" alt="man" width={60} />
            <p>Fund yourself</p>
          </div>

        </div>
      </div>

      <div className="h-0.5 bg-white opacity-10"></div>

      <div className="text-white container mx-auto py-16">

        <h3 className="font-bold text-center text-lg my-10">Your Fans Can now Buy you a chai</h3>

        <div className="flex justify-around">

          <div className="flex flex-col item space-y-3 items-center justify-center">
            <img className="bg-slate-500 rounded-full" src="man.gif" alt="man" width={60} />
            <p>Fund yourself</p>
          </div>

          <div className="flex flex-col item space-y-3 items-center justify-center">
            <img className="bg-slate-500 rounded-full" src="coin.gif" alt="man" width={60} />
            <p>Fund yourself</p>
          </div>

          <div className="flex flex-col item space-y-3 items-center justify-center">
            <img className="bg-slate-500 rounded-full" src="group.gif" alt="man" width={60} />
            <p>Fund yourself</p>
          </div>

        </div>
      </div>
    </>
  );
}
