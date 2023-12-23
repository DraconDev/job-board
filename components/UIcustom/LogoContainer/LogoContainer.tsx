import LoginLogo from "@/components/Auth/LoginLogo";
import LogoButton from "@/components/Navbar/LogoButton";

type Props = {};

const LogoContainer = (props: Props) => {
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
            <div className="">
                <LogoButton type="postjob" />
            </div>
            <LoginLogo />
        </div>
    );
};

export default LogoContainer;
