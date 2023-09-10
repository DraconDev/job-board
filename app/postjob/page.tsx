import Button from "@/components/Button";
import { JobPost } from "@/db/schema";
import React from "react";

const PostJob = () => {
    function handleClick() {
        const post = new JobPost({
            title: "Software Engineer",
            description:
                "We are looking for a software engineer to join our team.",
            location: "San Francisco, CA",
            salaryMin: 10000,
            salaryMax: 15000,
            date: new Date().toLocaleDateString(),
        });
        post.save();
    }
    return (
        <div>
            PostJob
            <button onClick={() => handleClick()}>Add job</button>
        </div>
    );
};

export default PostJob;
