import React from "react"
import { sbrain } from "../assets/images"


const BlogDetail = () => {
  return (
    <>
        <main className=" flex flex-col items-center justify-center h-fit bg-primary">
            <div className=" text-3xl my-[3rem] text-secondary font-bold text-center">
                <p>Quantum Computing</p>
            </div>
            <div className="my-[2rem] flex items-center justify-center w-[60rem] h-[25rem] rounded-lg">
                <img src={sbrain} alt="image"  className=" w-full h-full" />
            </div>
            <div className=" text-secondary mt-[5rem] text-md  h-screen w-[70rem]">
                <p>
                Hint 💡
Stuck somewhere? No worries, we’re here to help!

Ask yourself —

What is expected (The Output)?

When someone visits the details of any kind of post, we would like to show similar kinds of posts or related posts created by that user.

What do we need in order to build that?

User ID
Postcard and its Grid
Loader to show the status while doing the fetch
Appwrite function to get the related posts
…?
Do I even have to explain? You got the game, don’t you?

Yes, the UI of Related posts is similar to what we have done before with Explore or another page.

See, that’s the magic of Reusability. Once you abstract something properly, you can reuse it wherever needed.

So,

Create the horizontal line and the head text by following the Figma styles

Reuse the GridPostList component and pass the dummy data for now to see the results

Create a query hook, say, useGetUserPosts, that will fetch the posts created by that particular user
                </p>
            </div>
        </main>
    </>
  )
}

export default BlogDetail