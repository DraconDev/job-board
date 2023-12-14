import Image from "next/image";

const ProfileIcon = () => {
    return (
        <div className="h-16 w-16 overflow-hidden rounded-full relative">
            <Image
                src="https://placeimg.com/100/100/people" // Replace with your own image URL
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full" // This will make the image round
            />
        </div>
    );
};

export default ProfileIcon;
