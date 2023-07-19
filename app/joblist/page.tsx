import Button from "@/components/Button";
import { use } from "react";

async function fetchData() {
    const res = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );
    return res.json();
}

export default function Page() {
    // needs async func
    // const data = await fetchData();
    const data = use(fetchData());
    return (
        <>
            {/* <div>{JSON.stringify(data)}</div> */}
            <div>{data[0].word}</div>
            {/* <div className="">{JSON.stringify(data)}</div> */}
            <Button>hell</Button>
        </>
    );
}
