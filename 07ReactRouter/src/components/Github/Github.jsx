import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github(){

    // const [data,setData]=useState({})
    // useEffect(
    //     ()=> {fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     },[]
    // )
    const data=useLoaderData()


    return(
        <div className="items-center">
    <div class="relative h-[400px] w-[300px] rounded-md justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Github</h1>
  <img
    src={data.avatar_url}
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{data.name}</h1>
    <p class="mt-2 text-sm text-gray-300">
      <b>Followers:</b>
      {data.followers}
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>
</div>
    )

    


}

export default Github

export const githubInfoLoader=async function(){
    const response=await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()

}