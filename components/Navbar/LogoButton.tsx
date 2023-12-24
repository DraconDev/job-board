import Image from "next/image";
import Link from "next/link";

export default function Logo({
    type,
    route,
}: {
    type: string;
    route?: string;
}) {
    return (
        <>
            <Link
                href={route ? `/${route}` : `/${type}`}
                className="h-full"
            >
                <div className=" p-1 hover:bg-accent rounded-lg">
                    <div className="flex items-center justify-center  ">
                        <Image
                            src={`${type}.svg`}
                            alt={type}
                            width={32}
                            height={32}
                            title={type}
                            className="invert "
                        />
                    </div>
                </div>
            </Link>
        </>
    );
}
