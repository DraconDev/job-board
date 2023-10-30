import Button from "@/components/Button";
import { JobPost } from "@/db/schema";
import axios from "axios";
import React from "react";

const PostJob = () => {
    function handleClick() {
        //     const post = new JobPost({
        //         title: "Software Engineer",
        //         description:
        //             "We are looking for a software engineer to join our team.",
        //         location: "San Francisco, CA",
        //         salaryMin: 10000,
        //         salaryMax: 15000,
        //         date: new Date().toLocaleDateString(),
        //     });
        //     post.save();

        //     axios
        //         .post("/api/jobs", post)
        //         .then((response) => {
        //             console.log("Job posted successfully:", response.data);
        //             // Handle the response from the backend
        //         })
        //         .catch((error) => {
        //             console.error("Error posting job:", error);
        //             // Handle the error
        //         });
        // }
        return (
            <div className="flex items-center justify-center h-screen flex-column">
                <div className="">PostJob HELLO</div>
                {/* <button onClick={() => handleClick()}>Add job</button> */}
                <button onClick={() => console.log("hello")}>test</button>
            </div>
        );
    }
};

export default PostJob;
