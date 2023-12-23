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
                <div className="h-full p-1 hover:bg-accent rounded-lg">
                    <div className="flex items-center justify-center h-full ">
                        <Image
                            src={`${type}.svg`}
                            alt={type}
                            width={36}
                            height={36}
                            title={type}
                            className="invert "
                        />
                    </div>
                </div>
            </Link>
        </>
    );
}
