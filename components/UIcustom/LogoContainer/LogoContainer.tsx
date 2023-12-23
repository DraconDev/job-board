import LoginLogo from "@/components/Auth/LoginLogo";
import LogoButton from "@/components/Navbar/LogoButton";
import Dropmenu from "@/components/UI/Dropdown/Dropmenu";
import { useState } from "react";
import { MdFileUpload } from "react-icons/md";

type Props = {};

const LogoContainer = (props: Props) => {
    const post = ["job", "task"];
    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex gap-1 items-center ">
            <div className="">
                <LogoButton
                    type="tasks"
                    route="tasks/all"
                />
            </div>
            <div className="hidden md:block">
                <LogoButton type="notifications" />
            </div>
            <div className="relative">
                {/* <LogoButton type="postjob" /> */}
                <Dropmenu list={post}>
                    <MdFileUpload />
                </Dropmenu>
            </div>
            <LoginLogo />
        </div>
    );
};

export default LogoContainer;
